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
                <p style="padding: ${size/2}px ${size}px 0 ${size}px"> <span><img src=${thief}></span>： ${this.msg[0]}</p>
                <p style="padding: 0 ${size}px; text-indent: 3em;"> ${this.msg[1]} </p>
                <p style="text-align: right; padding: ${size/2}px"><button id="close-dialog" type="button">结束对话</button></p>
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
    *   与商人对话，可以获得3%攻击力和防御力的提升。
    * */
    {
        msg: `
           <span class="green"><img src="${businessMan}"></span>： 
           谢谢你救了我，我可以用祝福魔法提升你3%的攻击力和防御力，现在就提升吗？<br>
         `,
        action: function (core, index) {
            alert(msg);
        }
    },
    /*
    *   事件 2
    *   与贤者对话，可以获得2000金币。
    * */
    {
        msg: `
           <span class="red"><img src="${wiseMan}"></span>： 
           谢谢你救了我，作为感谢，我将身上的金币都赠与你。再见！<br>
         `,
        action: function (core, index) {

            core.hero.disabled();
        }
    }
]