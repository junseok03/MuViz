//function to deaw a fireworks
function Firework(colour, x, y)
{
    angleMode(DEGREES);

    var colour = colour;
    var x = x;
    var y = y;

    //empty array to store the particles
    var particles = [];
    this.depleted = false;

    for(var i = 0; i < 360; i += 18)
    {
        particles.push(new Particle(x, y, colour, i, 3))
    }

    this.draw = function()
    {
        angleMode(DEGREES);

        for(var i = 0; i < particles.length; i++)
        {
            particles[i].draw();
        }
        if(particles[0].speed <= 0)
        {
            this.depleted = true;
        }
    }
}