
var playButton = document.getElementById("playButton")
var stopButton = document.getElementById("stopButton")


var bpmSlider = document.getElementById("bpm-slider")

var searchEl = document.getElementById("search")

var notes 





const synth = new Tone.Synth().toDestination();


const seq = new Tone.Sequence(function (time, note) {

    synth.triggerAttackRelease(note, 0.1, time);
    console.log(note)

}, notes).start(0);





function play(notes) {
    notes = []
    Tone.Transport.start()
    notes.push(searchEl.value)
    console.log(notes)
}

function stop() {
    Tone.Transport.stop()
}



bpmSlider.addEventListener('input', function (event) {

    Tone.Transport.bpm.rampTo(+event.target.value, 0.1)
})









playButton.addEventListener('click', play)
stopButton.addEventListener('click', stop)
