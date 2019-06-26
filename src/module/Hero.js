import heroSource from '../images/hero.png';
import controller from './Controller';

let touchTime = null;
let directives = ['right', 'left', 'up', 'down'];

let moveInit = function (core, direct) {
    document.getElementById(direct).ontouchstart = function (ev) {
        ev.preventDefault();
        if( touchTime ) {
            return;
        }
        document.getElementById('controller').className = direct;
        touchTime = setInterval(function () {
            controller.heroMove(core, direct);
        }, 50);
        controller.heroMove(core, direct);
    }
    document.getElementById(direct).ontouchend = function () {
        clearInterval(touchTime);
        touchTime = null;
        document.getElementById('controller').className = '';
    }
}

//  英雄原型
function Hero () {
    this.position = 115;
    this.img = heroSource;
    this.direction = 'down';

    this.hp = 40000;
    this.attack = 10;
    this.defense = 10;
    this.money = 0;

    this.yellowKey = 10;
    this.blueKey = 10;
    this.redKey = 10;
    this.chuansong = 0;
}

Hero.prototype.init = function(core) {
    document.getElementById('controller').ontouchstart = function (ev) {
        ev.preventDefault();
    };
    directives.forEach((direct) => {
        moveInit(core, direct);
    });
}

Hero.prototype.disabled = function () {
    clearInterval(touchTime);
    directives.forEach((direct) => {
        document.getElementById(direct).ontouchstart = function (ev) {
            ev.preventDefault();
        }
    });
}

export default new Hero();