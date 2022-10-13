let today = new Date().toISOString().slice(0, 10)

var playButton = document.getElementById("playButton")
var stopButton = document.getElementById("stopButton")
var searchButton = document.getElementById("search-button")
var bpmSlider = document.getElementById("bpm-slider")
var customSearchEl = document.getElementById("search")
var newsSearchEl = document.getElementById("search-news")
notes = []





console.log(today)
function searchNews1() {
    var newsSearchString = newsSearchEl.value

    var APIKey = "hjEYIlKUFuYilv8Qo8M-Wsv98rmK9mTxqtSH19k2q-0"
    var url = 'https://api.newscatcherapi.com/v2/search?q=' + newsSearchString



    var req = new Request(url);

    fetch(req, {
        headers: {
            'x-api-key': APIKey
        }
    })
        .then(function (response) {
            return response.json()

        })
        .then(function (json) {
            var title = json.articles[0].title.toLowerCase().replace(/[^a-z0-9 ]/gi, '').split("")
            notes = (title)
            console.log(title)
        })
}

function pushNotes(){

}
// function searchNews() {
//     var newsSearchString = newsSearchEl.value

//     var APIKey = "46b839ff294f4764ade00a0cb5999dcd"
//     var url = 'https://newsapi.org/v2/everything?' +
//         'q=' + newsSearchString + '&' +
//         'from='+today+'&' +
//         'sortBy=popularity&' +
//         'apiKey=' + APIKey;



//     var req = new Request(url);

//     fetch(req)
//         .then(function (response) {
//           console.log(response.json())

//         })
//         .then(function(){

//         })


// }


//need a few more samples


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

    Tone.Transport.stop()
    Tone.Transport.start()

    //only allow one playback?
    playButton.disabled = true

    //get input value from custom search and 'split' string into individual letters
    //push them into notes array
    // var customSearchString = customSearchEl.value.toLowerCase().split("")
    // notes.push(customSearchString)

    const player = new Tone.Player().toDestination();
    player.buffer = samples.get("kick");

    const player2 = new Tone.Player().toDestination();
    player2.buffer = samples.get("snare");

    const player3 = new Tone.Player().toDestination();
    player3.buffer = samples.get("conga");

    const player4 = new Tone.Player().toDestination();
    player4.buffer = samples.get("tambourine");

    const player5 = new Tone.Player().toDestination();
    player5.buffer = samples.get("hihat2");

    const player6 = new Tone.Player().toDestination();
    player6.buffer = samples.get("hitom");

    const player7 = new Tone.Player().toDestination();
    player7.buffer = samples.get("cymbal1");

    const player8 = new Tone.Player().toDestination();
    player8.buffer = samples.get("clap");

    const player9 = new Tone.Player().toDestination();
    player9.buffer = samples.get("chime");

    const player10 = new Tone.Player().toDestination();
    player10.buffer = samples.get("bell");

    const player11 = new Tone.Player().toDestination();
    player11.buffer = samples.get("lowtom");

    const player12 = new Tone.Player().toDestination();
    player12.buffer = samples.get("hihat3");

    const player13 = new Tone.Player().toDestination();
    player13.buffer = samples.get("cymbal2");

    const player14 = new Tone.Player().toDestination();
    player14.buffer = samples.get("kick2");

    const player15 = new Tone.Player().toDestination();
    player15.buffer = samples.get("rimshot");

    const player16 = new Tone.Player().toDestination();
    player16.buffer = samples.get("shaker");

    const player17 = new Tone.Player().toDestination();
    player17.buffer = samples.get("cymbal3");

    const player18 = new Tone.Player().toDestination();
    player18.buffer = samples.get("kick");

    const player19 = new Tone.Player().toDestination();
    player19.buffer = samples.get("kick");

    const player20 = new Tone.Player().toDestination();
    player20.buffer = samples.get("kick");

    const player21 = new Tone.Player().toDestination();
    player21.buffer = samples.get("kick");

    const player22 = new Tone.Player().toDestination();
    player22.buffer = samples.get("kick");

    const player23 = new Tone.Player().toDestination();
    player23.buffer = samples.get("kick");

    const player24 = new Tone.Player().toDestination();
    player24.buffer = samples.get("kick");

    const player25 = new Tone.Player().toDestination();
    player25.buffer = samples.get("kick");

    const player26 = new Tone.Player().toDestination();
    player26.buffer = samples.get("kick");


    const seq = new Tone.Sequence(function (time, note) {
        Tone.Transport.bpm.value = 160;

        if (note === 'a') {
            player.start();
            player.stop("+0.5");
        }
        if (note === 'b') {
            player2.start();
            player2.stop("+0.5")
        }
        if (note === 'c') {
            player3.start();
            player3.stop("+0.5");
        }
        if (note === 'd') {
            player4.start();
            player4.stop("+0.5");
        }
        if (note === 'e') {
            player5.start();
            player5.stop("+0.5");
        }
        if (note === 'f') {
            player6.start();
            player6.stop("+0.5");
        }
        if (note === 'g') {
            player7.start();
            player7.stop("+0.5");
        }
        if (note === 'h') {
            player8.start();
            player8.stop("+0.5");
        }
        if (note === 'i') {
            player9.start();
            player9.stop("+0.5");
        }
        if (note === 'j') {
            player10.start();
            player10.stop("+0.5");
        }
        if (note === 'k') {
            player11.start();
            player11.stop("+0.5");
        }
        if (note === 'l') {
            player12.start();
            player12.stop("+0.5");
        }
        if (note === 'm') {
            player13.start();
            player13.stop("+0.5");
        }
        if (note === 'n') {
            player14.start();
            player14.stop("+0.5");
        }
        if (note === 'o') {
            player15.start();
            player15.stop("+0.5");
        }
        if (note === 'p') {
            player16.start();
            player16.stop("+0.5");
        }
        if (note === 'q') {
            player17.start();
            player17.stop("+0.5");
        }
        if (note === 'r') {
            player18.start();
            player18.stop("+0.5");
        }
        if (note === 's') {
            player19.start();
            player19.stop("+0.5");
        }
        if (note === 't') {
            player20.start();
            player20.stop("+0.5");
        }
        if (note === 'u') {
            player21.start();
            player21.stop("+0.5");
        }
        if (note === 'v') {
            player22.start();
            player22.stop("+0.5");
        }
        if (note === 'w') {
            player23.start();
            player23.stop("+0.5");
        }
        if (note === 'x') {
            player24.start();
            player24.stop("+0.5");
        }
        if (note === 'y') {
            player25.start();
            player25.stop("+0.5");
        }
        if (note === 'z') {
            player26.start();
            player26.stop("+0.5");
        }


        console.log(note)
    }, notes).start(0);
    console.log(notes)
}

function stop() {
    Tone.Transport.stop()
    playButton.disabled = false
}

bpmSlider.addEventListener('input', function (event) {
    Tone.Transport.bpm.rampTo(+event.target.value, 0.1)
})

playButton.addEventListener('click', play)
stopButton.addEventListener('click', stop)
searchButton.addEventListener('click', searchNews1)
