import monster from '../../images/monsters/monster10.png';
import {ctx, grid} from "../Global";

export default function (position) {
    this.name = '大蝙蝠';
    this.hp = 60;
    this.attack = 100;
    this.defense = 8;
    this.money = 12;
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