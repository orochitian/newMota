import tools from "../tools";

export default {
    position: 92,
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