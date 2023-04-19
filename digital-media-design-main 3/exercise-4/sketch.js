//p5 sound library https://p5js.org/reference/#/libraries/p5.sound

let violet, iris, jasmine;

//declare variable up at the top
let mySound1, mySound2, mySound3;

var dragging = false; // Is the object being dragged?


//load sounds before you use them
function preload(){

  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('audio/chirp.mp3');
  mySound2 = loadSound('audio/glitter.mp3');
  mySound3 = loadSound('audio/bubble.mp3');
  mySound4 = loadSound('audio/bumble.mp3');
  mySound5 = loadSound('audio/peace.mp3');
}


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //play sound when mouse is pressed on the canvas
    //cnv.mousePressed(toggleSound);

    violet = createImg("images/pasta.jpeg");
    violet.class('flower');
    violet.position(200, 300);
    violet.size(200,275);

    iris = createImg("images/musubi.jpeg");
    iris.class('flower');
    iris.position(500, 300);
    iris.size(200,275);

    jasmine = createImg("images/steak.jpeg");
    jasmine.class('flower');
    jasmine.position(800, 300);
    jasmine.size(200,275);

    ques = createImg("images/ques.jpeg");
    ques.class('flower');
    ques.position(1100, 300);
    ques.size(200,275);

    chick = createImg("images/chick.jpeg");
    chick.class('flower');
    chick.position(1400, 300);
    chick.size(200,275);
    
  }
  
  function draw() {
    background(0);
    violet.mousePressed(makeViolet);
    iris.mousePressed(makeIris);
    jasmine.mousePressed(makeJasmine);
  }

  function makeViolet() {
    if (mySound1.isPlaying()){
      mySound1.pause();
    } else {
      mySound1.play();
    }
  }

  function makeIris() {
    if (mySound2.isPlaying()){
      mySound2.pause();
    } else {
      mySound2.play();
    }
  }


  function makeJasmine() {
    if (mySound3.isPlaying()){
      mySound3.pause();
    } else {
      mySound3.play();
    }
  }

  function makeQues() {
    if (mySound4.isPlaying()){
      mySound4.pause();
    } else {
      mySound4.play();
    }
  }

  function makeChick() {
    if (mySound5.isPlaying()){
      mySound5.pause();
    } else {
      mySound5.play();
    }
  }

  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
