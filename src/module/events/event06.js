import render from "../Render";
import businessMan from '../../images/npc/businessMan.png';
import wiseMan from '../../images/npc/wiseMan.png';

export default [
    /*
    *   事件 0
    *   与商人对话，50金币换一把蓝钥匙。
    * */
    {
        msg: `
           <span><img src="${businessMan}"></span>： 
           我有一把蓝钥匙，你出50个金币就卖给你。<br>
         `,
        action: function (core, index) {
            render.renderConfirm(this.msg, function () {
                if( core.hero.money < 50 ) {
                    render.renderMsg('金币不够');
                    core.hero.init(core);
                    return;
                }
                core.hero.money -= 50;
                core.hero.blueKey++;
                render.renderStatus(core);
                var info = '魔塔一共50层（如果我能把游戏做完的话。。。），每10层为一个区域。如果不打败此区域的头目就不能到更高的地方。'
                render.renderDialog(info, function () {
                    render.clearGrid(core.maps[core.mapIndex], index);
                    core.hero.init(core);
                });
            }, function () {
                core.hero.init(core);
            });
        }
    },
    /*
    *   事件 1
    *   与贤者对话，告诉你一些游戏信息。
    * */
    {
        msg: `
           <span class="red"><img src="${wiseMan}"></span>： 
           你购买了礼物后再与商人对话，他会告诉你一些重要的消息。<br>
           <span class="blue">Ps：由于游戏制作初期没有考虑到二次事件的问题，所以改成购买物品完成后，商人直接就会告诉你一些消息。</span>
         `,
        action: function (core, index) {
            render.renderDialog(this.msg, function () {
                render.clearGrid(core.maps[core.mapIndex], index);
                core.hero.init(core);
            });
        }
    }
]