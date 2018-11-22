export default {
    //  地图索引
    index: 5,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [111, 11],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [0, 6],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [110, 4],
    //  加载所有墙，直接输入地图坐标
    walls: [99, 100, 101, 102, 103, 92, 81, 70, 59, 48, 37, 26, 15, 1, 12, 33, 34, 35, 66, 68, 69, 6, 17, 28, 39, 50, 51, 52, 53, 42, 31, 20, 75, 74, 73, 72, 83, 94, 105, 116, 96, 107, 97, 98],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster01', 18],
        ['monster01', 19],
        ['monster01', 61],
        ['monster01', 82],
        ['monster02', 3],
        ['monster02', 21],
        ['monster02', 76],
        ['monster03', 24],
        ['monster03', 38],
        ['monster03', 58],
        ['monster04', 46],
        ['monster06', 67],
    ],
    //  物品，key，位置，物品数值
    items: [
        ['yellowKey', 16, 1],
        ['yellowKey', 29, 1],
        ['yellowKey', 30, 1],
        ['yellowKey', 40, 1],
        ['yellowKey', 41, 1],
        ['yellowKey', 44, 1],
        ['yellowKey', 55, 1],
        ['yellowKey', 89, 1],
        ['defense', 88, 1],
        ['redWater', 90, 50, 'hp'],
        ['tiejian', 120, 10, 'attack']
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 4],
        ['yellowGate', 9],
        ['yellowGate', 23],
        ['yellowGate', 36],
        ['yellowGate', 95],
    ],
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [

    ],
    events: [

    ]
}