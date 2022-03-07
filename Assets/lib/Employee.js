class Employee {
    constructor(name,id,email,role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email
    }

    getRole(role){
    if (this.role === undefined) {
        this.role = 'Employee';
    return(this.role)};
        

    }
}
const employee = new Employee('John',7,'email')
let role = employee.getRole();
console.log(role);
module.exports = Employee;