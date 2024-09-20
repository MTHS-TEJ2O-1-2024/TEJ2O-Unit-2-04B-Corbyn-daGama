/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Corbyn da Gama
 * Created on: Sep 2024
 * This program ... Shows the current temperature
*/




basic.clearScreen()
basic.pause(1000)
basic.showIcon(IconNames.Happy)


input.onButtonPressed(Button.A, function () {
// our variable for the temperature
let currentTemperature = input.temperature()
basic.showString("The temperature is")
basic.showNumber(currentTemperature)
basic.showString("C.")
basic.showIcon(IconNames.Happy)
})
