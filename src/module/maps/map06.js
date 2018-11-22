export default {
    //  地图索引
    index: 6,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [11, 109],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [120, 7],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [0, 5],
    //  加载所有墙，直接输入地图坐标
    walls: [1, 12, 23, 24, 26, 15, 4, 45, 46, 47, 48, 17, 28, 39, 50, 51, 52, 53, 54, 18, 19, 20, 66, 67, 68, 69, 70, 81, 92, 103, 102, 101, 100, 72, 73, 74, 75, 94, 95, 105, 116, 97, 108, 119],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster01', 9],
        ['monster01', 111],
        ['monster02', 25],
        ['monster02', 57],
        ['monster02', 96],
        ['monster02', 98],
        ['monster03', 43],
        ['monster03', 89],
        ['monster04', 6],
        ['monster04', 58],
        ['monster04', 77],
        ['monster05', 31],
        ['monster05', 62],
        ['monster05', 114],
        ['monster06', 63],
    ],
    //  物品，key，位置，物品数值
    items: [
        ['yellowKey', 2, 1],
        ['yellowKey', 3, 1],
        ['yellowKey', 13, 1],
        ['yellowKey', 14, 1],
        ['yellowKey', 8, 1],
        ['yellowKey', 60, 1],
        ['redWater', 29, 50, 'hp'],
        ['redWater', 117, 50, 'hp'],
        ['redWater', 118, 50, 'hp'],
        ['defense', 91, 1],
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 21],
        ['yellowGate', 34],
        ['yellowGate', 35],
        ['yellowGate', 37],
        ['yellowGate', 83],
        ['yellowGate', 84],
        ['yellowGate', 86],
        ['yellowGate', 99],
    ],
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [
        ['businessMan', 40, 'event06', 0],
        ['wiseMan', 80, 'event06', 1],
    ],
    events: [

    ]
}