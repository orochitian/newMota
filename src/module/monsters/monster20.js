import monster from '../../images/monsters/monster20.png';
import {ctx, grid} from "../Global";

export default function Monster (position) {
    this.name = '幽灵';
    this.hp = 320;
    this.attack = 140;
    this.defense = 20;
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