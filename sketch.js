var key;
var playTime;
var loadTime;
var falling;
function preload() {
  key  = loadSound("key.mp3");

}

function setup() { 
    key.play ();
    createCanvas(windowWidth, windowHeight);
    background(0)
   
    
    // Put things you want to run once in here. 
  }


  function draw() {
    falling= createVideo(['assets/falling.mp4']);
   
   
    // Put things you want to over and over here. 
  }
  // key = song name