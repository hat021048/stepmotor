input.onButtonPressed(Button.A, function () {
    if (Periode > 0) {
        Periode += -1
    } else {
        Periode = 5
    }
})
input.onButtonPressed(Button.B, function () {
    if (Oa == 1) {
        Oa = 0
        Ob = 1
    } else {
        Oa = 1
        Ob = 0
    }
})
let Periode = 0
let Ob = 0
let Oa = 0
basic.showIcon(IconNames.SmallDiamond)
Oa = 1
Ob = 0
Periode = 10
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(Periode)
    pins.digitalWritePin(DigitalPin.P14, Oa)
    pins.digitalWritePin(DigitalPin.P16, Ob)
    basic.pause(Periode)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(Periode * 2)
    pins.digitalWritePin(DigitalPin.P14, Ob)
    pins.digitalWritePin(DigitalPin.P16, Oa)
    basic.pause(Periode * 2)
})
