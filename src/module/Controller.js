import {ctx, size, grid} from './Global';
import heroSource from '../images/hero.png';
import items from './Items';
import render from './Render';
import events from './Events';
import shop from './events/shop';

var steps = 0;
var heroImg = new Image();
heroImg.src = heroSource;

function getArea(grid) {
    let left, right, top, bottom;
    if( grid % 11 === 0 ) {
        left = null;
        right = grid + 1;
    } else if( grid % 11 === 10 ) {
        right = null;
        left = grid -1;
    } else {
        left = grid - 1;
        right = grid + 1;
    }
    if( grid < 11 ) {
        top = null;
        bottom = grid + 11;
    } else if( grid > 109 ) {
        bottom = null;
        top = grid - 11;
    } else {
        top = grid - 11;
        bottom = grid + 11;
    }
    return {left, right, top, bottom}
}

export default {
    trigger: function (core, nextGrid) {
        var map = core.maps[core.mapIndex];
        var hero = core.hero;
        var nextType = map.grid[nextGrid].type;
        var nextId = map.grid[nextGrid].id;
        if( nextType === 'gate' && !/^gate(4|5)$/.test(nextId) ) {
            render.openGate(core, nextGrid);
        } else if( nextType === 'monster' || nextType === 'boss' ) {
            render.renderFight(core, nextGrid);
        } else if( nextType === 'transWall' ) {
            hero.disabled();
            render.clearGrid(map, nextGrid);
            hero.init(core);
        } else if( nextType === 'airWall' ) {
            render.renderWall(nextGrid);
        } else if( nextType === 'npc' ) {
            hero.disabled();
            var event = map.grid[nextGrid].event.split('-');
            events[event[0]][event[1]].action(core, nextGrid);
        } else if( nextType === 'shop' ) {
            shop(core);
        } else if( nextType == 'item' ) {
            if( /^item(04|05|06|07)$/.test(nextId) ) {
                hero[items[nextId].for] += items[nextId].value * map.area;
            } else {
                hero[items[nextId].for] += items[nextId].value;
            }
            render.renderMsg(items[nextId].name);
            render.delete(map, nextGrid);
        } else if( nextType == 'event' ) {
            var event = nextId.split('-');
            events[event[0]][event[1]].action(core, nextGrid);
            hero.disabled();
        } else if( nextType === 'upStair' ) {
            core.mapIndex++;
            hero.position = core.maps[core.mapIndex].downUp;
            hero.disabled();
            render.renderMap(core);
            hero.init(core);
        } else if( nextType === 'downStair' ) {
            core.mapIndex--;
            hero.position = core.maps[core.mapIndex].upDown;
            hero.disabled();
            render.renderMap(core);
            hero.init(core);
        } else if( nextType === 'anlei' ) {
            let grids = Object.values(getArea(nextGrid));
            let gridArr = [];
            let hurt = null;
            for( let i=0; i<grids.length; i++ ) {
                let grid = grids[i];
                if( grid && map.grid[grid].type === 'monster' ) {
                    gridArr.push(map.grid[grid].id);
                } else {
                    gridArr.push(null);
                }
            }
            //  判断周围是有具备触发暗雷条件的怪物
            //  守卫比较特殊，周围必须出现2个或2个以上的守卫才触发暗雷
            // noinspection JSAnnotator
            function isRepeat() {
                let repeat = 0;
                for( let i=0; i<gridArr.length; i++ ) {
                    if( gridArr[i] === 'monster01' ) {
                        repeat++;
                    }
                }
                if( repeat > 1 ) {
                    return true;
                }
                return false;
            }
            if( gridArr.includes('monster01') && isRepeat() ) {
                hurt = hero.hp / 2;
            } else if( gridArr.includes('monster02') ) {
                hurt = hero.hp - 200;
            }
            //  hurt 表示已经触发了暗雷
            if( hurt ) {
                render.renderHurt();
                hero.hp = hurt;
                hero.disabled();
                hero.init(core);
            }
        }
        //  除了打怪外，其他事件触发更新角色状态界面。因为打怪需要战斗结束后再更新界面。
        if( nextType && !/^monster|boss|npc$/.test(nextType) ) {
            render.renderStatus(core);
        }
    },
    canMove: function (core, nextPosition, nextGrid) {
        if( nextPosition[0] > size * 10 || nextPosition[0] < 0 || nextPosition[1] > size * 10 || nextPosition[1] < 0 ) {
            return false;
        }
        var map = core.maps[core.mapIndex];
        var nextType = map.grid[nextGrid].type;
        this.trigger(core, nextGrid);
        if( !nextType || nextType === 'event' || nextType === 'item' || nextType === 'anlei' ) {
            return true;
        }
        return false;
    },
    heroMove: function (core, direction) {
        var hero = core.hero;
        if( steps > 0 ) {
            return;
        }
        var imgPos = 0;
        var oldPosition = hero.position;
        var oldMapIndex = core.mapIndex;
        var position = [grid[hero.position][0], grid[hero.position][1]];
        var prev = position;
        var next = position;
        var moveX = position[0];
        var moveY = position[1];
        var speedX = 0;
        var speedY = 0;
        if( direction === 'right' ) {
            hero.position++;
            next = [ position[0] + size, position[1] ];
            speedX = size / 4;
            imgPos = 65;
        } else if( direction === 'left' ) {
            hero.position--;
            next = [ position[0] - size, position[1] ];
            speedX = -(size / 4);
            imgPos = 32;
        } else if( direction === 'up' ) {
            hero.position -= 11;
            next = [ position[0], position[1] - size ];
            speedY = -(size / 4);
            imgPos = 98;
        } else if( direction === 'down' ) {
            hero.position += 11;
            next = [ position[0], position[1] + size ];
            speedY = size / 4;
            imgPos = 0;
        }
        if( !this.canMove(core, next, hero.position) ) {
            if( core.mapIndex === oldMapIndex ) {
                hero.position = oldPosition;
                ctx.clearRect(prev[0], prev[1], size, size);
                ctx.drawImage(heroImg, steps*32, imgPos, 32, 32, prev[0], prev[1], size, size);
            }
            return false;
        }

        function animate() {
            steps++;
            ctx.clearRect(next[0], next[1], size, size);
            ctx.clearRect(prev[0], prev[1], size, size);
            ctx.drawImage(heroImg, steps*32, imgPos, 32, 32, moveX+=speedX, moveY+=speedY, size, size);
            if( steps > 3 ) {
                steps = 0;
                // ctx.clearRect(prev[0], prev[1], size, size);
                ctx.drawImage(heroImg, steps*32, imgPos, 32, 32, next[0], next[1], size, size);
                return;
            }
            setTimeout(function () {
                animate();
            }, 50)
        }
        animate();
    }
}