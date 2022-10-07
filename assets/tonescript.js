
var playButton = document.getElementById("playButton")
var stopButton = document.getElementById("stopButton")


var bpmSlider = document.getElementById("bpm-slider")

var searchEl = document.getElementById("search")













function play() {
   // var notes = ["C3", "G3", "D4", "E4", "B4", "C5", "G5"]
    var notes = []

    Tone.Transport.start()
    //how do i get my new input values pushed out into global array
    notes.push(searchEl.value)
    console.log(searchEl.value)


    const synth = new Tone.Synth().toDestination();


const seq = new Tone.Sequence(function (time, note) {

    synth.triggerAttackRelease(note, 0.1, time);
    console.log(note)

}, notes).start(0);

}

function stop() {
    Tone.Transport.stop()
}



bpmSlider.addEventListener('input', function (event) {

    Tone.Transport.bpm.rampTo(+event.target.value, 0.1)
})









playButton.addEventListener('click', play)
stopButton.addEventListener('click', stop)
