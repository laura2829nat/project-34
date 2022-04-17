class MovingBrick {
    constructor (x,y,width,height){
        this.speed = 10
        this.body = Bodies.rectangle(x, y, width, height, )
        this.width = width;
        this.height = height;
        
        World.add (world, this.body);
    }
    display () {
        var pos = this.body.position
        push();
        rectMode (CENTER);
        stroke(200);
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    
    }
}