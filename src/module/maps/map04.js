export default {
    //  地图索引
    index: 4,
    //  角色进入地图后的位置，[从下层上来后的位置， 从上层下来后的位置]
    heroPostion: [109, 99],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [110, 5],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [120, 3],
    walls: [119, 108, 97, 86, 85, 83, 82, 93, 104, 115, 81, 79, 78, 89, 100, 111, 58, 59, 60, 61, 62, 63, 64, 65, 43, 41, 40, 39, 29, 18, 7, 37, 36, 35, 25, 14, 3, 33],
    monsters: [
        ['monster01', 68],
        ['monster01', 101],
        ['monster01', 113],
        ['monster01', 117],
        ['monster02', 49],
        ['monster02', 66],
        ['monster03', 91],
        ['monster04', 45],
        ['monster04', 95],
        ['monster05', 52],
        ['monster06', 31],
    ],
    items: [
        ['yellowKey', 13, 1],
        ['yellowKey', 19, 1],
        ['yellowKey', 103, 1],
        ['yellowKey', 112, 1],
        ['yellowKey', 114, 1],
        ['blueKey', 1, 1],
        ['redWater', 11, 50, 'hp'],
        ['redWater', 107, 50, 'hp'],
        ['grayWater', 21, 200, 'hp'],
        ['attack', 105, 1],
    ],
    gates: [
        ['yellowGate', 34],
        ['yellowGate', 42],
        ['yellowGate', 47],
        ['yellowGate', 77],
        ['yellowGate', 80],
        ['yellowGate', 84],
        ['yellowGate', 87],
        ['blueGate', 38]
    ],
    shop: 5,
    npc: [
        ['wiseMan', 9, 'event04', 0]
    ],
    events: [

    ]
}