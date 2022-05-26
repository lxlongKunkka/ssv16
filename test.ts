function right() {
    Motor.MotorRun(Motors.M1, -200)
    Motor.MotorRun(Motors.M2, 200)
    basic.pause(100)
    Motor.MotorRun(Motors.M1, 0)
    Motor.MotorRun(Motors.M2, 0)
}
function back() {
    Motor.MotorRun(Motors.M1, -200)
    Motor.MotorRun(Motors.M2, -200)
}
function left() {
    Motor.MotorRun(Motors.M1, 200)
    Motor.MotorRun(Motors.M2, -200)
    basic.pause(100)
    Motor.MotorRun(Motors.M1, 0)
    Motor.MotorRun(Motors.M2, 0)
}
function stop() {
    Motor.MotorRun(Motors.M1, 0)
    Motor.MotorRun(Motors.M2, 0)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward") {
        forward()
        basic.showArrow(ArrowNames.North)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (receivedString == "back") {
        back()
        basic.showArrow(ArrowNames.South)
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (receivedString == "left") {
        left()
        basic.showArrow(ArrowNames.West)
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (receivedString == "right") {
        right()
        basic.showArrow(ArrowNames.East)
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (receivedString == "stop") {
        stop()
        basic.showIcon(IconNames.Heart)
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
})
function forward() {
    Motor.MotorRun(Motors.M1, 200)
    Motor.MotorRun(Motors.M2, 200)
}
Servo.SetLED(0, false)
Servo.SetLED(1, false)
Servo.SetLED(2, false)
radio.setGroup(1)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Filling(COLOR.BLUE)
LCD1IN8.DisString(0, 0, "0123456789", 0)
LCD1IN8.DisString(0, 12, "ABCDEFGHIJKLMN", 0)
LCD1IN8.DisString(0, 24, "OPQRSTUVWXYZ", 0)
LCD1IN8.DisString(0, 36, "abcdefghijklmn", 0)
LCD1IN8.DisString(0, 48, "opqrstuvwxyz", 0)

loops.everyInterval(500, function () {

})
basic.forever(function () {
    Servo.SetLED(0, false)
    Servo.SetLED(1, false)
    Servo.SetLED(2, false)
    Analog.DAC(0)
    basic.pause(500)
    Servo.SetLED(0, true)
    Servo.SetLED(1, true)
    Servo.SetLED(2, true)
    Analog.DAC(255)
    basic.pause(500)
})

loops.everyInterval(200, function () {
    if (input.buttonIsPressed(Button.A)) {
        LCD1IN8.DrawCircle(
            10,
            10,
            2,
            63488,
            DRAW_FILL.DRAW_FULL,
            DOT_PIXEL.DOT_PIXEL_1
        )
    } else {
        LCD1IN8.DrawCircle(
            10,
            10,
            2,
            33840,
            DRAW_FILL.DRAW_FULL,
            DOT_PIXEL.DOT_PIXEL_1
        )
    }
    if (input.buttonIsPressed(Button.B)) {
        LCD1IN8.DrawCircle(
            150,
            10,
            2,
            63488,
            DRAW_FILL.DRAW_FULL,
            DOT_PIXEL.DOT_PIXEL_1
        )
    } else {
        LCD1IN8.DrawCircle(
            150,
            10,
            2,
            33840,
            DRAW_FILL.DRAW_FULL,
            DOT_PIXEL.DOT_PIXEL_1
        )
    }
})
