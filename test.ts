Servo.SetLED(1, false)
music.playMelody("C D E F G A B C5 ", 120)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Filling(COLOR.BLUE)

basic.forever(function () {
    Servo.SetLED(0, false)
    Servo.SetLED(1, false)
    Servo.SetLED(2, false)
    basic.pause(500)
    Servo.SetLED(0, true)
    Servo.SetLED(1, true)
    Servo.SetLED(2, true)
    basic.pause(500)
})

basic.forever(function () {
    if (0 == pins.digitalReadPin(DigitalPin.P5)) {
        LCD1IN8.DrawRectangle(randint(0, 80), randint(0, 60), randint(80, 160), randint(60, 120), randint(0, 65535), DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1)
    }
    if (0 == pins.digitalReadPin(DigitalPin.P11)) {
        LCD1IN8.DrawCircle(randint(40, 80), randint(50, 60), randint(30, 40), randint(0, 65535), DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1)
    }
})