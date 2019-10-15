var 67;
var playTime;
var loadTime;

function preload() {
  67  = loadSound("67.mp3");

}

function setup() {
    if (67.isLoaded()){
    67.play();
    time = millis();

    print (loadTime);
    67.play();
    // Put things you want to run once in here. 
  }
}

  function draw() {
      playTime = millis() - loadTime;
      print(playTime);
     

      if (playTime > ){
          background();
      }
    // Put things you want to over and over here. 
  }
  // 67 = song name