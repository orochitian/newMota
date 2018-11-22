import tools from "../tools";
import wiseMan from '../../images/npc/wiseMan.png';

export default [
    /*
    *   事件 0
    *   与贤者对话，告诉你一些事情。
    * */
    {
        msg: `
           <span class="red"><img src="${wiseMan}"></span>： 
           我听说在塔内有2把隐藏的红钥匙。<br>
         `,
        action: function (core, index) {
            tools.eventRender(this.msg, function () {
                var map = core.maps[core.mapIndex];
                map.npc.splice(index, 1);
                core.render(map, core.hero);
                core.hero.init();
            });
            core.hero.disabled();
        }
    },
    /*
    *   事件 0
    *   与贤者对话，获得圣水。
    * */
    {
        msg: `
           <span class="red"><img src="${wiseMan}"></span>： 
           很好，你居然找到了我，作为奖励，我将给你一瓶圣水。喝了它将按你的攻击和防御力的总和增加的你生命点数，你越晚用它效果越好。<br>
         `,
        action: function (core, index) {
            tools.eventRender(this.msg, function () {
                var map = core.maps[core.mapIndex];
                map.npc.splice(index, 1);
                core.hero.superWater++;
                core.render(map, core.hero);
                core.hero.init();
            });
            core.hero.disabled();
        }
    }
]