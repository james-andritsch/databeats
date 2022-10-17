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
var lengthSlider = document.getElementById("length-slider")
var customSearchEl = document.getElementById("search")
var newsSearchEl = document.getElementById("search-news")
var players = []
var limitNotes
var resetSeq


var dist = new Tone.Distortion(0.3).toDestination();




//var feedbackDelay = new Tone.FeedbackDelay("4n", 0.25).toDestination();


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
    block: "assets/sounds/909/block.WAV",
    clap: "assets/sounds/909/clap.WAV",
    clap2: "assets/sounds/909/clap2.WAV",
    crash: "assets/sounds/909/crash.WAV",
    crash2: "assets/sounds/909/crash2.WAV",
    hat1: "assets/sounds/909/hat1.WAV",
    hat2: "assets/sounds/909/hat2.WAV",
    hat3: "assets/sounds/909/hat3.WAV",
    hat4: "assets/sounds/909/hat4.WAV",
    hat5: "assets/sounds/909/hat5.WAV",
    hightom: "assets/sounds/909/hightom.WAV",
    kick1: "assets/sounds/909/kick1.WAV",
    kick2: "assets/sounds/909/kick2.WAV",
    kick3: "assets/sounds/909/kick3.WAV",
    kick4: "assets/sounds/909/kick4.WAV",
    lowtom: "assets/sounds/909/lowtom.WAV",
    midtom: "assets/sounds/909/midtom.WAV",
    ride1: "assets/sounds/909/ride1.WAV",
    ride2: "assets/sounds/909/ride2.WAV",
    rimshot: "assets/sounds/909/rimshot.WAV",
    snare1: "assets/sounds/909/snare1.WAV",
    snare2: "assets/sounds/909/snare2.WAV",
    snare3: "assets/sounds/909/snare3.WAV",
    snare4: "assets/sounds/909/snare4.WAV",
    splash: "assets/sounds/909/splash.WAV",
    tom: "assets/sounds/909/tom.WAV",
}

var pathNames = Object.keys(paths)

for (i = 0; i < pathNames.length; i++) {
    // const player = new Tone.Player(paths[pathNames[i]]).toDestination();
    const player = new Tone.Player(paths[pathNames[i]]).connect(dist);
    players.push(player)
}

function play(resetSeq) {
    Tone.Transport.stop()
    Tone.Transport.start()
    
    console.log(lengthSlider.value)
    Tone.Transport.swing.value = 1
    Tone.Transport.bpm.value = 200;
    playButton.disabled = true

    
    var notes = customSearchEl.value.toLowerCase().split("")
    if (notes.length === 0) {
        alert("please enter data to make beats")
    }
    if (limitNotes === true) {
        notes = notes.slice(15)
    }
    
    function playNote(time, note) {
        var player = players[getPlayersIndex(note)]
        player.start(time)
    }

    console.log(notes.length)
    //taking notes, iterating through, and passing each note to function
    var seq = new Tone.Sequence(playNote, notes, "4n").start(0);
    seq.probability = 1
    seq.length = lengthSlider.value
    console.log(resetSeq)
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

lengthSlider.addEventListener('input', function (event){
    resetSeq = lengthSlider.value
})


playButton.addEventListener('click', play)
stopButton.addEventListener('click', stop)
// searchButton.addEventListener('click', searchNews1)
// searchJoke.addEventListener('click', searchNews2)
limitArray.addEventListener('click', limitNotes)
