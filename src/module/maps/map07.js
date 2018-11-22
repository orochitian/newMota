export default {
    //  地图索引
    index: 7,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [109, 11],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [0, 8],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [120, 6],
    //  加载所有墙，直接输入地图坐标
    walls: [9, 20, 31, 42, 53, 75, 86, 97, 108, 119, 7, 18, 29, 40, 51, 73, 84, 95, 106, 117, 27, 38, 49, 71, 82, 93, 104, 115, 3, 14, 25, 36, 47, 69, 80, 91, 102, 113, 1, 12, 23, 34, 45, 67, 78, 89, 100],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster01', 10],
        ['monster01', 32],
        ['monster01', 99],
        ['monster01', 101],
        ['monster02', 21],
        ['monster02', 26],
        ['monster02', 94],
        ['monster02', 111],
        ['monster03', 24],
        ['monster03', 92],
        ['monster04', 58],
        ['monster04', 105],
        ['monster05', 52],
        ['monster06', 28],
        ['monster06', 56],
        ['monster06', 74],
    ],
    //  物品，key，位置，物品数值
    items: [
        ['yellowKey', 8, 1],
        ['yellowKey', 19, 1],
        ['yellowKey', 103, 1],
        ['yellowKey', 107, 1],
        ['yellowKey', 114, 1],
        ['yellowKey', 118, 1],
        ['redWater', 13, 50, 'hp'],
        ['redWater', 30, 50, 'hp'],
        ['grayWater', 96, 200, 'hp'],
        ['grayWater', 116, 200, 'hp'],
        ['attack', 2, 1],
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 44],
        ['yellowGate', 46],
        ['yellowGate', 50],
        ['yellowGate', 54],
        ['yellowGate', 66],
        ['yellowGate', 68],
        ['yellowGate', 70],
        ['yellowGate', 72],
        ['yellowGate', 76],
        ['blueGate', 48],
    ],
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [
        ['businessMan', 5, 'event07', 0]
    ],
    events: [

    ]
}