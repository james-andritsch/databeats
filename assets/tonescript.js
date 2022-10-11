
var playButton = document.getElementById("playButton")
var stopButton = document.getElementById("stopButton")

const player = new Tone.Player("assets/sounds/bell.wav");
player.autostart = true;

var A = new Tone.Player('./assets/sounds/bell.wav').toDestination();
var B = new Tone.Player('./assets/sounds/kick.wav').toDestination();

let multiPlayer;



var bpmSlider = document.getElementById("bpm-slider")

var searchEl = document.getElementById("search")


const samples = new Tone.ToneAudioBuffers({
    bell: "assets/sounds/bell.wav",
    chime: "assets/sounds/chime.wav",
    clap: "assets/sounds/clap.wav",
    conga: "assets/sounds/conga.wav",
    cymbal1: "assets/sounds/cymbal1.wav",
    cymbal2: "assets/sounds/cymbal2.wav",
    cymbal3: "assets/sounds/cymbal3.wav",
    hihat2: "assets/sounds/hihat2.wav",
    hihat3: "assets/sounds/hihat3.mp3",
    hitom: "assets/sounds/hitom.wav",
    kick: "assets/sounds/kick.wav",
    kick2: "assets/sounds/kick2.wav",
    lowtom: "assets/sounds/lowtom.wav",
    rimshot: "assets/sounds/rimshot.wav",
    shaker: "assets/sounds/shaker.wav",
    snare: "assets/sounds/snare.wav",
    tambourine: "assets/sounds/tambourine.wav",

})









function play() {
    
    const player = new Tone.Player().toDestination();
    player.buffer = samples.get("kick");
    player.start();
    
    
    
    
    
    //var notes = ["C3", "G3", "D4", "E4", "B4", "C5", "G5"]
    var notes = []
    var searchString = searchEl.value.split("")
    notes.push(searchString)

    Tone.Transport.start()

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
