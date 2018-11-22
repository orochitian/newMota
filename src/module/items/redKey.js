import item from '../../images/items/redKey.png'

export default function (position) {
    this.name = '红色钥匙';
    this.position = position;
    this.img = item;
    this.set = function (hero) {
        hero.redKey++;
    }
}