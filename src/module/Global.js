/*
* ctx: 画布上下文
* size: 格子大小，魔塔中角色、行进距离、障碍物等大小相同
* screenSize: screen容器大小
* */

var screen = document.getElementById('game');
var SIZE = document.getElementById('size').clientWidth;
var grid = [];
for( var i=0; i<11; i++ ) {
    for( var j=0; j<11; j++ ) {
        grid.push([j*SIZE, i*SIZE]);
    }
}

module.exports = {
    grid: grid,
    ctx: screen.getContext('2d'),
    size: SIZE
}