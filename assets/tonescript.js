
var playButton = document.getElementById("playButton")
var stopButton = document.getElementById("stopButton")

const player = new Tone.Player("assets/sounds/bell.wav");
player.autostart = true;
notes = []
// var A = new Tone.Player('./assets/sounds/bell.wav').toDestination();
// var B = new Tone.Player('./assets/sounds/kick.wav').toDestination();

// function searchAPI() {


//     var APIKey = ""
//     var apiURL = "" + city + "&appid=" + APIKey;
//     //parse readable stream into JSON
//     fetch(forecastWeatherURL)
//         .then(function (response) {
//             if (response.status === 200) {
//                 return response.json()
//             }
//             else if (response.status !== 200) {
//                 alert('City not found!')
//             }
//         })
//         //retreive data
//         .then(function (forecast) {
//             //put data into weather obj
//             //clear weather array

//             weatherArr = []
//             for (var i = 0; i < 40; i += 8) {
//                 var weatherObj = {
//                     date: DateTime.fromSeconds(forecast.list[i].dt).toFormat('LLL dd'),
//                     city: forecast.city.name,
//                     temp: Math.round(((forecast.list[i].main.temp - 273.15) * 9 / 5 + 32)) + "°F",
//                     wind: "Wind Speed " + forecast.list[i].wind.speed,
//                     humidity: forecast.list[i].main.humidity + "%" + " Humidity",
//                     condition: forecast.list[i].weather[0].description,
//                     icon: "https://openweathermap.org/img/wn/" + forecast.list[i].weather[0].icon + "@2x.png",
//                 }

//                 weatherArr.push(weatherObj)

//             }



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
    Tone.Transport.stop()
    Tone.Transport.start()
    playButton.disabled = 'true'

    
    var searchString = searchEl.value.split("")
    notes.push(searchString)
    
    const player = new Tone.Player().toDestination();
    player.buffer = samples.get("kick");

    const player2 = new Tone.Player().toDestination();
    player2.buffer = samples.get("shaker");
    
    
    // new Tone.Loop(function (time) {
       
    //     // triggered every eighth note.
    //     player.start
    //     console.log(notes);
    // }, "8n").start(0);
  
    const seq = new Tone.Sequence(function (time, note) {

        if (note ==='a'){
            player.start();
            player.stop("+0.5"); 
        }

        if (note === 'b'){
            player2.start();
            player2.stop("+0.5")
        }


        console.log(note)
    }, notes).start(0);
    console.log(notes)
    
    
  

        console.log(notes)

    console.log(notes)
   
  
}

function stop() {

    Tone.Transport.stop()

}

bpmSlider.addEventListener('input', function (event) {
    Tone.Transport.bpm.rampTo(+event.target.value, 0.1)
})

playButton.addEventListener('click', play)
stopButton.addEventListener('click', stop)
