const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(github){
        super('John',42,'john42@gmail.com','Engineer');
        this.github = github;
    }

    getGithub(){
        console.log(`Github: ${this.github}`);
    }
}




module.exports = Engineer;