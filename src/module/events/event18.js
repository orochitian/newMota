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
           在这个区域不多次提升攻击力，就不能打败石头人。切记前人教训！！！<br>
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
    }
]