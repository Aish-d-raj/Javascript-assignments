class A{
    constructor(n1,n2){
        this.n1=n1;
        this.n2 =n2;
     
    console.log(this.n1 +" , "+ this.n2);
    }
    
        
    
}

class B extends A{
    constructor(n1,n2,n3){
        super(n1,n2);
        this.n3=n3;

        console.log(this.n1 +" , "+ this.n2 + ", "+ this.n3);
    }
}

class C extends B {

}

const number = new C(1,2,3);
