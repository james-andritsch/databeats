
var APIKey = "bb8b453155a29d851c8d0280a24261a1"

// var queryURL = "https://octoproxymus.herokuapp.com?secret=walrus&url=https://api.musixmatch.com/ws/1.1/?apikey=" + APIKey;
var queryURL = "https://octoproxymus.herokuapp.com?secret=walrus&url=https://www.stands4.com/services/v2/lyrics.php?uid=1001&tokenid=tk324324&term=forever%20young&artist=Alphaville&format=json"
var formatURL = "?format=json&callback=callback"


//psuedo code
var charactersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//Get all elements from HTML
var playButton = document.getElementById("playButton")
var stopButton = document.getElementById("stopButton")

//audio files
var audioB = new Audio('./assets/sounds/bell.wav');
var audioK = new Audio('./assets/sounds/kick.wav');

const bpm = setInterval(playBeat, 1000);

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
    clearInterval(bpm);
    // const synth = new Tone.Synth().toDestination();
    // synth.triggerAttackRelease("C4", "8n");

    for (var i = 0; i < charactersArray.length; i++) {


        if (charactersArray[i] === 'b') {
            audioB.play();
            console.log('hey')
        }
        else if (charactersArray[i] === 'k') {
            audioK.play();
            console.log('hi')
        }
    }
}

function stopBeat() {
    clearInterval(bpm);
}



//add event listeners
playButton.addEventListener('click', playBeat)
stopButton.addEventListener('click', stopBeat)