import tools from "../tools";
import wiseMan from '../../images/npc/wiseMan.png';
import mowang from '../../images/monsters/monster33.png';
import thief from '../../images/npc/thief.png';
import zhujue from '../../images/hero/heroDown.png';

export default [
    /*
    *   事件 0
    *   英雄力量被夺走，返回到第2层。血量400，攻击力10，防御力10。
    * */
    {
        msg: `
           <span class="red"><img src="${mowang}"></span>： 
           欢迎来到魔塔，你是第一百位挑战者。你若能打败我所有的手下，我就与你一对一的决斗。现在你必须接受我的安排。<br>
           <span class="blue"><img src="${zhujue}"></span>： 什么？<br>
           <span class="gray">不等阿呆询问，就被魔王的四个手下击晕了。</span><br>
           <span class="gray">一段时间过去了。。。</span><br>
           <span class="gray"><img src="${thief}"></span>： 。。。。。喂, 醒醒<br>
         `,
        action: function (core, index) {
            tools.eventRender(this.msg, function () {
                var map = core.maps[core.mapIndex];
                map.events.splice(index, 1);
                core.hero.position = 69;
                core.hero.hp = 400;
                core.hero.attack = 10;
                core.hero.defense = 10;
                core.render(core.maps[--core.mapIndex], core.hero);
                core.hero.init();
                tools.domRender(core.hero, core.mapIndex);
            });
            core.hero.disabled();
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
            tools.eventRender(this.msg, function () {
                var map = core.maps[core.mapIndex];
                map.npc.splice(index, 1);
                core.hero.monsterMenu++;
                tools.msgRender('获得怪物手册');
                core.hero.init();
                core.render(map, core.hero);
                tools.domRender(core.hero, core.mapIndex);
            });
            core.hero.disabled();
        }
    }
]