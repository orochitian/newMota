import './sass/main.scss'
import maps from './module/Map';
import core from './module/Core';
import hero from './module/Hero';

window.onload = function () {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1000);
}

var game = new core(hero, maps);
game.gameInit();

document.getElementById('save').onclick = () => {
    game.save('auto');
}
document.getElementById('load').onclick = () => {
    game.load('auto');
}

function windowFull() {
    var main = plus.android.runtimeMainActivity();
    var windowMe = main.getWindow();
    plus.android.importClass(windowMe);
    var decorView = windowMe.getDecorView();
    plus.android.importClass(decorView);
    var View = plus.android.importClass("android.view.View");
    decorView.setSystemUiVisibility(
        View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
        View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |
        View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
        View.SYSTEM_UI_FLAG_FULLSCREEN |
        View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
}

document.addEventListener("plusready", function () {
    windowFull();
    var main = plus.webview.currentWebview();
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

}, false);




