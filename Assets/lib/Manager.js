const Employee = require('./Employee')

class Manager extends Employee{
    constructor(officeNumber){
        super('John',42,'john42@gmail.com','Manager');
        this.officeNumber = officeNumber
    }

    getOffice(){
        console.log(`Office Number: ${this.officeNumber}`)
    }

    
}



module.exports = Manager;