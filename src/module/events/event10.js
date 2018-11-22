import tools from "../tools";
import duizhang from '../../images/monsters/monster08.png';
import thief from '../../images/npc/thief.png';

export default [
    /*
    *   事件 0
    *   触发骷髅队长对话，关门放狗。
    * */
    {
        msg: `
           <span class="red"><img src="${duizhang}"></span>： 
           哈哈哈，你是如此的幸运能安全到达这里，但现在好运离你而去了，你中埋伏了，弟兄们给我上！<br>
         `,
        action: function (core, index) {
            tools.eventRender(this.msg, function () {
                var map = core.maps[core.mapIndex];
                map.events.splice(index, 1);

                map.walls.splice(map.walls.indexOf(59), 1);
                map.walls.splice(map.walls.indexOf(61), 1);

                map.gates.push(['greenGate', 27]);
                map.gates.push(['greenGate', 36]);
                map.gates.push(['greenGate', 40]);
                map.gates.push(['greenGate', 71]);

                map.monsters[tools.search(map.monsters, 38)][1] = 5;
                map.monsters[tools.search(map.monsters, 22)][1] = 37;
                map.monsters[tools.search(map.monsters, 23)][1] = 48;
                map.monsters[tools.search(map.monsters, 24)][1] = 59;
                map.monsters[tools.search(map.monsters, 30)][1] = 39;
                map.monsters[tools.search(map.monsters, 31)][1] = 50;
                map.monsters[tools.search(map.monsters, 32)][1] = 61;
                map.monsters[tools.search(map.monsters, 34)][1] = 38;
                map.monsters[tools.search(map.monsters, 42)][1] = 60;

                core.render(map, core.hero);
                core.hero.init();
            });
            core.hero.disabled();
        }
    },
    /*
    *   事件 1
    *   骷髅队长面前的一段对话。
    * */
    {
        msg: `
           <span class="red"><img src="${duizhang}"></span>： 
           你怎么可能杀出重围？我是绝对不会让你通过的，来吧，我要与你决斗！<br>
         `,
        action: function (core, index) {
            tools.eventRender(this.msg, function () {
                var map = core.maps[core.mapIndex];
                map.events.splice(index, 1);
                core.render(map, core.hero);
                core.hero.init();
            });
            core.hero.disabled();
        }
    },
    /*
    *   事件 2
    *   击败骷髅队长后，开门，出现楼梯。
    * */
    {
        msg: `
           <span class="red"><img src="${duizhang}"></span>： 
           不，这是不可能的！你怎么会打败我！你别太得意，后面还有许多强大的对手和机关存在，你稍有疏忽就必死无疑。<br>
         `,
        action: function (core, index) {
            tools.eventRender(this.msg, function () {
                var map = core.maps[core.mapIndex];
                map.upStair = [115, 11];
                map.items.push(['attack', 22, 1]);
                map.items.push(['attack', 23, 1]);
                map.items.push(['attack', 24, 1]);
                map.items.push(['defense', 30, 1]);
                map.items.push(['defense', 31, 1]);
                map.items.push(['defense', 32, 1]);
                map.items.push(['grayWater', 33, 200, 'hp']);
                map.items.push(['grayWater', 34, 200, 'hp']);
                map.items.push(['grayWater', 35, 200, 'hp']);
                map.items.push(['yellowKey', 41, 1]);
                map.items.push(['yellowKey', 42, 1]);
                map.items.push(['yellowKey', 43, 1]);

                map.gates.splice(map.gates.indexOf(36), 1);
                map.gates.splice(map.gates.indexOf(40), 1);
                map.gates.splice(map.gates.indexOf(71), 1);

                map.events.push(['event10', 104, 3]);
                core.render(map, core.hero);
                core.hero.init();
            });
            core.hero.disabled();
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
            tools.eventRender(this.msg, function () {
                var map = core.maps[core.mapIndex];
                map.events.splice(index, 1);
                core.render(map, core.hero);
                core.hero.init();
            });
            core.hero.disabled();
        }
    }
]