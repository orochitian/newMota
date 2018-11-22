import monster from '../../images/monsters/monster12.png';
import {ctx, grid} from "../Global";

export default function (position) {
    this.name = '兽人';
    this.hp = 260;
    this.attack = 85;
    this.defense = 5;
    this.money = 22;
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