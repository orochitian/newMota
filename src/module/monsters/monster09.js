import monster from '../../images/monsters/monster09.png';
import {ctx, grid} from "../Global";

export default function (position) {
    this.name = '大史莱姆';
    this.hp = 130;
    this.attack = 60;
    this.defense = 3;
    this.money = 8;
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