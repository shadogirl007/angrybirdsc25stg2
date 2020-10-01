class Ground{
    constructor(x,y,wi,he) {
       var options= {isStatic:true} ;
        this.body= Bodies.rectangle(x,y,wi,he,options);
        this.width = wi;
        this.height = he;
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        fill("brown");
       rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}