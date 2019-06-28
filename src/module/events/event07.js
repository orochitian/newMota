import render from "../Render";
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
            render.renderConfirm(this.msg, function () {
                if( core.hero.money < 50 ) {
                    render.renderMsg('金币不够');
                    core.hero.init(core);
                    return;
                }
                core.hero.money -= 50;
                core.hero.yellowKey += 5;
                render.renderStatus(core);
                var info = '在商店里你最好选择提升防御，只有在攻击力低于敌人的防御力时才提升攻击力。'
                render.renderDialog(info, function () {
                    render.clearGrid(core.maps[core.mapIndex], index);
                    core.hero.init(core);
                });
            }, function () {
                core.hero.init(core);
            });
        }
    }
]