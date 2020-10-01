class BaseClass {
    //PROPERTIES
    constructor(x, y, w, h, angle){
        var options = {restitution: 0.8, friction: 1, density: 1};
        //sprite.width---- box1.body
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.image = loadImage("imagess/base.png");
        World.add(world, this.body);
    }

    //FUNCTIONS
    display(){
        //Added here
        push(); //adding a new setting
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        image(this.image, 0,0, this.width, this.height);
        //Removed here
        pop(); // reverting back to the old setting
    }
}

