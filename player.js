class Player
{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:2,
            density:2.5
           // mass:1
        }
        this.body=Bodies.rectangle(x,y,30,50,options);
        World.add(myWorld,this.body);

    }
    display(){
        var position=this.body.position;

        rectMode(CENTER);
        rect(position.x,position.y,30,50);
    }
}