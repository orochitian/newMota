export default {
    //  地图索引
    index: 11,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [104, 109],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [120, 12],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [115, 10],
    //  加载所有墙，直接输入地图坐标
    walls: [33, 35, 36, 25, 14, 3, 47, 58, 59, 60, 61, 39, 28, 27, 17, 40, 41, 42, 53, 64, 75, 86, 85, 84, 83, 82, 81, 80, 79, 77, 8, 19, 108, 119, 106, 105, 116, 114, 103],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster03', 16],
        ['monster03', 97],
        ['monster09', 43],
        ['monster09', 73],
        ['monster09', 91],
        ['monster10', 38],
        ['monster10', 69],
        ['monster10', 87],
        ['monster10', 89],
        ['monster10', 118],
        ['monster11', 44, [34]],
        ['monster11', 46, [34]],
        ['monster11', 51],
        ['monster12', 18],
        ['monster12', 48]
    ],
    //  物品，key，位置，物品数值
    items: [
        ['yellowKey', 10, 1],
        ['yellowKey', 99, 1],
        ['yellowKey', 110, 1],
        ['yellowKey', 111, 1],
        ['yellowKey', 112, 1],
        ['yellowKey', 113, 1],
        ['redWater', 9, 100, 'hp'],
        ['redWater', 63, 100, 'hp'],
        ['grayWater', 66, 400, 'hp'],
        ['grayWater', 117, 400, 'hp'],
        ['attack', 4, 2],
        ['yindun', 12, 20, 'defense']
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 6],
        ['yellowGate', 26],
        ['yellowGate', 30],
        ['yellowGate', 50],
        ['yellowGate', 72],
        ['yellowGate', 92],
        ['yellowGate', 107],
        ['blueGate', 78],
        ['greenGate', 34]
    ],
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [

    ],
    events: [

    ]
}