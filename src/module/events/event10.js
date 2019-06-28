import render from "../Render";
import duizhang from '../../images/monsters/monster08.png';
import thief from '../../images/npc/thief.png';

export default [
    /*
    *   事件 0
    *   触发骷髅队长对话，关门放狗。
    * */
    {
        msg: `
           <span><img src="${duizhang}"></span>： 
           哈哈哈，你是如此的幸运能安全到达这里，但现在好运离你而去了，你中埋伏了，弟兄们盘他！<br>
         `,
        action: function (core, index) {
            render.renderDialog(this.msg, () => {
                let map = core.maps[core.mapIndex];
                //  清除事件
                render.delete(map, index);
                //  重置地图
                //  消除8个卫兵
                render.clearGrid(map, 22);
                render.clearGrid(map, 23);
                render.clearGrid(map, 24);
                render.clearGrid(map, 34);
                render.clearGrid(map, 30);
                render.clearGrid(map, 31);
                render.clearGrid(map, 32);
                render.clearGrid(map, 42);
                //  8个包围主角的士兵
                render.setGrid(map, {"i":37,"type":"monster","id":"monster05","clear":"27"});
                render.setGrid(map, {"i":38,"type":"monster","id":"monster06","clear":"27"});
                render.setGrid(map, {"i":39,"type":"monster","id":"monster05","clear":"27"});
                render.setGrid(map, {"i":48,"type":"monster","id":"monster05","clear":"27"});
                render.setGrid(map, {"i":50,"type":"monster","id":"monster05","clear":"27"});
                render.setGrid(map, {"i":59,"type":"monster","id":"monster05","clear":"27"});
                render.setGrid(map, {"i":60,"type":"monster","id":"monster06","clear":"27"});
                render.setGrid(map, {"i":61,"type":"monster","id":"monster05","clear":"27"});
                //  队长
                render.setGrid(map, {"i":5,"type":"monster","id":"monster08","clear":"36, 40, 71","event":"event10-2"});
                //  增加两道绿门
                render.setGrid(map, {"i":27,"type":"gate","id":"gate4"});
                render.setGrid(map, {"i":71,"type":"gate","id":"gate4"});

                let clearArr = [];
                for( let i=0; i<8; i++ ) {
                    clearArr.push("27");
                }
                clearArr.push('36, 40, 71')
                map.clear = clearArr;
                render.renderMap(core);
                core.hero.init(core);
            });
        }
    },
    /*
    *   事件 1
    *   骷髅队长面前的一段对话。
    * */
    {
        msg: `
           <span class="red"><img src="${duizhang}"></span>： 
           你怎么可能杀出重围？我是绝对不会让你通过的，来吧，哥要和你Battle！<br>
         `,
        action: function (core, index) {
            render.renderDialog(this.msg, () => {
                render.delete(core.maps[core.mapIndex], index);
                core.hero.init(core);
            });
        }
    },
    /*
    *   事件 2
    *   击败骷髅队长后，开门，出现楼梯。
    * */
    {
        msg: `
           <span class="red"><img src="${duizhang}"></span>： 
           不，这是不可能的！FUCK！FUCK！FUCK！你怎么会打败我！你别太得意，后面还有许多强大的对手和机关存在，你稍有疏忽就必死无疑。<br>
         `,
        action: function (core, index) {
            render.renderDialog(this.msg, () => {
                var map = core.maps[core.mapIndex];
                function setItem(grids, id) {
                    for( let i=0; i<3; i++ ) {
                        render.setGrid(map, {"i":grids[i],"type":"item","id":id});
                    }
                }
                //  奖励物品
                setItem([22, 23, 24], 'item06');
                setItem([33, 34, 35], 'item05');
                setItem([30, 31, 32], 'item07');
                setItem([41, 42, 43], 'item01');

                //  楼梯
                render.setGrid(map, {"i":115,"type":"upStair"});

                //  小偷事件
                render.setGrid(map, {"i":93,"type":"event","id":"event10-3"});
                render.renderMap(core);
                core.hero.init(core);
            });
        }
    },
    /*
    *   事件 3
    *   骷髅队长面前的一段对话。
    * */
    {
        msg: `
           <span class="red"><img src="${thief}"></span>： 
           嘿，我们又见面了！非常感谢你打败了此区域的头目。我正苦恼于如何到更高的楼层，现在我终于可以上去了。
           我听说银盾在11楼，淫贱在17楼，这消息不知道对你是否有用。<br>
         `,
        action: function (core, index) {
            render.renderGrid(thief, 104);
            render.renderDialog(this.msg, () => {
                var map = core.maps[core.mapIndex];
                render.clearGrid(map, 104);
                render.delete(map, index);
                core.hero.init(core);
            });
        }
    }
]