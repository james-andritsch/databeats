
var APIKey = "bb8b453155a29d851c8d0280a24261a1"

// var queryURL = "https://octoproxymus.herokuapp.com?secret=walrus&url=https://api.musixmatch.com/ws/1.1/?apikey=" + APIKey;
var queryURL = "https://octoproxymus.herokuapp.com?secret=walrus&url=https://www.stands4.com/services/v2/lyrics.php?uid=1001&tokenid=tk324324&term=forever%20young&artist=Alphaville&format=json"
var formatURL = "?format=json&callback=callback"


//psuedo code
var charactersArray = ['k', 'k', 'k', 'b', 'k' , 'b', 'k', 'b'] //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//Get all elements from HTML
var playButton = document.getElementById("playButton")
var stopButton = document.getElementById("stopButton")

//audio files
var audioB = new Audio('./assets/sounds/bell.wav');
var audioK = new Audio('./assets/sounds/kick.wav');

var bpm 
var idx = 0

//Search bar
//Lyrics container 
//Background div 
//Play button/Pause button
//Sliders
//Save Settings button






//play button
//pause button
//sliders







//Access Lyrics API

//Fetch call to API
// fetch(queryURL)
//     .then(function (response) {
//         if (response.status === 200) {
//             return response.json()
//         }
//         else if (response.status === 404) {
//             alert('lyrics not found!')
//         }
//     })
//     //retreive data
//     .then(function (lyrics) {
//         console.log(lyrics)
//     })

//Set up search bar value to concat into link
//Display lyrics in lyric container

//Interval

//Play Beat Function
function playBeat() {
    // if at end of chars array
    if (idx === charactersArray.length - 1) {
        // loop back to beginning
        idx = 0
    }

    if (charactersArray[idx] === 'b') {
        audioB.pause()
        audioB.load()
        audioB.play();
        console.log('hey')
    }
    else if (charactersArray[idx] === 'k') {
        audioK.pause()
        audioK.load()
        audioK.play();
        console.log('hi')
    }
    idx++
}

function play() {
    clearInterval(bpm);
    bpm = setInterval(playBeat, 500);
}

function stopBeat() {
    clearInterval(bpm);
}



//add event listeners
playButton.addEventListener('click', play)
stopButton.addEventListener('click', stopBeat)