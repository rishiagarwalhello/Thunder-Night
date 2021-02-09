class Man
{
    constructor(x, y, w, h)
    {
        this.x=0;
        this.y=0;
        this.w=0;
        this.h=400;
        this.img=loadAnimation("m1.png", "m2.png", "m3.png", "m4.png", "m5.png", "m6.png", "m7.png", "m8.png");
        var man_pro={isStatic:true};
        this.body=Bodies.rectangle(x, y, w, h, man_pro);
        
        World.add(world, this.body);
    }

    display()
    {
        push();
        animation(this.img, this.body.position.x, this.body.position.y);
        pop();
    }
}