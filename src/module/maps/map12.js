export default {
    //  地图索引
    index: 12,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [119, 111],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [110, 13],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [120, 11],
    //  加载所有墙，直接输入地图坐标
    walls: [11, 12, 34, 35, 36, 37, 25, 14, 3, 16, 39, 40, 41, 42, 29, 18, 7, 51, 55, 56, 57, 58, 69, 80, 91, 102, 81, 82, 83, 84, 73, 95, 106, 107, 86, 109, 99, 100, 20, 21],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster03', 113],
        ['monster03', 117],
        ['monster09', 76],
        ['monster09', 96],
        ['monster10', 13],
        ['monster10', 54],
        ['monster11', 26],
        ['monster11', 28],
        ['monster11', 45],
        ['monster11', 61],
        ['monster12', 31],
        ['monster12', 49],
        ['monster12', 90],
        ['monster12', 98],
    ],
    //  物品，key，位置，物品数值
    items: [
        ['yellowKey', 4, 1],
        ['yellowKey', 6, 1],
        ['yellowKey', 66, 1],
        ['yellowKey', 67, 1],
        ['yellowKey', 74, 1],
        ['yellowKey', 77, 1],
        ['blueKey', 78, 1],
        ['redWater', 52, 100, 'hp'],
        ['redWater', 103, 100, 'hp'],
        ['redWater', 105, 100, 'hp'],
        ['grayWater', 71, 400, 'hp'],
        ['attack', 5, 2],
        ['defense', 64, 2],
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 33],
        ['yellowGate', 38],
        ['yellowGate', 47],
        ['yellowGate', 62],
        ['yellowGate', 87],
        ['yellowGate', 101],
        ['blueGate', 85],
    ],
    shop: 93,
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [
        ['businessMan', 0, 'event12', 0],
        ['businessMan', 10, 'event12', 1]
    ],
    events: [

    ]
}