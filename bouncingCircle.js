// I wrote the ‘Bouncing Circle’ constructor function code without the assistance.

function BouncingCircle(){
	this.name = "Bouncing Circle";

    //make the circle start at the centre of the screen
    this.x = width/2;
    this.y = height/2;

    //make a random speed for the circle
    this.speed_x = random(30,35);
    this.speed_y = random(30,35);

    //set appropriate size
    this.size = 200;

	this.draw = function(){
		push();
        
        noStroke();
        var spectrum = fourier.analyze();

        for(var i = 0; i< spectrum.length; i++)
        {
            var spec = spectrum[i];

            r = spec;
            g = 255 - spec;
            b = 0;
            a = 250;

            fill(r,g,b,a);
            ellipse(this.x, this.y, spec);
            
        }

        /*
        I coded the ‘Bouncing Circle’ extension by myself. 
        However, after creating my code, I checked the article from 
        ‘https://www.geeksforgeeks.org/how-to-build-a-bounce-ball-with-html-and-javascript/#article-meta-div’
        to check out if there are any improvements I can make to make my code simpler. 
        Although there were no adaptations made after reading the article, 
        the article helped me check if my code was right or wrong.
        */

        //make the circle move around the screen
        this.x += this.speed_x;
        this.y += this.speed_y;

        //make the circle bounce on the screen
        if(this.x - this.size/2 <= 0 || this.x >= width - this.size/2)
        {
            this.speed_x *= -1;
        }
    
        if(this.y - this.size/2 <= 0 || this.y >= height-this.size/2)
        {
            this.speed_y *= -1;
        }
        
	
		pop();
	};
}