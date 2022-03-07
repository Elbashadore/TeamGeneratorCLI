const Employee = require('./Employee');

class Intern extends Employee{
    constructor(school){
        super('John',42,'john42@gmail.com','Intern');
        this.school = school;
    }

    getSchool(){
        return this.school;
    }
}




module.exports = Intern;