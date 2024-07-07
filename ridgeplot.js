/*
    The ‘Ridge Plot’ extension is from one of the examples shown in the lectures provided by professors. 
    I tried to improve it by changing colours with the frequencies of the music.
*/

function RidgePlot(){
	//vis name
	this.name = "Ridge Plot";

    this.output = [];
    this.startX = windowWidth/5;
    this.endY = windowHeight/5;
    this.startY = windowHeight - this.endY;
    this.spectrumWidth = windowWidth * 3/5;
    this.speed = 0.7;

    this.addWave = function(){

        var w = fourier.waveform();
        var outputs_wave = [];
        var smallScale = 3;
        var bigScale = 40;

        for(var i = 0; i < w.length; i++)
        {
            if(i % 20 == 0)
            {
                var x = map(i, 0, 1024, this.startX, this.startX + this.spectrumWidth);
                
                if(i < 1024 * 0.25 || i > 1024 * 0.75)
                {
                    var y = map(w[i], -1, 1, -smallScale, smallScale)
                    outputs_wave.push({
                        x: x,
                        y: this.startY + y
                    })
                }
                else
                {
                    var y = map(w[i], -1, 1, -bigScale, bigScale);

                    outputs_wave.push({
                        x: x,
                        y: this.startY + y
                    })
                }
            }
        }

        this.output.push(outputs_wave);
    }

	//draw the wave form to the screen
	this.draw = function(){
		push();
		
        var spectrum = fourier.analyze();
        
        strokeWeight(3);
        noFill();

        if(frameCount % 10 == 0)
        {
            this.addWave();
        }

        for(var i = 0; i < this.output.length; i++)
        {
            var o = this.output[i];

            ////change the colours when the music is playing
            var spec = spectrum[i];
            r = spec;
            g = 255 - spec;
            b = 0;
            a = 220;

            if(!sound.isPlaying())
                {
                    r = 0;
                    g = 0;
                    b = 0;
                    a = 0;
                }
            stroke(r, g, b, a);

            beginShape()
            for(var j = 0; j < o.length; j++)
            {
                o[j].y -= this.speed;
                vertex(o[j].x, o[j].y);
            }
            endShape()


            if(o[0].y < this.endY)
            {
                this.output.splice(i,1);
            }
        }

		pop();
	};
}