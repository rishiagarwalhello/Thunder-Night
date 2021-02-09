class Drop
{
    constructor(x, y)
    {
        this.x=0;
        this.y=0;
        var drop_pro={friction:0.1, density:0.1, restitution:0.005};
        this.body=Bodies.circle(x, y, 2.5, drop_pro);

        World.add(world, this.body);
    }

    set_yPosition()
    {
        if(this.body.position.y>height)
        {
            Body.setPosition(this.body, {x:random(0, width), y:-5});
        }
    }
    
    display()
    {
        ellipseMode(RADIUS);
        fill("blue");
        noStroke();
        ellipse(this.body.position.x, this.body.position.y, 5, 5);
    }
}