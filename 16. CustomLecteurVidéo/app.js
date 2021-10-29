const video = document.querySelector('.video');
const btnPausePlay = document.getElementById('play-pause');
const img = document.querySelector('#play-pause img');
const barreOrange = document.querySelector('.barre-orange');
const juice = document.querySelector('.juice');
const muteBtn = document.getElementById('mute');
const fullScreen = document.getElementById('fullscreen');
const volumeSlider = document.getElementById('volume-slider');


//play pause
btnPausePlay.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);


function togglePlayPause(){
    if(video.paused){
        img.src = "ressources/pause.svg";
        video.play();
    } 
    else {
        img.src = "ressources/play.svg";
        video.pause();
    }

}

//la barre orange

video.addEventListener('timeupdate', orangeBarRunning);

function orangeBarRunning() {

    let juicePos = video.currentTime / video.duration;

    juice.style.width = juicePos * 100 +"%";

    if (video.ended) {
        img.src = "ressources/play.svg"
    }
}

// volume

volumeSlider.addEventListener('change', () => {
    video.volume = volumeSlider.value / 100;
    console.log(video.volume);
})
 //  mute

 muteBtn.addEventListener('click', () =>{

    if(video.muted){
        video.muted = false;
        muteBtn.innerText = "Mute"
    }
    else {
        video.muted = true;
        muteBtn.innerText = "Unmute"
    }
 })

 // click sur la barre orange

 let rect = barreOrange.getBoundingClientRect();
 console.log(rect);

 let largeur = rect.width;




 // control of orange line 

 
 barreOrange.addEventListener('click', controlTheLine);

    function controlTheLine(event) {

        let x = event.clientX - rect.left;

        let widthPercent = ((x*100/largeur));
        console.log(widthPercent);
   
        let durationVideo = video.duration;
   
        // position en seconde par rapport au pourcentage
        video.currentTime = durationVideo * (widthPercent / 100);

    }


// full screen

 window.addEventListener('resize', () => {
    let rect = barreOrange.getBoundingClientRect();
    let largeur = rect.width;
 })

 video.addEventListener('dblclick', () => {
     video.requestFullscreen();
 })
 fullScreen.addEventListener('click', () => {
    video.requestFullscreen();
})
