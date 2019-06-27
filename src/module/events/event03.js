import render from '../Render';
import wiseMan from '../../images/npc/wiseMan.png';
import mowang from '../../images/monsters/monster33.png';
import shouwei from '../../images/monsters/monster31.png';
import thief from '../../images/npc/thief.png';
import zhujue from '../../images/herodir/heroDown.png';

export default [
    /*
    *   事件 0
    *   英雄力量被夺走，返回到第2层。血量400，攻击力10，防御力10。
    * */
    {
        msg: `
           <span><img src="${mowang}"></span>： 
           欢迎来到魔塔，你是第一百位挑战者。你若能打败我所有的手下，我就与你一对一的决斗。<br>
           <span><img src="${zhujue}"></span>： 你谁了？你说撒呢？<br>
           <span><img src="${mowang}"></span>： 
           但是，在这之前你必须接受我的安排。<br>
           <span><img src="${zhujue}"></span>： 等等！我艹。。。
        `,
        msg1: `
            <span><img src="${thief}"></span>： 。。。。喂。。。喂，醒醒<br>
            <span><img src="${zhujue}"></span>：我是谁？我在哪？为什么我的屁股有点疼？<br>
            <span><img src="${zhujue}"></span>：呀卖呆~~~
        `,
        action: function (core, index) {
            setTimeout(() => {
                render.renderGrid(mowang, 70);
                render.renderGrid(shouwei, 81);
                render.renderGrid(shouwei, 91);
                render.renderGrid(shouwei, 93);
                render.renderGrid(shouwei, 103);
                render.renderDialog(this.msg,  () => {
                    render.delete(core.maps[core.mapIndex], index);
                    core.mapIndex = 2;
                    core.hero.position = 69;
                    core.hero.hp = 400;
                    core.hero.attack = 10;
                    core.hero.defense = 10;
                    render.renderStatus(core);
                    render.renderMap(core);
                    render.renderDialog(this.msg1, () => {
                        core.hero.init(core);
                    })
                });
            }, 200);
        }
    },
    /*
    *   事件 1
    *   与贤者对话，可以获得传送权杖。
    * */
    {
        msg: `
           <span class="red"><img src="${wiseMan}"></span>： 
           我可以给你怪物手册，它可以预测出当前楼层各类怪物对你的伤害<br>
         `,
        action: function (core, index) {
            render.renderDialog(this.msg, function () {
                render.clearGrid(core.maps[core.mapIndex], index);
                core.hero.monsterMenu++;
                render.renderMsg('获得怪物手册');
                core.hero.init(core);

            });
        }
    }
]