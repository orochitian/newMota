import monster from '../../images/monsters/monster11.png';
import {ctx, grid} from "../Global";

export default function (position) {
    this.name = '高级法师';
    this.hp = 100;
    this.attack = 95;
    this.defense = 30;
    this.money = 18;
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