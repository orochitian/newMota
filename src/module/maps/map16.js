export default {
    //  地图索引
    index: 16,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [16, 104],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [115, 17],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [5, 15],
    //  加载所有墙，直接输入地图坐标
    walls: [3, 7, 25, 37, 36, 35, 34, 33, 47, 69, 80, 91, 81, 79, 78, 77, 113, 39, 40, 41, 29, 43, 51, 62, 73, 84, 95, 117, 83, 85, 87, 108, 109],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster09', 19],
        ['monster09', 89],
        ['monster10', 1],
        ['monster10', 10],
        ['monster10', 23],
        ['monster10', 74],
        ['monster10', 92],
        ['monster10', 94],
        ['monster11', 12],
        ['monster11', 97],
        ['monster12', 26],
        ['monster12', 53],
        ['monster13', 60],
        ['monster14', 57],
        ['monster20', 118],
    ],
    //  物品，key，位置，物品数值
    items: [
        ['yellowKey', 0, 1],
        ['yellowKey', 11, 1],
        ['yellowKey', 22, 1],
        ['yellowKey', 28, 1],
        ['yellowKey', 45, 1],
        ['yellowKey', 67, 1],
        ['yellowKey', 72, 1],
        ['blueKey', 76, 1],
        ['redWater', 32, 100, 'hp'],
        ['redWater', 48, 100, 'hp'],
        ['redWater', 55, 100, 'hp'],
        ['attack', 44, 2],
        ['defense', 66, 2],
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 14],
        ['yellowGate', 18],
        ['yellowGate', 42],
        ['yellowGate', 58],
        ['yellowGate', 82],
        ['yellowGate', 86],
        ['yellowGate', 102],
        ['yellowGate', 106],
        ['blueGate', 38],
    ],
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [
        ['wiseMan', 110, 'event16', 0],
        ['wiseMan', 120, 'event16', 1]
    ],
    events: [

    ]
}