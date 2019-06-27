import businessMan from '../../images/npc/businessMan.png';
import wiseMan from '../../images/npc/wiseMan.png';
import thief from '../../images/npc/thief.png';
import render from '../Render';
import {size} from '../Global';

export default [
    /*
    *   事件 0
    *   与小偷对话，墙被打开，和小偷越狱。
    * */
    {
        msg: [
            '你清醒了吗？你到监狱时还处于昏迷中，魔法警卫把你扔到我这个房间，但你很幸运，我刚完成逃跑的暗道，我们一起越狱吧。',
            '你的剑和盾被警卫拿走了，你必须先找到武器，我知道铁剑在5楼，铁盾在9楼，你最好先取到它们。我现在有事要做没法帮你，再见。'
        ],
        action: function (core, index) {
            var temp = `
                <p> <span><img src=${thief}></span>： ${this.msg[0]}</p>
                <p> ${this.msg[1]} </p>
            `
            render.renderDialog(temp, function () {
                render.clearGrid(core.maps[core.mapIndex], index);
                render.clearGrid(core.maps[core.mapIndex], 67);
                core.hero.init(core);
            });
        }
    },
    /*
    *   事件 1
    *   与贤者对话，可以获得2000金币。
    * */
    {
        msg: `
           <span class="red"><img src="${wiseMan}"></span>： 
           谢谢你救了我，为感谢你的帮助，请收下这些礼物（1000金币）<br>
         `,
        action: function (core, index) {
            render.renderDialog(this.msg, () => {
                render.clearGrid(core.maps[core.mapIndex], index);
                core.hero.money += 1000;
                render.renderStatus(core);
                render.renderMsg('获得1000金币');
                core.hero.init(core);
            });
        }
    },
    /*
    *   事件 2
    *   与商人对话，可以获得3%攻击力和防御力的提升。
    * */
    {
        msg: `
           <span class="green"><img src="${businessMan}"></span>： 
           谢谢你救了我，我可以用祝福魔法提升你3%的攻击力和防御力，现在就提升吗？<br>
         `,
        action: function (core, index) {
            render.renderConfirm(this.msg, () => {
                core.hero.attack += Math.ceil(core.hero.attack * 0.03);
                core.hero.defense += Math.ceil(core.hero.defense * 0.03);
                render.renderStatus(core);
                render.clearGrid(core.maps[core.mapIndex], index);
                core.hero.init(core);
            }, () => {
                core.hero.init(core);
            });
        }
    }
]