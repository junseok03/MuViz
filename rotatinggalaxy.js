// I wrote the ‘Rotating Galaxy’ constructor function by adapting some codes from https://www.youtube.com/watch?v=F-3Mt5avI2o.

function RotatingGalaxy(){
	//vis name
	this.name = "Rotating Galaxy";
    
    //input variables
    this.starsiteration = 20;
    this.starsize = 5;
    this.axisLen = 2;
    this.w_h= 0.5;

    /*
        For my ‘Rotating Galaxy’ extension, 
        I tried to gather information on codes and images from the internet. 
        I tried to imitate the image of the ‘IC342’ galaxy I found on the NASA website 
        (‘https://science.nasa.gov/ic-342-hidden-galaxy’). 
    */

	//draw the galaxy form to the screen
	this.draw = function()
    {
		push();
        
        translate(width/2, height/2);
		noFill();

		//calculate the spectrum and waveform from the fft.
		var wave = fourier.waveform();
        var spectrum = fourier.analyze();
        
		for(var i = 0; i < this.starsiteration; i++)
        {
            var s = map(wave[i], -1, 1, 5, 255);
            var spec = spectrum[i];
            
            /*
                Adapted from: https://www.youtube.com/watch?v=F-3Mt5avI2o

                This video helped me to find a way to alter the size of the galaxy drawn on my code. 
            */

            //Here’s the starting point where I adapted the code

            //set minimum & maximum size of the spiral galaxy
            var majAxis = (this.axisLen * s + (this.starsize * spec))* 4/7
			var minAxis = (majAxis * this.w_h);

            //Here’s the end point where I adapted the code
            
            //rotate when music is playing
            rotate(spec);
            
            r = spec;
            g = 255 - spec;
            b = 0;
            a = 255;
            if(!sound.isPlaying())
                {
                    r = 192;
                    g = 192;
                    b = 192;
                    a = 50;
                }
            stroke(r, g, b, a);
            strokeWeight(10);
            
            ellipse(0,0, majAxis, minAxis);
        }
		
        pop();
	};
}