export default {
    //  地图索引
    index: 18,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [16, 11],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [0, 19],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [5, 17],
    //  加载所有墙，直接输入地图坐标
    walls: [23, 24, 25, 14, 26, 27, 28, 29, 18, 47, 58, 59, 57, 56, 55, 61, 62, 63, 64, 65, 51, 78, 79, 90, 101, 112, 81, 82, 83, 93, 104, 115, 85, 86, 96, 107, 118],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster09', 20],
        ['monster09', 94],
        ['monster09', 95],
        ['monster09', 105],
        ['monster09', 106],
        ['monster10', 53],
        ['monster10', 91],
        ['monster10', 92],
        ['monster10', 102],
        ['monster10', 103],
        ['monster11', 8],
        ['monster11', 88],
        ['monster11', 98],
        ['monster12', 41],
        ['monster12', 67],
        ['monster13', 37],
        ['monster13', 39],
        ['monster14', 44],
        ['monster14', 46],
        ['monster14', 75],
    ],
    //  物品，key，位置，物品数值
    items: [
        ['yellowKey', 10, 1],
        ['yellowKey', 21, 1],
        ['yellowKey', 43, 1],
        ['yellowKey', 54, 1],
        ['yellowKey', 108, 1],
        ['yellowKey', 100, 1],
        ['yellowKey', 114, 1],
        ['yellowKey', 116, 1],
        ['blueKey', 32, 1],
        ['redWater', 34, 100, 'hp'],
        ['redWater', 110, 100, 'hp'],
        ['redWater', 120, 100, 'hp'],
        ['attack', 111, 2],
        ['defense', 119, 2],
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 7],
        ['yellowGate', 22],
        ['yellowGate', 36],
        ['yellowGate', 40],
        ['yellowGate', 77],
        ['yellowGate', 80],
        ['yellowGate', 84],
        ['yellowGate', 87],
        ['blueGate', 60],
        ['blueGate', 3],
    ],
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [
        ['wiseMan', 13, 'event18', 0]
    ],
    events: [

    ]
}