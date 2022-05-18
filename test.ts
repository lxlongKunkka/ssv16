Servo.SetLED(1, false)
//music.playMelody("C D E F G A B C5 ", 120)
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
        music.playTone(Note.C, music.beat())
        //LCD1IN8.DrawRectangle(randint(0, 80), randint(0, 60), randint(80, 160), randint(60, 120), randint(0, 65535), DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1)
    }
    if (0 == pins.digitalReadPin(DigitalPin.P11)) {
        music.playTone(Note.D, music.beat())
        //LCD1IN8.DrawCircle(randint(40, 80), randint(50, 60), randint(30, 40), randint(0, 65535), DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1)
    }
})

basic.forever(function () {
    SimpleShieldKey.Read74HC165()
    if (SimpleShieldKey.Listen_Key(KEY.A)) {
        basic.showString("A")
        Motor.MotorRun(Motors.M1, 200)
        Motor.MotorRun(Motors.M2, 200)
    }
    if (SimpleShieldKey.Listen_Key(KEY.B)) {
        basic.showString("B")
        Motor.MotorRun(Motors.M1, -200)
        Motor.MotorRun(Motors.M2, -200)
    }
    if (SimpleShieldKey.Listen_Key(KEY.MENU)) {
        basic.showString("M")
        Motor.MotorRun(Motors.M1, 0)
        Motor.MotorRun(Motors.M2, 0)
    }
    if (SimpleShieldKey.Listen_Key(KEY.UP)) {
        basic.showArrow(ArrowNames.North)
    }
    if (SimpleShieldKey.Listen_Key(KEY.DOWN)) {
        basic.showArrow(ArrowNames.South)
    }
    if (SimpleShieldKey.Listen_Key(KEY.LEFT)) {
        basic.showArrow(ArrowNames.West)
    }
    if (SimpleShieldKey.Listen_Key(KEY.RIGHT)) {
        basic.showArrow(ArrowNames.East)
    }
})

basic.forever(function() {
    Analog.ScanAllChannel()
    basic.pause(1000)
})