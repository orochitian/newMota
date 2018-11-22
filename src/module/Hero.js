import heroSource from '../images/hero.png';
import controller from './Controller';
//  英雄原型
function Hero () {
    this.position = 1;
    this.img = heroSource;
    this.direction = 'down';

    this.hp = 40000;
    this.attack = 1000;
    this.defense = 1;
    this.money = 0;

    this.yellowKey = 10;
    this.blueKey = 10;
    this.redKey = 10;
    this.chuansong = 0;
}
var touchTime = null;
Hero.prototype.init = function(core) {
    document.getElementById('right').ontouchstart = function () {
        if( touchTime ) {
            return;
        }
        touchTime = setInterval(function () {
            controller.heroMove(core, 'right');
        }, 100);
        controller.heroMove(core, 'right');
    }
    document.getElementById('left').ontouchstart = function () {
        if( touchTime ) {
            return;
        }
        touchTime = setInterval(function () {
            controller.heroMove(core, 'left');
        }, 100);
        controller.heroMove(core, 'left');
    }
    document.getElementById('up').ontouchstart = function () {
        if( touchTime ) {
            return;
        }
        touchTime = setInterval(function () {
            controller.heroMove(core, 'up');
        }, 100);
        controller.heroMove(core, 'up');
    }
    document.getElementById('down').ontouchstart = function () {
        if( touchTime ) {
            return;
        }
        touchTime = setInterval(function () {
            controller.heroMove(core, 'down');
        }, 100);
        controller.heroMove(core, 'down');
    }
    document.getElementById('right').ontouchend = function () {
        clearInterval(touchTime);
        touchTime = null;
    }
    document.getElementById('left').ontouchend = function () {
        clearInterval(touchTime);
        touchTime = null;
    }
    document.getElementById('up').ontouchend = function () {
        clearInterval(touchTime);
        touchTime = null;
    }
    document.getElementById('down').ontouchend = function () {
        clearInterval(touchTime);
        touchTime = null;
    }
}
Hero.prototype.disabled = function () {
    clearInterval(touchTime);
    document.getElementById('right').ontouchstart = function (ev) {
        ev.preventDefault();
    }
    document.getElementById('left').ontouchstart = function (ev) {
        ev.preventDefault();
    }
    document.getElementById('up').ontouchstart = function (ev) {
        ev.preventDefault();
    }
    document.getElementById('down').ontouchstart = function (ev) {
        ev.preventDefault();
    }
}

export default new Hero();