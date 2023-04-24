let apple, grapes, banana;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //as long as you add the class "dragme" to the image, it should work.

    tobi1 = createImg('images/tobi1.png')
    tobi1.position(700, 300);
    tobi1.class('dragme')
    tobi1.size(310,400)

    tobi2 = createImg('images/tobi2.png')
    tobi2.position(700, 300);
    tobi2.class('dragme')
    tobi2.size(310,400)

    tobi3 = createImg('images/tobi3.png')
    tobi3.position(700, 300);
    tobi3.class('dragme')
    tobi3.size(310, 400)

  }
  
  function draw() {
    background(0);

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
