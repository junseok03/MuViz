function Spectrum(){
	this.name = "Spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
        strokeWeight(0.1);
		
		fill(0,255,0)
		for(var i = 0; i< spectrum.length; i++)
        {
            var y = map(i, 0, spectrum.length, 0, height);
            var w = map(spectrum[i], 0, 255, 0, width);

            var x = map(i, 0, spectrum.length, 0, window.width);
            var h = map(spectrum[i], 0, 255, 0, window.height);
            
            //Change the colour of each bar such that it gradually changes from green to red based on the amplitude value.
            r = spectrum[i];
            g = 255 - spectrum[i];
            b = 0;
            fill(r, g, b);
            //The bars emerge from the left-hand side of the screen
            // rect(0, y, w, height / spectrum.length);
            rect(x, height-h,  width / spectrum.length, h);
  		}
	
		pop();
	};
}
