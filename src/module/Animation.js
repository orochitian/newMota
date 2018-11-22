import {size} from "./Global";
var toggleTime = null;

export default {
    toggle: function (ctx, msg) {
        clearTimeout(toggleTime);
        ctx.clearRect(0, size*3, size*11, size*4);
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, size*3, size*11, size*4);
        ctx.globalAlpha = 1;
        ctx.font = (size-10) + 'px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#00CDCD';
        ctx.fillText(msg, size*5+size/2, size*5.5, size*9);
        toggleTime = setTimeout(function () {
            ctx.clearRect(0, 0, size*11, size*11);
        }, 1200);
    },
    move: function () {

    }
}