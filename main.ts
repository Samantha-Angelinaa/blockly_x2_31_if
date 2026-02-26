let i = 0
let x = [
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1,
0,
0,
0,
0
]
let y = [
0,
0,
0,
0,
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1
]
basic.forever(function () {
    led.plot(x[i], y[i])
    basic.pause(200)
    if (i < x.length - 1) {
        i += 1
    } else {
        i = 0
    }
    basic.clearScreen()
})
