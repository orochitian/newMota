import item from '../../images/items/chuansong.png'

export default function (position) {
    this.name = '传送权杖';
    this.position = position;
    this.img = item;
    this.set = function (hero) {
        hero.chuansong = true;
    }
}