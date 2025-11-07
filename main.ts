if (true) {
    for (let index = 0; index < 4; index++) {
        led.toggle(1, 2)
    }
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
} else {
    radio.setGroup(1)
}
basic.forever(function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
