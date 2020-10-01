class Box extends BaseClass{
    //PROPERTIES
    constructor(x, y, w, h){
        super(x,y,w,h);
        this.image = loadImage("imagess/wood1.png");
    }

}

//this - keyword which refers to the current object using that property

/*
rotate - about an angle --> rotate(angle of the body)
translate - sliding/slipping without rotation ---> translate(position of the body)
*/