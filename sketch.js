var key;
var playTime;
var loadTime;
var img;

function preload() {
  key  = loadSound("key.mp3");
  img= loadImage('test10.jpg');
}

function setup() { 
    key.play();
    createCanvas(1575, 725);
    frameRate(1);
   
    // Put things you want to run once in here. 
  }


  function draw() {
    background(0);
    image(img, random(width), random(height));
    scale(0.25);
    image(img, random(width), random(height));
    scale(0.13);
   

     //for(var i = 0; i < 6; i++){
      image(img, random(width), random(height));
     
     //}
    
   
 
    // Put things you want to over and over here. 
  }


  // key = song name