import tools from "../tools";
import businessMan from '../../images/npc/businessMan.png';

export default [
    /*
    *   事件 0
    *   与商人对话，50金币换5把黄钥匙。
    * */
    {
        msg: `
           <span class="red"><img src="${businessMan}"></span>： 
           我有五把黄钥匙，你出50个金币就卖给你。<br>
         `,
        action: function (core, index) {
            tools.confirmRender(this.msg, function () {
                if( core.hero.money < 50 ) {
                    tools.msgRender('金币不够');
                    core.hero.init();
                    return;
                }
                var map = core.maps[core.mapIndex];
                core.hero.money -= 50;
                core.hero.yellowKey += 5;
                map.npc.splice(index, 1);
                tools.domRender(core.hero, core.mapIndex);
                core.render(map, core.hero);
                var info = '在商店里你最好选择提升防御，只有在攻击力低于敌人的防御力时才提升攻击力。'
                tools.eventRender(info, function () {
                    core.hero.init();
                });
            }, function () {
                core.hero.init();

            });
            core.hero.disabled();
        }
    }
]