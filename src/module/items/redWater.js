import item from '../../images/items/redWater.png'

export default function (position, multiple) {
    this.name = '红色药水';
    this.position = position;
    this.img = item;
    this.hp = multiple;
    this.set = function (hero) {
        hero.hp += this.hp;
    }
}