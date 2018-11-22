import monster from '../../images/monsters/monster08.png';
import {ctx, grid} from "../Global";

export default function (position) {
    this.name = '骷髅队长';
    this.hp = 100;
    this.attack = 65;
    this.defense = 15;
    this.money = 30;
    this.position = position;
    this.img = monster;
    this.draw = function () {
        var _this = this;
        var image = new Image();
        image.src = _this.img;
        image.onload = function () {
            ctx.drawImage(image, grid[_this.position][0], grid[_this.position][1]);
        }
    }
}