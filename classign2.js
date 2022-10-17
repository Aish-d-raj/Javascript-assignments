class Employee{
    constructor(id1,name1,dept1,desg1,ismarried1,joindate1){
        this.id=id1;
        this.name=name1;
        this.dept = dept1;
        this.desg = desg1;
        this.ismarried = ismarried1;
        this.joindate = joindate1;
    }
    
    static showAllEmployeeDetails(){
        console.log("Details of all the Employees");
        console.log("ID\tName\tDept\tDesg\tisMarried\tJoindate");
        for(let i=0;i<this.employees.length;i++){
            console.log(this.employees[i].id+"\t"+this.employees[i].name+"\t"+this.employees[i].dept+"\t"+this.employees[i].desg+"\t"+this.employees[i].ismarried+"\t"+this.employees[i].joindate);
    
        }
    }
    static employees =[];
    static addEmployee(employee){
        this.employees.push(employee);
    }
     
    swipeIn(){
        console.log("The Employee " +this.name+ " having id: "+this.id+ " is in department :"+this.dept);
    }
   showAllEmployeeDetails(){
       
       console.log(+this.id +this.name +this.dept );

   }
    showDetails(){
        console.log("Details Of the Employee");
        console.log("ID :"+this.id);
        console.log("Name :"+this.name);
        console.log("Department :"+this.name);
        console.log("Designation :"+this.desg);
        console.log("isMarried :"+this.ismarried);
        console.log("Joining Date :"+this.joindate);
    }
}

const e1 = new Employee(101,'John','HR','Manager','True','09-10-2020');
const e2 = new Employee(102,'Foo','IT','Developer','False','12-12-2020');
const e3 = new Employee(103,'Bar','HR','ASSTManager','False','04-03-2019');
const e4 = new Employee(104,'Jane','IT','Senior Developer','False','15-05-2019');
const e5 = new Employee(105,'Ram','HR','Senior Manager','True','29-11-2021');

e1.swipeIn();
e2.swipeIn();
e3.swipeIn();

e1.showDetails();
e2.showDetails();

Employee.addEmployee(e1);
Employee.addEmployee(e2);
Employee.addEmployee(e3);
Employee.addEmployee(e4);
Employee.addEmployee(e5);

Employee.showAllEmployeeDetails();
