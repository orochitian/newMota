import monsters from './Monsters';
import render from './Render';
function getId(id) {
    return document.getElementById(id);
}

export default function (core) {
    var hero = core.hero;
    var map = core.maps[core.mapIndex];
    let mapMonsters = [];
    for( let i=0; i<map.grid.length; i++ ) {
        if(  /^monster|boss$/.test(map.grid[i].type) ) {
            mapMonsters.push(map.grid[i].id);
        }
    }
    mapMonsters = Array.from(new Set(mapMonsters));
    //  怪物手册
    getId('menu').onclick = function () {
        var menuHtml = ``;
        if( hero.monsterMenu < 1 ) {
            render.renderMsg('未获得怪物手册');
            return;
        }
        if( mapMonsters.length < 1 ) {
            render.renderMsg('没有怪兽了');
            return;
        }

        for( let i=0; i<mapMonsters.length; i++ ) {
            var monster = monsters[mapMonsters[i]];
            var heroDamage = hero.attack - monster.defense < 0 ? 0 : hero.attack - monster.defense;
            var monsterDamage = monster.attack - hero.defense < 0 ? 0 : monster.attack - hero.defense;
            var heroHitTimes = Math.ceil(monster.hp / heroDamage);
            if( heroDamage === 0 ) {
                var damage = '打不过';
            } else if( monsterDamage === 0 || heroDamage >= monster.hp ) {
                var damage = 0;
            } else {
                var damage = monsterDamage*(heroHitTimes-1)
            }
            menuHtml += `
                    <p>
                        <img src="${monster.img}" style="vertical-align: bottom">：
                        血量：<span class="green margin-lr">${monster.hp}</span> 
                        攻击：<span class="green margin-lr">${monster.attack}</span> 
                        防御：<span class="green margin-lr">${monster.defense}</span>
                    </p>
                    <p style="margin-left: 50px;">
                        损失：<span class="orange margin-lr">${damage}</span>
                        金币：<span class="yellow margin-lr">${monster.money}</span>
                    </p>
                `
        }
        render.renderDialog(menuHtml, () => {})
    };

    //  传送权杖
    // getId('chuansong').onclick = function () {
    //     if( hero.chuansong < 1 ) {
    //         tools.msgRender('未获得传送权杖');
    //         return false;
    //     }
    //     var html = ``;
    //     for( var i=0; i<flows.length; i++ ) {
    //         html += `<button class="margin-lr fly">${flows[i]}</button>`;
    //     }
    //     //  必须先渲染出楼层选择dom，才能绑定事件。
    //     tools.eventRender(html);
    //     var fly = document.getElementsByClassName('fly');
    //     for( var i=0; i<fly.length; i++ ) {
    //         fly[i].onclick = function () {
    //             var flyTo = this.innerHTML * 1;
    //             getId('event').style.opacity = 0;
    //             //  如果选择的楼层是当前楼层，直接返回。
    //             if( flyTo === core.mapIndex ) {
    //                 return false;
    //             }
    //             if( flyTo > core.mapIndex ) {
    //                 hero.position = core.maps[flyTo].heroPostion[0];
    //             }
    //             if( flyTo < core.mapIndex ) {
    //                 hero.position = core.maps[flyTo].heroPostion[1];
    //             }
    //             core.mapIndex = flyTo;
    //             core.render(core.maps[flyTo], hero);
    //             tools.domRender(hero, flyTo);
    //             localStorage.setItem('mota', JSON.stringify(core));
    //         }
    //     }
    // };

    //  地震卷轴
    // getId('dizhen').onclick = function () {
    //     if( hero.dizhen < 1 ) {
    //         tools.msgRender('未获得地震卷轴');
    //         return;
    //     }
    //     map.walls = [];
    //     hero.dizhen--;
    //     core.render(map, hero);
    // }

    //  圣水
    // getId('superWater').onclick = function () {
    //     if( hero.superWater < 1 ) {
    //         tools.msgRender('未获得圣水');
    //         return;
    //     }
    //     hero.hp += hero.attack + hero.defense;
    //     hero.superWater--;
    //     tools.domRender(hero, core.mapIndex);
    // }
}