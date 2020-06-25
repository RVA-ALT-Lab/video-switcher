
let play = document.getElementById('play')
play.addEventListener('click',playVideo)

let pause = document.getElementById('pause')
pause.addEventListener('click',pauseVideo)

function playVideo(){
  console.log('foo')
  var videos = document.querySelectorAll('video');
  videos.forEach(function(v) {
    console.log('click')
    v.play();
  })
}


function pauseVideo(){
  console.log('foo')
  var videos = document.querySelectorAll('video');
  videos.forEach(function(v) {
    console.log('click')
    v.pause();
  })
}
// var vid = document.getElementById("myVideo");
// vid.src = "movie.ogg";


//from https://stackoverflow.com/questions/46254716/javascript-how-can-i-play-multiple-videos-at-once
// Get all videos.
var videos = document.querySelectorAll('video');

// // Create a promise to wait all videos to be loaded at the same time.
// // When all of the videos are ready, call resolve().
var promise = new Promise(function(resolve) {
  var loaded = 0;

  videos.forEach(function(v,index) {
    if(index != 0){
      v.muted = true;
    }
    console.log(index)
    v.addEventListener('loadedmetadata', function() {
      loaded++;

      if (loaded === videos.length) {
        resolve();
        console.log('loaded')
      }
    });
  });
});

// // Play all videos one by one only when all videos are ready to be played.
// promise.then(function() {
//   videos.forEach(function(v) {
//     v.play();
//   });
// });

let vidOne = document.getElementById('one')
vidOne.addEventListener('click', switchSource)
let vidTwo = document.getElementById('two')
vidTwo.addEventListener('click', switchSource)
let vidThree = document.getElementById('three')
vidThree.addEventListener('click', switchSource)
let vidFour = document.getElementById('four')
vidFour.addEventListener('click', switchSource)


function switchSource(e){
  console.log(this.id)
  let mainVid = document.querySelector('.central.sideview')
  let sideVid = document.getElementById(this.id)
  mainVid.classList = 'sideview'
  sideVid.classList = 'central sideview'
  
  // mainVid.getElementsByTagName("video")[0].src = 'https://rampages.us/extras/widgets/video-switcher/multicam 2_1_1_1.mp4'
}