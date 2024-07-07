//global for the controls and input 
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;
var img;

function preload(){
	sound = loadSound('assets/reggae.mp3');
    img = loadImage('assets/musicVisBackground.jpeg')
}

function setup(){
	 createCanvas(windowWidth, windowHeight);
     background(0);
    
	 controls = new ControlsAndInput();

	 //instantiate the fft object
	 fourier = new p5.FFT();

	 //create a new visualisation container and add visualisations
	 vis = new Visualisations();
	 vis.add(new Spectrum());
	 vis.add(new WavePattern());
	 vis.add(new Needles());
     vis.add(new RotatingGalaxy());
	 vis.add(new BouncingCircle());
	 vis.add(new RidgePlot());
	 vis.add(new Fireworks());
}

function draw(){
	background(0);
	//set the background with the image added the project folder
    image(img, 0, 0, width, height);
	//draw the selected visualisation
	vis.selectedVisual.draw();
	//draw the controls on top.
	controls.draw();
    
	//Write a welcoming text when the music is not playing
	//Make sure that text only appears when the menu is NOT displayed
    push();
    if(!sound.isPlaying() && !controls.menuDisplayed)
        {
            fill(255);
            textAlign(CENTER);
            textSize(30);
            text("Welcome to Music Visualisation App", width/2, height/2);
            textSize(15);
            text("( Press Spacebar to open / close the menu )", width/2, height/2 + 25);
        }
    pop();
}

function mouseClicked(){
	controls.mousePressed();
}

function keyPressed(){
	controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit 
//if the visualisation needs to be resized call its onResize method
function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	if(vis.selectedVisual.hasOwnProperty('onResize')){
		vis.selectedVisual.onResize();
	}
}
