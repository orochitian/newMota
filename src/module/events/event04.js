import tools from "../tools";
import wiseMan from '../../images/npc/wiseMan.png';

export default [
    /*
    *   事件 0
    *   与贤者对话，告诉你一些消息。
    * */
    {
        msg: `
           <span class="red"><img src="${wiseMan}"></span>： 
           有些门不能用钥匙打开，只有当你打败它的守卫后才会自动打开<br>
         `,
        action: function (core, index) {
            tools.eventRender(this.msg, function () {
                var map = core.maps[core.mapIndex];
                map.npc.splice(index, 1);
                core.hero.init();
                core.render(map, core.hero);
            });
            core.hero.disabled();
        }
    }
]