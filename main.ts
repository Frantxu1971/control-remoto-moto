input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
radio.setGroup(10)
