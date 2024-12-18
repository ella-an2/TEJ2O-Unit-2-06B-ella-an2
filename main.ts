/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella
 * Created on: Sep 2024
 * This program lights up one LED
*/

// setup
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16,0)
basic.showIcon(IconNames.Happy)

// when button a is pressed
input.onButtonPressed(Button.A, function() {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pause(1)
    pins.digitalWritePin(DigitalPin.P12, 1)
})

// when button b is pressed
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pause(1)
    pins.digitalWritePin(DigitalPin.P12, 0)
})
