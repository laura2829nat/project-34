class Invis {
    constructor (x,y,width,height){
    let options = {
        isStatic:true
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width;
    this.height = height;
    World.add (world, this.body);
}

display () {
    var pos = this.body.position
    push();
    rectMode (CENTER);
    stroke(200);
    fill("grey");
    rect(pos.x,pos.y,this.width,this.height);
    pop();

}
}