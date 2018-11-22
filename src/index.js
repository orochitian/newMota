import './sass/index.scss'
import {getId} from './module/tools';

document.addEventListener('plusready', function () {
    // var main1 = plus.android.runtimeMainActivity();
    // var windowMe = main1.getWindow();
    // plus.android.importClass(windowMe);
    // var decorView = windowMe.getDecorView();
    // plus.android.importClass(decorView);
    // var View = plus.android.importClass("android.view.View");
    // //  隐藏虚拟键盘的关键！View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_IMMERSIVE
    // decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_IMMERSIVE);

    var gameUrl = './main.html';
    var indexWebView = plus.webview.currentWebview();
    plus.webview.prefetchURL(gameUrl);
    getId('new').onclick = function () {
        plus.webview.open(gameUrl+'?openType=new', 'main', {}, 'slide-in-right', 500);
    }
    getId('load').onclick = function () {
        var userSave = JSON.parse(plus.storage.getItem('userSave'));
        if( !userSave ) {
            alert('没有存档');
            return false;
        }
        plus.webview.open(gameUrl+'?openType=save', 'main', {}, 'slide-in-right', 500);
    }
    getId('clear').onclick = function () {
        plus.storage.clear();
        plus.nativeUI.alert('已清除存档');
    }
    getId('exit').onclick = function () {
        plus.webview.close(indexWebView);
    }

    plus.key.addEventListener('backbutton', function () {
        return false;
    });

});