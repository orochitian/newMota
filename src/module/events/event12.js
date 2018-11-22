import tools from "../tools";
import businessMan from '../../images/npc/businessMan.png';

export default [
    /*
    *   事件 0
    *   与商人对话，800金币换一把红钥匙。
    * */
    {
        msg: `
           <span class="red"><img src="${businessMan}"></span>： 
           我有一把红钥匙，你出800个金币就卖给你。<br>
         `,
        action: function (core, index) {
            tools.confirmRender(this.msg, function () {
                if( core.hero.money < 800 ) {
                    tools.msgRender('金币不够');
                    core.hero.init();
                    return;
                }
                var map = core.maps[core.mapIndex];
                core.hero.money -= 800;
                core.hero.redKey++;
                map.npc.splice(index, 1);
                tools.domRender(core.hero, core.mapIndex);
                core.render(map, core.hero);
                var info = '魔塔一共50层（如果能做完的话。。。），每10层为一个区域。如果不打败此区域的头目就不能到更高的地方。'
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
    *   与商人对话，1000金币买一把黄色钥匙。
    * */
    {
        msg: `
           <span class="red"><img src="${businessMan}"></span>： 
           哥有许多黄色钥匙，1000金币一把你敢要吗？
         `,
        action: function (core, index) {
            tools.confirmRender(this.msg, function () {
                if( core.hero.money < 1000 ) {
                    tools.msgRender('金币不够');
                    core.hero.init();
                    return;
                }
                core.hero.money -= 1000;
                core.hero.yellowKey++;
                tools.domRender(core.hero, core.mapIndex);
                core.hero.init();
            }, function () {
                core.hero.init();
            });
            core.hero.disabled();
        }
    }
]