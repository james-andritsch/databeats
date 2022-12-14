let today = new Date().toISOString().slice(0, 10)
var title

var playButton = document.getElementById("play-button")
var stopButton = document.getElementById("stop-button")
var searchButton = document.getElementById("search-button")
var saveButton = document.getElementById("save-button")
var clearSearchButton = document.getElementById("clear-button")
var clearFavButton = document.getElementById('clear-favorites')


var saves = document.getElementById("saves")
var searchJokeEl = document.getElementById("search-joke")
var searchArchives = document.getElementById("search-archives")
var customString = document.getElementById("custom-string")
var headlineEl = document.getElementById("headline-span")
var jokeEl = document.getElementById("joke-span")
var punchlineEl = document.getElementById("punchline-span")
var bpmSlider = document.getElementById("bpm-slider")
var loopEndSlider = document.getElementById("loop-end-slider")
var loopStartSlider = document.getElementById("loop-start-slider")
var customSearchEl = document.getElementById("search")
var newsSearchEl = document.getElementById("search-news")
var players = []
var notes
var title
var seq

//fx 
const lowpass = new Tone.Filter(1200, "lowpass");
const compressor = new Tone.Compressor(-18);
const dist = new Tone.Distortion(0.2);
const feedbackDelay = new Tone.FeedbackDelay("8n", 0.5)
//routing
Tone.Destination.chain(dist, compressor);

function searchJoke() {
    console.log('click')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '32988db04emshc799d9aad1fe669p1bd11ajsn4bd2bcd1ed00',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };
    fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
        .then(function (response) {
            if (response.status === 200) {
                return response.json()
            }
            else if (response.status !== 200) {
                alert('This is no Joke!')
            }
            return response.json()
        })
        .then(function (json) {
            notes = ''
            jokeEl.innerText = json.body[0].setup
            punchlineEl.innerText = json.body[0].punchline

            title = json.body[0].setup.toLowerCase().replace(/[^a-z0-9 ]/gi, '') +
                json.body[0].punchline.toLowerCase().replace(/[^a-z0-9 ]/gi, '')
            notes = title.split("")
        })
}

function searchArchive() {
    var customSearchString = customSearchEl.value
    var url = 'https://chroniclingamerica.loc.gov/suggest/titles/?q=' + customSearchString
    var req = new Request(url);

    fetch(req)
        .then(function (response) {
            if (response.status === 200) {
                return response.json()
            }
            else if (response.status !== 200) {
                alert('Please enter valid search!')
            }
            return response.json()
        })
        .then(function (json) {
            customSearchEl.value = ''
            notes = ''
            headlineEl.innerText = json[1][0]

            title = json[1][0].toLowerCase().replace(/[^a-z ]/gi, '')
            notes = title.split("")
            console.log(notes)
        })
}

function setCustomString() {
    title = customSearchEl.value
    notes = customSearchEl.value.toLowerCase().replace(/[^a-z ]/gi, '').split("")
}

//object containing sound paths
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
//The Object.keys() method returns an array that holds the pathnames 
var pathNames = Object.keys(paths)

//use pathnames array at index i inside of the paths object and push each 'tone.Player' with routing into players array
for (i = 0; i < pathNames.length; i++) {
    const player = new Tone.Player(paths[pathNames[i]]).toDestination()
    players.push(player)
}


//function to start playing sequence
function play() {
    console.log(notes)
    //clear current sequence
    seq?.dispose()
    Tone.Transport.stop()
    Tone.Transport.start()
    Tone.Transport.bpm.value = 200;
    playButton.disabled = true
    if (notes === undefined) {
        alert("please enter data to make beats, select custom string, random joke, or search archives before pressing play")
    }
    console.log(notes)
    //playNote references the players array at getPlayersIndex(note) which is the encoded letters offset by 97 and puts that unique player into var player and then starts that player. 
    function playNote(time, note) {
        var player = players[getPlayersIndex(note)]
        player.start(time)
    }
    // pass in an array of events(notes) which will be spaced at the given subdivision (4n for quarter notes).start with 0 time delay
    seq = new Tone.Sequence(playNote, notes, "4n").start(0);

    //sequence settings future development
    seq.set({
        probability: 1,
    })
}

//encode each letter(note) in notes array into charCode, offset by 97 so that a=0, b=1...
function getPlayersIndex(note) {
    var searchStringInt = new TextEncoder().encode(note);
    return searchStringInt - 97
}

function stop() {
    Tone.Transport.stop()
    playButton.disabled = false
}

//repopulate local storage saved items
for (let i = 0; i < localStorage.length; i++) {
    var button = document.createElement("button")   
    button.textContent = (localStorage.key(i));
    saves.appendChild(button);
    button.classList.add('waves-effect', 'waves-light', 'btn')
}

//local storage
function save() {
    console.log(notes)
    localStorage.setItem(title.split(' ').slice(0, 2).join(' '), JSON.stringify(notes))
    var button = document.createElement("button")
    button.classList.add('waves-effect', 'waves-light', 'btn')
    button.textContent = title.split(' ').slice(0, 2).join(' ')

    button.addEventListener("click", function () {
        var repopulate = JSON.parse(localStorage.getItem(button.textContent))
        notes = repopulate
    })
    saves.appendChild(button);
}

//sliders and buttons
bpmSlider.addEventListener('input', function (event) {
    Tone.Transport.bpm.rampTo(+event.target.value, 0.1)
})
loopEndSlider.addEventListener('input', function (event) {
    seq.set({
        loopEnd: +loopEndSlider.value
    })
    console.log(loopEndSlider.value)
})
// loopStartSlider.addEventListener('input', function (event){
//     seq.set({
//         loopStart: +loopStartSlider.value       
//     })  
//     console.log(loopStartSlider.value)
// })

playButton.addEventListener('click', play)
stopButton.addEventListener('click', stop)
searchJokeEl.addEventListener('click', searchJoke)
searchArchives.addEventListener('click', searchArchive)
customString.addEventListener('click', setCustomString)
saveButton.addEventListener('click', save)
clearFavButton.addEventListener('click', function(){
    saves.innerHTML = ''
     localStorage.clear()
})
clearSearchButton.addEventListener('click', function () {
    customSearchEl.value = ""
})