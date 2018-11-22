import item from '../../images/items/blueKey.png'

export default function (position) {
    this.name = '蓝色钥匙';
    this.position = position;
    this.img = item;
    this.set = function (hero) {
        hero.blueKey++;
    }
}