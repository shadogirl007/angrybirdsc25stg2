class Bird extends BaseClass{
    //PROPERTIES
    constructor(x, y){
        super(x, y, 50, 50);
        this.image = loadImage("imagess/bird.png");
        
    }

    //FUNCTIONS
    display(){
        this.body.position.x = mouseX;
        this.body.position.y= mouseY;
        super.display();
    }
}

//this - keyword refers to the object using that property

//super() - transfers all the properties from the baseclass to the sub classes