let today = new Date().toISOString().slice(0, 10)

var title
var playButton = document.getElementById("playButton")
var stopButton = document.getElementById("stopButton")
var searchButton = document.getElementById("search-button")
var searchJoke = document.getElementById("search-joke")
var limitArray = document.getElementById("limit-array")
var headlineEL = document.getElementById("headline-span")
var jokeEl = document.getElementById("joke-span")
var punchlineEl = document.getElementById("punchline-span")
var bpmSlider = document.getElementById("bpm-slider")
var customSearchEl = document.getElementById("search")
var newsSearchEl = document.getElementById("search-news")
var players = []
var limitNotes

// function searchNews1() {
//     var newsSearchString = newsSearchEl.value
//     var APIKey = "hjEYIlKUFuYilv8Qo8M-Wsv98rmK9mTxqtSH19k2q-0"
//     var url = 'https://api.newscatcherapi.com/v2/search?q=' + newsSearchString
//     var req = new Request(url);

//     fetch(req, {
//         headers: {
//             'x-api-key': APIKey
//         }
//     })
//         .then(function (response) {
//             if (response.status === 200) {
//                 return response.json()
//             }
//             else if (response.status !== 200) {
//                 alert('Please enter valid search!')
//             }
//             return response.json()
//         })
//         .then(function (json) {
//             headlineEL.innerText = json.articles[0].title
//             var title = json.articles[0].title.toLowerCase().replace(/[^a-z0-9 ]/gi, '').split("")
//             console.log(title)
//             notes = (title)
//         })
// }

// function searchNews2() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '32988db04emshc799d9aad1fe669p1bd11ajsn4bd2bcd1ed00',
//             'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
//         }
//     };

//     fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
//         .then(function (response) {
//             if (response.status === 200) {
//                 return response.json()
//             }
//             else if (response.status !== 200) {
//                 alert('This is no Joke!')
//             }
//             return response.json()
//         })
//         .then(function (json) {
// //char codes 97-122
// console.log(json)
//             var title = json.body[0].setup.toLowerCase().replace(/[^a-z0-9 ]/gi, '') +
//                 json.body[0].punchline.toLowerCase().replace(/[^a-z0-9 ]/gi, '')

//              var titleInt = new TextEncoder().encode(title)
//              console.log(titleInt)
//             notes = (titleInt)
//             console.log(notes)
//             jokeEl.innerText = json.body[0].setup
//             punchlineEl.innerText = json.body[0].punchline
//         })
// }

function setLimitNotes() {
    limitNotes = true
}

const paths = {
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
    kick3: "assets/sounds/kick3.wav",
    kick4: "assets/sounds/kick4.wav",
    kick5: "assets/sounds/kick5.wav",
    kick6: "assets/sounds/kick6.wav",
    lowtom: "assets/sounds/lowtom.wav",
    rimshot: "assets/sounds/rimshot.wav",
    shaker: "assets/sounds/shaker.wav",
    snare: "assets/sounds/snare.wav",
    snare2: "assets/sounds/snare2.wav",
    snare3: "assets/sounds/snare3.wav",
    snare4: "assets/sounds/snare4.wav",
    tambourine: "assets/sounds/tambourine.wav",
    woodblock: "assets/sounds/woodblock.wav",
    splash: "assets/sounds/splash.wav",
}

var pathNames = Object.keys(paths)

for (i = 0; i < pathNames.length; i++) {
    const player = new Tone.Player(paths[pathNames[i]]).toDestination();
    players.push(player)
}

function play() {

    if (notes.length === 0) {
        alert("please enter data to make beats")
    }
    Tone.Transport.stop()
    Tone.Transport.start()
    Tone.Transport.bpm.value = 40;
    playButton.disabled = true

    var notes = customSearchEl.value.toLowerCase().split("")

    if (limitNotes === true ){
        notes = notes.slice(16)
    }

    function playNote(time, note) {
        var player = players[getPlayersIndex(note)]
        player.start()
    }
//taking notes, iterating through, and passing each note to function
    var seq = new Tone.Sequence(playNote, notes, "4n").start(0);
}

function getPlayersIndex(note) {
    var searchStringInt = new TextEncoder().encode(note)
    return searchStringInt - 97
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
// searchButton.addEventListener('click', searchNews1)
// searchJoke.addEventListener('click', searchNews2)
limitArray.addEventListener('click', limitNotes)
