import item from '../../images/items/yellowKey.png'

export default function (position) {
    this.name = '黄色钥匙';
    this.position = position;
    this.img = item;
    this.set = function (hero) {
        hero.yellowKey++;
    }
}