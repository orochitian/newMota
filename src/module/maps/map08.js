export default {
    //  地图索引
    index: 8,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [11, 16],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [5, 9],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [0, 7],
    //  加载所有墙，直接输入地图坐标
    walls: [23, 34, 45, 24, 25, 26, 13, 14, 28, 29, 18, 7, 40, 51, 62, 73, 41, 43, 74, 76, 97, 96, 107, 95, 94, 93, 92, 91, 90, 89, 101, 104, 115, 46, 47, 48, 49, 60, 71, 69, 68, 67, 66],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster01', 17],
        ['monster01', 57],
        ['monster01', 99],
        ['monster02', 56],
        ['monster02', 58],
        ['monster03', 72],
        ['monster03', 80],
        ['monster03', 111],
        ['monster04', 50],
        ['monster04', 84],
        ['monster05', 82],
        ['monster05', 109],
        ['monster06', 119],
        ['monster07', 52, [42]],
        ['monster07', 54, [42]],
    ],
    //  物品，key，位置，物品数值
    items: [
        ['yellowKey', 8, 1],
        ['yellowKey', 10, 1],
        ['yellowKey', 35, 1],
        ['yellowKey', 36, 1],
        ['yellowKey', 37, 1],
        ['yellowKey', 103, 1],
        ['yellowKey', 113, 1],
        ['yellowKey', 116, 1],
        ['blueKey', 105, 1],
        ['redKey', 20, 1],
        ['redWater', 32, 50, 'hp'],
        ['redWater', 44, 50, 'hp'],
        ['redWater', 106, 50, 'hp'],
        ['grayWater', 30, 200, 'hp'],
        ['attack', 102, 1],
        ['defense', 114, 1],
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 2],
        ['yellowGate', 3],
        ['yellowGate', 22],
        ['yellowGate', 27],
        ['yellowGate', 70],
        ['yellowGate', 75],
        ['yellowGate', 88],
        ['yellowGate', 98],
        ['yellowGate', 118],
        ['blueGate', 112],
        ['greenGate', 42],
    ],
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [

    ],
    events: [

    ]
}