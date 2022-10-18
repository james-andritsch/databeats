let today = new Date().toISOString().slice(0, 10)

var title
var playButton = document.getElementById("play-button")
var stopButton = document.getElementById("stop-button")
var searchButton = document.getElementById("search-button")
var searchJoke = document.getElementById("search-joke")
var searchArchives = document.getElementById("search-archives")
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
var notes

var dist = new Tone.Distortion(0.2).toDestination();
var seq
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

function searchNews2() {
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

console.log(json)
            var title = json.body[0].setup.toLowerCase().replace(/[^a-z0-9 ]/gi, '') +
                json.body[0].punchline.toLowerCase().replace(/[^a-z0-9 ]/gi, '')

             var titleInt = new TextEncoder().encode(title)
            notes = (titleInt)
            
            jokeEl.innerText = json.body[0].setup
            punchlineEl.innerText = json.body[0].punchline
        })
}

function searchNews3(){
    var newsSearchString = newsSearchEl.value
    
    var url = 'https://chroniclingamerica.loc.gov/suggest/titles/?q=' + newsSearchString  
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
            //
            var title = json[1][0].toLowerCase().replace(/[^a-z ]/gi, '')
            notes = title.split("")
            headlineEL.innerText = json[1][0]
            console.log(title)
           
        })

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
    // const player = new Tone.Player(paths[pathNames[i]]).toDestination();
    const player = new Tone.Player(paths[pathNames[i]]).connect(dist);
    players.push(player)
}

//function to start playing sequence
function play() {
    //clear notes array
    notes = ''
    Tone.Transport.stop()
    Tone.Transport.start()
    
 
    Tone.Transport.swing.value = 1
    Tone.Transport.bpm.value = 200;
    playButton.disabled = true

    //if something exists in the search field, then allow its value into notes array
    if (customSearchEl.value){
        notes = customSearchEl.value.toLowerCase().split("")
    }
    //if no data in notes array try again
    if (notes.length === 0) {
        alert("please enter data to make beats")
    }
    
    //playNote references the players array at getPlayersIndex(note) which is the encoded letters offset by 97 and puts that unique player into var player and then starts that player. 
    function playNote(time, note) {
        var player = players[getPlayersIndex(note)]
        console.log(getPlayersIndex(note))
        player.start(time)
    }

   // pass in an array of events(notes) which will be spaced at the given subdivision (4n for quarter notes).start with 0 time delay
    seq = new Tone.Sequence(playNote, notes, "4n").start(0);
   
    //sequence settings
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

bpmSlider.addEventListener('input', function (event) {
    Tone.Transport.bpm.rampTo(+event.target.value, 0.1)
})

lengthSlider.addEventListener('input', function (event){
    seq.set({
        loopEnd: +lengthSlider.value       
    })  
    console.log(lengthSlider.value)
})


playButton.addEventListener('click', play)
stopButton.addEventListener('click', stop)
//searchButton.addEventListener('click', searchNews1)
searchJoke.addEventListener('click', searchNews2)
searchArchives.addEventListener('click', searchNews3)
// limitArray.addEventListener('click', limitNotes)
