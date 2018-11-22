import tools from "../tools";

export default [
    //  第0个事件
    {
        des: '与小偷对话，墙被打开，和小偷越狱。',
        msg: `
           <span class="gray">神秘人</span>： 
           你清醒了吗？你到监狱时还处于昏迷中，魔法警卫把你扔到我这个房间，但你很幸运，我刚完成逃跑的暗道，我们一起越狱吧。<br>
           <span class="gray">神秘人</span>： 
           你的剑和盾被警卫拿走了，你必须先找到武器，我知道铁剑在5楼，铁盾在9楼，你最好先取到它们。我现在有事要做没法帮你，再见。
        `,
        action: function (core, index) {
            tools.eventRender(this.msg, function () {
                var map = core.maps[core.mapIndex];
                map.walls.splice( core.maps[core.mapIndex].walls.indexOf(67), 1 );
                map.npc.splice(index, 1);
                core.render(core.maps[core.mapIndex], core.hero);
                core.hero.init();
            });
            core.hero.disabled();
        }
    },
    //  第一个事件
    {
        des: '英雄力量被夺走，返回到第2层',
        msg: `
           <span class="red">魔王</span>： 欢迎来到魔塔，你是第一百位挑战者。你若能打败我所有的手下，我就与你一对一的决斗。现在你必须接受我的安排。<br>
           <span class="blue">阿呆</span>： 什么？<br>
           <span class="gray">不等阿呆询问，就被魔王的四个手下击晕了。</span><br>
           <span class="gray">一段时间过去了。。。</span><br>
           <span class="gray">神秘人</span>： 。。。。。喂, 醒醒<br>
         `,
        action: function (core) {
            tools.eventRender(this.msg, function () {
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
    }
]