export default {
    //  地图索引
    index: 10,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [99, 104],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: false,
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [110, 9],
    //  加载所有墙，直接输入地图坐标
    walls: [59, 61, 11, 12, 13, 14, 25, 26, 28, 29, 18, 19, 20, 21, 51, 52, 53, 54, 62, 73, 84, 95, 106, 72, 83, 94, 70, 81, 92, 47, 58, 69, 80, 91, 102, 97, 108, 119, 89, 100, 111, 44, 45, 46],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster04', 113],
        ['monster04', 117],
        ['monster05', 22, [27]],
        ['monster05', 23, [27]],
        ['monster05', 24, [27]],
        ['monster05', 30, [27]],
        ['monster05', 31, [27]],
        ['monster05', 32, [27]],
        ['monster05', 55],
        ['monster05', 57],
        ['monster05', 63],
        ['monster05', 65],
        ['monster06', 34, [27]],
        ['monster06', 42, [27]],
        ['monster06', 67],
        ['monster06', 75],
        ['monster08', 38, 'event10', 2]
    ],
    //  物品，key，位置，物品数值
    items: [
        ['defense', 56, 1],
        ['attack', 64, 1],
        ['grayWater', 120, 200, 'hp']
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 88],
        ['yellowGate', 90],
        ['yellowGate', 96],
        ['yellowGate', 98],
        ['redGate', 93]
    ],
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [

    ],
    events: [
        ['event10', 49, 0],
        ['event10', 16, 1]
    ]
}