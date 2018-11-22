import tools from "../tools";
import businessMan from '../../images/npc/businessMan.png';
import thief from '../../images/npc/thief.png';

export default [
    /*
    *   事件 0
    *   与商人对话，200金币换一把蓝钥匙。
    * */
    {
        msg: `
           <span class="red"><img src="${businessMan}"></span>： 
           我有一把蓝钥匙，你出200个金币就卖给你。<br>
         `,
        action: function (core, index) {
            tools.confirmRender(this.msg, function () {
                if( core.hero.money < 200 ) {
                    tools.msgRender('金币不够');
                    core.hero.init();
                    return;
                }
                var map = core.maps[core.mapIndex];
                core.hero.money -= 200;
                core.hero.blueKey++;
                map.npc.splice(index, 1);
                tools.domRender(core.hero, core.mapIndex);
                core.render(map, core.hero);
                var info = '如果你持有十字架，面对兽人和吸血鬼时你的攻击力加倍。在没有十字架的情况下，你不可能打败吸血鬼。十字架被藏在高于15楼的墙内。'
                tools.eventRender(info, function () {
                    core.hero.init();
                });
            }, function () {
                core.hero.init();
            });
            core.hero.disabled();
        }
    },
    /*
    *   事件 1
    *   与盗贼对话，他会帮你开门。
    * */
    {
        msg: `
           <span class="red"><img src="${thief}"></span>： 
           啊哈！你还好吗？这大章鱼挡住了我前进的道路，现在暗道终于完工了，你现在最好也躲开他。我要走了，再见。
         `,
        action: function (core, index) {
            tools.eventRender(this.msg, function () {
                var map = core.maps[core.mapIndex];
                map.npc.splice(index, 1);
                map.walls.splice( map.walls.indexOf(7), 1 );
                core.render(map, core.hero);
                core.hero.init();
            });
            core.hero.disabled();
        }
    }
]