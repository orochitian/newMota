import {ctx, grid, size} from "./Global";
import gateSource from '../images/gates.png';
import walls from "./Walls";
import gates from './Gates';
import monsters from './Monsters';
import items from './Items';
import npcs from './Npcs';

export default {
    draw: function (src, callback) {
        var oImg = new Image();
        oImg.src = src;
        oImg.onload = function () {
            callback(oImg);
        }
    },
    delete: function (map, index) {
        map.grid[index] = {i: index};
    },
    renderFight: function (core, index) {
        var hero = core.hero;
        var map = core.maps[core.mapIndex];
        var next = map.grid[index];
        var monster = monsters[next.id];
        var heroDamage = hero.attack - monster.defense < 0 ? 0 : hero.attack - monster.defense;
        var monsterDamage = monster.attack - hero.defense < 0 ? 0 : monster.attack - hero.defense;
        if( heroDamage === 0 ) {
            this.renderMsg('无法破防，打不过');
            return false;
        }
        var heroHitTimes = Math.ceil(monster.hp / heroDamage);
        var monsterHitTimes = Math.ceil(hero.hp / monsterDamage);
        if( heroHitTimes > monsterHitTimes ) {
            this.renderMsg('血量不够，打不过');
            return false;
        }
        var oFight = document.getElementById('fight');
        document.getElementById('monster-icon').style.backgroundImage = 'url('+monster.img+')';
        document.getElementById('monster-hp').innerHTML = monster.hp;
        document.getElementById('monster-attack').innerHTML = monster.attack;
        document.getElementById('monster-defense').innerHTML = monster.defense;
        document.getElementById('hero-hp').innerHTML = hero.hp;
        document.getElementById('hero-attack').innerHTML = hero.attack;
        document.getElementById('hero-defense').innerHTML = hero.defense;
        oFight.style.display = 'block';
        var timmer = null;
        var times = 0;
        var monsterHp = monster.hp;
        var heroHp = hero.hp;
        var _this = this;
        timmer = setInterval(function () {
            times++;
            monsterHp -= heroDamage;
            monsterHp < 0 ? monsterHp = 0 : '';
            document.getElementById('monster-hp').innerHTML = monsterHp;
            if( monsterDamage > 0 ) {
                heroHp -= monsterDamage;
                document.getElementById('hero-hp').innerHTML = heroHp;
            }
            if( times === heroHitTimes ) {
                oFight.style.display = 'none';
                _this.renderMsg('战斗胜利，获得' + monster.money + '金币');
                var openGate = next.clear;
                if( next.clear ) {
                    var opens = openGate.split(',');
                    map.clear.splice( map.clear.indexOf(openGate), 1 );
                    if( map.clear.indexOf(openGate) === -1 ) {
                        for( var i=0; i<opens.length; i++ ) {
                            _this.openGate(core, opens[i]*1);
                        }
                    }
                }
                _this.clearGrid(map, index);
                setTimeout(function () {
                    hero.init(core);
                }, 400);
                clearInterval(timmer);
            }
        }, 300);
        hero.disabled();
        hero.hp -= monsterDamage*(heroHitTimes-1);
        hero.money += monster.money;
    },
    renderMsg: function (msg) {
        var oMessage = document.getElementById('message');
        oMessage.innerHTML = '';
        var inner = document.createElement('div');
        oMessage.appendChild(inner);
        inner.id = 'message-inner';
        inner.innerHTML = msg;
    },
    renderDialog: function (msg, callback) {
        var oDialog = document.getElementById('dialog');
        oDialog.innerHTML = '';
        var inner = document.createElement('div');
        oDialog.appendChild(inner);
        inner.id = 'dialog-inner';
        inner.innerHTML = msg;
        document.getElementById('close-dialog').addEventListener('click', function () {
            inner.style.animation = 'fadeOut 1s forwards';
            callback();
        });
    },
    renderHero: function (core) {
        var imgPos = 0;
        var hero = core.hero;
        switch (hero.direction) {
            case 'left':
                imgPos = 32; break;
            case 'right':
                imgPos = 65; break;
            case 'up':
                imgPos = 98; break;
            case 'down':
                imgPos = 0;  break;
        }
        this.draw(hero.img, function (oImg) {
            ctx.drawImage(oImg, 0, imgPos, 32, 32, grid[hero.position][0], grid[hero.position][1], size, size);
        });
    },
    renderMap: function (core) {
        this.clearMap();
        var map = core.maps[core.mapIndex];
        for( var i=0; i<map.grid.length; i++ ) {
            var mapGrid = map.grid[i];
            if( mapGrid.type === 'wall' ) {
                this.renderGrid(walls.wall, i);
            } else if( mapGrid.type === 'monster' ) {
                this.renderGrid(monsters[mapGrid.id].img, i);
            } else if( mapGrid.type === 'gate' ) {
                this.renderGrid(gates[mapGrid.id], i);
            } else if( mapGrid.type === 'item' ) {
                this.renderGrid(items[mapGrid.id].img, i);
            } else if( mapGrid.type === 'npc' ) {
                this.renderGrid(npcs[mapGrid.id], i);
            } else if ( mapGrid.type === 'upStair' || mapGrid.type === 'downStair' ) {
                this.renderGrid(walls[mapGrid.type], i);
            }
        }
        this.renderHero(core);
    },
    clearMap: function () {
        var mapSize = size * 11;
        ctx.clearRect(0, 0, mapSize, mapSize);
    },
    renderGrid: function (src, i) {
        this.draw(src, function (oImg) {
            ctx.drawImage(oImg, 0, 0, 32, 32, grid[i][0], grid[i][1], size, size);
        });
    },
    clearGrid: function (map, index) {
        var steps = 0;
        function animate() {
            steps++;
            ctx.clearRect(grid[index][0], grid[index][1], size, size/4*steps);
            if( steps > 3 ) {
                steps = 0;
                return;
            }
            setTimeout(function () {
                requestAnimationFrame(animate);
            }, 80);
        }
        requestAnimationFrame(animate);
        this.delete(map, index);
    },
    openGate: function (core, index) {
        var map = core.maps[core.mapIndex];
        var hero = core.hero;
        var gate = map.grid[index].id;
        var steps  = 0;
        var oImg = new Image();
        oImg.src = gateSource;
        if( gate === 'gate1' && hero.yellowKey > 0 ) {
            var imgPos = 0;
            hero.yellowKey--;
        } else if( gate === 'gate2' && hero.blueKey > 0 ) {
            var imgPos = 32;
            hero.blueKey--;
        } else if( gate === 'gate3' && hero.redKey > 0 ) {
            var imgPos = 64;
            hero.redKey--;
        } else if( gate === 'gate4' ) {
            var imgPos = 96;
        } else if( gate === 'gate5' ) {
            this.clearGrid(map, index);
            return;
        } else {
            return;
        }
        function animate() {
            ctx.clearRect(grid[index][0], grid[index][1], size, size);
            ctx.drawImage(oImg, imgPos, 32*steps, 32, 32, grid[index][0], grid[index][1], size, size);
            if( steps > 3 ) {
                ctx.clearRect(grid[index][0], grid[index][1], size, size);
                steps = 0;
                setTimeout(function () {
                    hero.init(core);
                }, 200);
                return;
            }
            steps++;
            setTimeout(function () {
                requestAnimationFrame(animate);
            }, 60);
        }
        requestAnimationFrame(animate);
        setTimeout(function () {
            hero.disabled();
        }, 0);
        this.delete(map, index);
    }
}