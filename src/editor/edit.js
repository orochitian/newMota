

var choose = 'wall';
$('.choose').click(function () {
    choose = $(this).attr('id');
    $('.choose').removeClass('active');
    $(this).addClass('active');
});

var map = {
    clear: []
};
map.grid = new Array(121);
for( var i=0; i<121; i+=11 ) {
    for( var j=i; j<i+11; j++ ) {
        $('#modal').append($('<div class="grid" index="'+j+'">'+j+'</div>'));
    }
}

for( var i=0; i<121; i++ ) {
    map.grid[i] = {i: i};
}

var opens = function (option) {
    var options = $.extend({}, {
        type: 1,
        title: '提示',
        offset: '100px',
        move: false,
        resize: false,
        closeBtn: 1,
        content: '',
        area: [400, 'auto']
    }, option);
    layer.open(options);
}

var current = 0;

//  编辑地图
$('#modal').on('click', '.grid', function () {
    var $this = $(this);
    current = $this.attr('index') * 1;
    if( $this.hasClass('active') ) {
        layer.confirm('是否清除当前坐标对象', function (index) {
            $this.attr('class', 'grid').css('background', '');
            if( map.grid[current].clear ) {
                map.clear.splice( map.clear.indexOf(map.grid[current].clear), 1 );
            }
            map.grid[current] = {i: current};
            layer.close(index);
        });
        return;
    }
    if(  /^wall|upStair|downStair|anlei|transWall|airWall$/.test(choose)  ) {
        $this.addClass('active').addClass(choose);
        map.grid[current].type =  choose;
    } else if( choose === 'shop' ) {
        $this.prev().addClass('active').addClass('shop-left');
        $this.next().addClass('active').addClass('shop-right');
        $this.addClass('active').addClass(choose);
        map.grid[current].type = choose;
        map.grid[current-1].type = 'shopLeft';
        map.grid[current+1].type = 'shopRight';
    } else if( choose === 'wiseMan' || choose === 'businessMan' || choose === 'thief') {
        opens({
            title: 'NPC编辑',
            content: $('#npc-details'),
            btn: ['确定', '取消'],
            yes: function (index) {
                $this.addClass('active').addClass(choose);
                map.grid[current].type = 'npc';
                map.grid[current].id = choose;
                map.grid[current].event = 'event' + $('#npc-id').val();
                layer.close(index);
            }
        });
    } else if( choose === 'monster' ) {
        opens({
            title: '怪物编辑',
            content: $('#monster-details'),
            btn: ['确定', '取消'],
            yes: function (index) {
                $this.addClass('active').addClass(choose);
                $this.css('background', 'url("../images/monsters/monster'+$('#monster-id').val()+'.png")');
                map.grid[current].type = choose;
                map.grid[current].id = 'monster' + $('#monster-id').val();
                if( $('#clear-index').val() ) {
                    map.grid[current].clear = $('#clear-index').val();
                    map.clear.push($('#clear-index').val());
                }
                if( $('#monster-event').val() ) {
                    map.grid[current].event = 'event' + $('#monster-event').val();
                }
                layer.close(index);
            }
        })
    } else if( choose === 'item' ) {
        opens({
            title: '物品编辑',
            content: $('#item-details'),
            btn: ['确定', '取消'],
            yes: function (index) {
                $this.addClass('active').addClass(choose);
                $this.css('background', 'url("../images/items/item'+$('#item-id').val()+'.png")');
                map.grid[current].type = choose;
                map.grid[current].id = 'item' + $('#item-id').val();
                layer.close(index);
            }
        })
    } else if( choose === 'gate' ) {
        opens({
            title: '门编辑',
            content: $('#gate-details'),
            btn: ['确定', '取消'],
            yes: function (index) {
                $this.addClass('active').addClass(choose);
                $this.css('background', 'url("../images/gate'+$('#gate-id').val()+'.png")');
                map.grid[current].type = choose;
                map.grid[current].id = 'gate' + $('#gate-id').val();
                layer.close(index);
            }
        })
    } else if( choose === 'event' ) {
        opens({
            title: '事件编辑',
            content: $('#event-details'),
            btn: ['确定', '取消'],
            yes: function (index) {
                $this.addClass('active').addClass(choose);
                $this.css('background', 'pink');
                map.grid[current].type = choose;
                map.grid[current].id = 'event' + $('#event-id').val();
                layer.close(index);
            }
        })
    }
});

//  生成地图
$('#getMap').click(function () {
    //  地图索引
    map.index = $('#mapIndex').val() * 1 || 1;
    //  上下楼梯英雄位置
    map.downUp = $('#upPosition').val() * 1;
    map.upDown = $('#downPosition').val() * 1;
    if( map.index > 0 && map.index < 11 ) {
        map.area = 1;
    } else if ( map.index > 10 && map.index < 21 ) {
        map.area = 2;
    } else if ( map.index > 20 && map.index < 31 ) {
        map.area = 3;
    } else if( map.index > 30 && map.index < 41 ) {
        map.area = 4;
    } else if ( map.index > 40 && map.index < 51 ) {
        map.area = 5;
    }
    console.log(JSON.stringify(map));
});