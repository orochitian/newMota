export default {
    index: 3,
    heroPostion: [111, 119],
    //  上楼的楼梯位置，上楼后的楼层
    upStair: [120, 4],
    //  下楼的楼梯位置，下楼后的楼层
    downStair: [110, 2],
    walls: [2, 13, 24, 35, 34, 36, 38, 39, 28, 17, 6, 41, 30, 8, 31, 32, 63, 64, 65, 74, 96, 107, 61, 72, 83, 94, 105, 116, 71, 104, 102, 101, 100, 99, 79, 90, 69, 68, 57, 56, 97, 98],
    monsters: [
        ['monster01', 50],
        ['monster02', 106],
        ['monster03', 46],
        ['monster03', 20],
        ['monster04', 22],
        ['monster04', 86],
        ['monster05', 66]
    ],
    items: [
        ['yellowKey', 0, 1],
        ['yellowKey', 3, 1],
        ['yellowKey', 5, 1],
        ['yellowKey', 15, 1],
        ['yellowKey', 25, 1],
        ['yellowKey', 27, 1],
        ['yellowKey', 78, 1],
        ['yellowKey', 87, 1],
        ['blueKey', 26, 1],
        ['redWater', 10, 50, 'hp'],
        ['redWater', 12, 50, 'hp'],
        ['redWater', 88, 50, 'hp'],
        ['redWater', 76, 50, 'hp'],
        ['grayWater', 4, 200, 'hp'],
        ['grayWater', 14, 200, 'hp'],
        ['grayWater', 16, 200, 'hp'],
        ['attack', 89, 1],
        ['defense', 1, 1],
    ],
    gates: [
        ['yellowGate', 33],
        ['yellowGate', 55],
        ['yellowGate', 19],
        ['yellowGate', 85],
        ['yellowGate', 118],
    ],
    npc: [
        ['wiseMan', 43, 'event03', 1]
    ],
    events: [
        ['event03', 92, 0]
    ]
}