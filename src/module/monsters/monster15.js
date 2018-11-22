import monster from '../../images/monsters/monster15.png';
import {ctx, grid} from "../Global";

export default function (position) {
    this.name = '大乌贼';
    this.hp = 1200;
    this.attack = 180;
    this.defense = 20;
    this.money = 500;
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