import item from '../../images/items/attackStone.png'

export default function (position, value) {
    this.name = '攻击宝石';
    this.position = position;
    this.img = item;
    this.value = value;
    this.set = function (hero) {
        hero.attack += this.value;
    }
}