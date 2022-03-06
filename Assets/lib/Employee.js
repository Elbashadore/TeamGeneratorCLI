class Employee {
    constructor(name,id,email,role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role
    }

    getName(){
        console.log(`Name: ${this.name}`);
    }

    getId(){
        console.log(`Id: ${this.id}`);
    }

    getEmail(){
        console.log(`Email: ${this.email}`);
    }

    getRole(role){
    if (this.role === undefined) {
        this.role = 'Employee';}
    console.log(`Role: ${this.role}`);
        

    }
}




module.exports = Employee;