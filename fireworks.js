/*
    The ‘Fireworks’ extension is from one of the examples shown in the lectures provided by professors. 
*/

//function that draws multiple particles(firworks) on the screen
function Fireworks()
{
    //vis name
    this.name = "Fireworks";

    var fireworks = [];
    //make a local variable to call the beat dectect function
    var beatDetect = new BeatDetect();
    
    this.addFirework = function()
    {
        var f_colour = color(random(0,255),random(0,255),random(0,255));
        var f_x = random(width * 0.2, width * 0.8);
        var f_y = random(height * 0.2, height * 0.8);

        fireworks.push(new Firework(f_colour, f_x, f_y));
    }

    //make sure to update(splice)
    this.update = function()
    {
        for(var i = 0; i < fireworks.length; i++)
        {
            fireworks[i].draw();
            if(fireworks[i].depleted)
            {
                fireworks.splice(i,1);
            }
        }
    }

    //draw fireworks on the screen when beat detected
    this.draw = function() 
    {
        var spectrum = fourier.analyze();

        if(beatDetect.detectBeat(spectrum))
        {
            this.addFirework();
        }

        //make sure to call the update function
        this.update();
    }
}