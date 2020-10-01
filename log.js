class Log extends BaseClass {
    //PROPERTIES
    constructor(x, y,h,angle){
        super(x,y,20,h,angle);
        Matter.Body.setAngle(this.body, angle);
        this.image = loadImage("imagess/wood2.png");
    }
}

/*
INHERITANCE
Parent Class - Base Class
Children classes - The properties & the functions of the parent will be transferred to the children
    -Sub Classes
*/
