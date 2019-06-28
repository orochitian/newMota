import {size} from "./Global";
import render from './Render';
import userItem from "./useItem";

var oGame = document.getElementById('game');
if( oGame ) {
    oGame.width = size * 11;
    oGame.height = size * 11;
    oGame.style.backgroundSize = size + 'px';
}

function Core (hero, maps) {
    this.hero = hero;
    this.maps = maps;
    this.shopTime = 1;
    this.mapIndex = 10;
}

Core.prototype.gameInit = function () {
    render.renderMap(this);
    render.renderStatus(this);
    userItem(this);
    this.hero.init(this);
}

Core.prototype.save = function (plus) {
    plus.storage.setItem('userSave', JSON.stringify(this));
}


export default Core;