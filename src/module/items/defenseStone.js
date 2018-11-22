import item from '../../images/items/defenseStone.png'

export default function (position, value) {
    this.name = '防御宝石';
    this.position = position;
    this.img = item;
    this.value = value;
    this.set = function (hero) {
        hero.defense += this.value;
    }
}