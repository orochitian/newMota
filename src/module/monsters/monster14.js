import monster from '../../images/monsters/monster14.png';
import {ctx, grid} from "../Global";

export default function (position) {
    this.name = '石头人';
    this.hp = 20;
    this.attack = 100;
    this.defense = 68;
    this.money = 28;
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