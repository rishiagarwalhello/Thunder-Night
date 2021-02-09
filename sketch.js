const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world; //Physics Engine

var man; //Man
var drops=[]; //Drops
var thunder, thunder_frame, thunder_sound, th1, th2, th3, th4; //Thunder

function preload()
{
    th1=loadImage("th1.png");
    th2=loadImage("th2.png");
    th3=loadImage("th3.png");
    th4=loadImage("th4.png");
    thunder_sound=loadSound("thunder.mp3");
}

function setup()
{
    engine=Engine.create();
    world=engine.world;

    createCanvas(1000, 600);

    thunder_sound.play();
    thunder_sound.loop();

    man=new Man(width/2, height-210, 0, 400);

    if(frameCount%1000==0)
    {
        for(var t=0; t<100; t++)
        {
            drops.push(new Drop(random(0, width), -5));
        }
    }
}

function draw()
{
    Engine.update(engine);

    background("black");

    man.display();

    for(var t=0; t<100; t++)
    {
        drops[1].display();
        drops[1].set_yPosition();
    }

    if(frameCount%50==0)
    {
        thunder_frame=frameCount;
        thunder=createSprite(random(10, width-10), 50, 0, 0);
        switch(round(random(1, 4)))
        {
            case 1:
                thunder.addImage(th1);
                break;
            case 2:
                thunder.addImage(th2);
                break;
            case 3:
                thunder.addImage(th3);
                break;
            case 4:
                thunder.addImage(th4);
                break;
            default:
                break;
        }
        thunder.scale=random(0.3, 0.5);
    }
    if(thunder_frame+10==frameCount && thunder)
    {
        thunder.destroy();
    }

    drawSprites();
}