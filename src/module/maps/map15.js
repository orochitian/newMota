export default {
    //  地图索引
    index: 15,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [104, 16],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [5, 16],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [115, 14],
    //  加载所有墙，直接输入地图坐标
    walls: [100, 78, 67, 56, 45, 34, 35, 36, 25, 14, 47, 58, 69, 80, 91, 102, 113, 26, 28, 29, 18, 7, 40, 51, 62, 73, 84, 95, 106, 98, 97, 86, 75, 64, 31, 30, 72, 70],
    //  怪物，怪物名称，怪物坐标，第三个值可有可无，用来开门的。
    monsters: [
        ['monster03', 108],
        ['monster03', 118],
        ['monster09', 21],
        ['monster09', 24],
        ['monster09', 66],
        ['monster10', 41],
        ['monster10', 53],
        ['monster10', 99],
        ['monster10', 101],
        ['monster11', 65],
        ['monster11', 111],
        ['monster12', 11],
        ['monster13', 1],
        ['monster15', 60, [27]],
    ],
    //  物品，key，位置，物品数值
    items: [
        ['yellowKey', 46, 1],
        ['yellowKey', 68, 1],
        ['blueKey', 57, 1],
        ['redWater', 87, 100, 'hp'],
        ['defense', 0, 2]
    ],
    //  门，key，位置
    gates: [
        ['yellowGate', 3],
        ['yellowGate', 32],
        ['yellowGate', 33],
        ['yellowGate', 63],
        ['yellowGate', 89],
        ['yellowGate', 96],
        ['yellowGate', 117],
        ['greenGate', 27],
    ],
    //  npc，key，位置，事件类别（根据楼层分类），第几事件
    npc: [
        ['businessMan', 120, 'event15', 0],
        ['thief', 8, 'event15', 1]
    ],
    events: [

    ]
}