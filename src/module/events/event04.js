import render from "../Render";
import wiseMan from '../../images/npc/wiseMan.png';

export default [
    /*
    *   事件 0
    *   与贤者对话，告诉你一些消息。
    * */
    {
        msg: `
           <span><img src="${wiseMan}"></span>： 
           有些门不能用钥匙打开，只有当你打败它的守卫后才会自动打开<br>
         `,
        action: function (core, index) {
            render.renderDialog(this.msg, () => {
                render.clearGrid(core.maps[core.mapIndex], index);
                core.hero.init(core);
            });
        }
    }
]