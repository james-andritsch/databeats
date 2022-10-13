//psuedo code

var fetchButton = document.getElementById('fetchButton');
var artImage = document.querySelector(article)

var charactersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z']
//Get all elements from HTML
var btn = document.getElementById("playButton")
var btn = document.getElementById("stopButton")

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

//add event listeners
playButton.addEventListener('click', playBeat)
stopButton.addEventListener('click', stopBeat)

const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");
//play button
//pause button
//sliders







//Access Lyrics API

//Fetch call to API
//Set up search bar value to concat into link
//Display lyrics in lyric container

//Interval

//Play Beat Function


// function playBeat() {

// for ( i = 0; i < charactersArray.length; i++){
    

//     if(charactersArray[i] === 'b'){
//         audioB.play();
//         console.log('hey')
//     }
//     else if(charactersArray[i] === 'k'){
//         audioK.play();
//         console.log('hi')
//     }
// }
// }

function stopBeat() {
    clearInterval(bpm);
  }

function getArtApi() {
  var requestUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var artwork = document.createElement('img');
        artwork.textContent = data[i].html_url;

      }
    })
}