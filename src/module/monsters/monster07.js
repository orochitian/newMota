import monster from '../../images/monsters/monster07.png';
import {ctx, grid} from "../Global";

export default function (position) {
    this.name = '初级卫兵';
    this.hp = 50;
    this.attack = 48;
    this.defense = 22;
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