export default {
    //  地图索引
    index: 17,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [104, 16],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [5, 18],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [115, 16],
    //  加载所有墙，直接输入地图坐标
    walls: [33, 35, 36, 25, 14, 3, 47, 58, 69, 80, 91, 102, 101, 99, 66, 68, 92, 94, 95, 84, 73, 62, 51, 40, 29, 18, 7, 106, 107, 109, 74, 76, 41, 43, 27, 38, 49, 60, 71],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster07', 44, [34]],
        ['monster07', 46, [34]],
        ['monster07', 77, [67]],
        ['monster07', 79, [67]],
        ['monster09', 72],
        ['monster10', 28],
        ['monster10', 113],
        ['monster10', 117],
        ['monster11', 93],
        ['monster12', 70],
        ['monster12', 85, [75]],
        ['monster12', 87, [75]],
        ['monster13', 26],
        ['monster13', 52, [42]],
        ['monster13', 54, [42]],
    ],
    //  物品，key，位置，物品数值
    items: [
        ['yellowKey', 30, 1],
        ['yellowKey', 32, 1],
        ['redWater', 110, 100, 'hp'],
        ['redWater', 120, 100, 'hp'],
        ['grayWater', 20, 400, 'hp'],
        ['attack', 8, 2],
        ['defense', 10, 2],
        ['yinjian', 12, 20, 'attack']
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 48],
        ['yellowGate', 100],
        ['yellowGate', 108],
        ['blueGate', 50],
        ['blueGate', 50],
        ['blueGate', 50],
        ['greenGate', 34],
        ['greenGate', 67],
        ['greenGate', 42],
        ['greenGate', 75],
    ],
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [

    ],
    events: [

    ]
}