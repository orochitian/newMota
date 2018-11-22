export default {
    //  地图索引
    index: 14,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [119, 104],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [115, 15],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [120, 13],
    //  加载所有墙，直接输入地图坐标
    walls: [22, 33, 35, 36, 25, 14, 3, 38, 27, 16, 40, 29, 18, 7, 30, 32, 67, 78, 89, 100, 111, 69, 58, 59, 61, 62, 73, 74, 75, 98, 97, 95, 106, 117, 94, 92, 91, 102, 93],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster09', 15],
        ['monster09', 56],
        ['monster09', 84],
        ['monster09', 86],
        ['monster10', 47],
        ['monster10', 51],
        ['monster11', 88],
        ['monster11', 90],
        ['monster12', 65],
        ['monster12', 80],
        ['monster13', 0, 'event14', 1],
        ['monster13', 2, 'event14', 1],
        ['monster13', 12, 'event14', 1],
        ['monster13', 17],
        ['monster13', 42],
        ['monster14', 49],
    ],
    //  物品，key，位置，物品数值
    items: [
        ['yellowKey', 5, 1],
        ['yellowKey', 8, 1],
        ['yellowKey', 9, 1],
        ['yellowKey', 10, 1],
        ['yellowKey', 21, 1],
        ['blueKey', 110, 1],
        ['redWater', 6, 100, 'hp'],
        ['redWater', 44, 100, 'hp'],
        ['redWater', 63, 100, 'hp'],
        ['redWater', 103, 100, 'hp'],
        ['defense', 4, 2],
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 31],
        ['yellowGate', 39],
        ['yellowGate', 60],
        ['yellowGate', 66],
        ['yellowGate', 68],
        ['yellowGate', 76],
        ['yellowGate', 82],
        ['yellowGate', 96],
        ['yellowGate', 113],
        ['blueGate', 34],
        ['blueGate', 37]
    ],
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [

    ],
    events: [
        ['event14', 82, 0]
    ]
}