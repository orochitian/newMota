export default {
    //  地图索引
    index: 9,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [16, 99],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [110, 10],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [5, 8],
    //  加载所有墙，直接输入地图坐标
    walls: [23, 24, 25, 26, 14, 36, 28, 29, 30, 31, 18, 55, 56, 57, 58, 59, 60, 71, 82, 93, 104, 51, 62, 73, 84, 95, 106, 85, 86, 75, 52, 54, 89, 90, 91, 79, 101],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster01', 8],
        ['monster01', 20],
        ['monster02', 61],
        ['monster03', 46],
        ['monster03', 105],
        ['monster04', 98],
        ['monster04', 118],
        ['monster05', 2],
        ['monster05', 103],
        ['monster05', 108],
        ['monster06', 22],
        ['monster06', 65],
        ['monster06', 69],
        ['monster06', 77],
    ],
    //  物品，key，位置，物品数值
    items: [
        ['yellowKey', 12, 1],
        ['yellowKey', 34, 1],
        ['yellowKey', 37, 1],
        ['yellowKey', 39, 1],
        ['yellowKey', 66, 1],
        ['yellowKey', 70, 1],
        ['yellowKey', 96, 1],
        ['redWater', 10, 50, 'hp'],
        ['redWater', 100, 50, 'hp'],
        ['redWater', 120, 50, 'hp'],
        ['attack', 49, 1],
        ['defense', 44, 1],
        ['tiedun', 74, 10, 'defense'],
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 3],
        ['yellowGate', 7],
        ['yellowGate', 40],
        ['yellowGate', 41],
        ['yellowGate', 47],
        ['yellowGate', 68],
        ['yellowGate', 88],
        ['yellowGate', 92],
        ['yellowGate', 87],
        ['yellowGate', 115],
        ['yellowGate', 117],
        ['blueGate', 27],
        ['blueGate', 112],
    ],
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [

    ],
    events: [

    ]
}