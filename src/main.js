import './sass/main.scss'
import maps from './module/Map';
import core from './module/Core';
import hero from './module/Hero';
import {getId} from './module/tools';


var game = new core(hero, maps);
game.gameInit();

document.addEventListener("plusready", function () {
    var main = plus.webview.currentWebview();
    if( location.search.indexOf('openType=new') !== -1 ) {
        var game = new core(hero, maps);
        game.gameInit();
    } else {
        var userSave = JSON.parse(plus.storage.getItem('userSave'));
        userSave.hero.__proto__ = hero.__proto__;
        var game = new core(userSave.hero, userSave.maps);
        game.gameInit();
    }
    plus.key.addEventListener('backbutton', function () {
        plus.nativeUI.confirm('退出后当前游戏进度不会自动保存', function (ev) {
            if( ev.index === 0 ) {
                plus.webview.close(main);
            }
        }, {
            title: '提示！',
            buttons: ['退出', null, '点错了']
        });
    });
    //  保存游戏
    getId('save').onclick = function () {
        game.save(plus);
    }
}, false);




