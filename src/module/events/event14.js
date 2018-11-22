import tools from "../tools";

export default [
    /*
    *   事件 0
    *   开黄色门后，下方的墙打开。
    * */
    {
        action: function (core, index) {
            var map = core.maps[core.mapIndex];
            map.walls.splice( map.walls.indexOf(93), 1 );
            map.events.splice(index, 1);
            core.render(map, core.hero);
        }
    },
    /*
    *   事件 1
    *   干掉3个兽人勇士后，隐藏红色要是出现。
    * */
    {
        action: function (core, monster) {
            var map = core.maps[core.mapIndex];
            var monsters = map.monsters;
            for( var i=0; i<monsters.length; i++ ) {
                if( monsters[i][3] === monster[3] ) {
                    return;
                }
            }
            map.walls.splice( map.walls.indexOf(22), 1 );
            map.items.push(['redKey', 22, 1]);
            core.render(map, core.hero);
        }
    }
]