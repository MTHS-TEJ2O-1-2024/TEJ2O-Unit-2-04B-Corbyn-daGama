/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Corbyn da Gama
 * Created on: Sep 2024
 * This program ... Shows the current temperature
*/


// our variable for the temperature
let currentTemperature = input.temperature()
let currentTemperatureKelvin: number 

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()



input.onButtonPressed(Button.A, function () {

currentTemperatureKelvin = (currentTemperature + 273.15)
currentTemperatureKelvin = Math.round(currentTemperatureKelvin)
basic.showString('the temperature is : ' + currentTemperatureKelvin.toString() +'K')})
basic.clearScreen()
