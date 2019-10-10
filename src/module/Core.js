import {size} from "./Global";
import render from './Render';
import userItem from "./useItem";
import hero from "./Hero";

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
    this.mapIndex = 11;
}

Core.prototype.gameInit = function () {
    render.renderMap(this);
    render.renderStatus(this);
    userItem(this);
    this.hero.init(this);
}

Core.prototype.save = function (type) {
    window.localStorage.setItem('save-' + type, JSON.stringify(this));
}
Core.prototype.load = function (type) {
    let localSave = Object.assign( this, JSON.parse(window.localStorage.getItem('save-' + type)) );
    let localHero = Object.assign( hero, localSave.hero );
    localSave.hero = localHero;
    localSave.gameInit();
}


export default Core;