class shape{
    constructor(name,sides,sidelength){
        this.name=name;
        this.sides=sides;
        this.sidelength = sidelength;
    }

    calcPerimeter(){
        console.log("The perimeter of "+this.name+ " is " +this.sides*this.sidelength);
    }

}

const a= new shape("Square", 4, 5);
const b= new shape("Triangle", 3, 3);

a.calcPerimeter();
b.calcPerimeter();
