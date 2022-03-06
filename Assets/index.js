
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');




// Manager Questions
const questions = [
    {
    type: 'input',
    name: 'managerName',
    message: 'Manager Name:'},

    {
    type: 'input',
    name: 'employeeId',
    message:'Employee ID:'

    },

    {
    type:'input',
    name:'emailAddress',
    message:'Email Address:'
    },

    {
     type:'input',
     name:'officeNumber',
     message:'Office Number:'   
    },


];

// menu for choosing build app, add intern, add engineer

const menu = [
    {
        type:'list',
        name:'choice',
        message:'What would you like to do?',
        choices: ['Add engineer', 'Add intern', 'Finish building team'],
       }
];

// Engineer questions

const engQues = [
    {
    type: 'input',
    name: 'engName',
    message: "Engineer's Name:"
    },
    {
    type: 'input',
    name: 'engId',
    message: "Engineer's ID:"    
    },
    {
    type: 'input',
    name: 'engEmail',
    message:"Engineer's Email:"    
    },
    {
    type: 'input',
    name: 'engGithub',
    message: "Engineer's Github:"    
    }
];

// intern questions

const intQues = [
    {
    type:'input',
    name:'intName',
    message:"Intern's Name:"
    },
    {
    type:'input',
    name:'intId',
    message:"Intern's ID:"    
    },
    {
    type:'input',
    name:'intEmail',
    message:"Intern's Email:"    
    },
    {
    type:'input',
    name:'intSchool',
    message:"Intern's School:"    
    }
];

// init function 

function init(){
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        const {managerName, employeeId, emailAddress, officeNumber,} = answers;
        menuChoice();
       
    })
}


// function that prompts menu for choices
function menuChoice(){
    inquirer.prompt(menu).then((answers)=>{
        const {choice} = answers;
        console.log(choice);
        switch(choice){
            case 'Add engineer':
                inquirer.prompt(engQues).then((answers)=>
                {
                menuChoice();
                })
                break;
            case 'Add intern':
                inquirer.prompt(intQues).then((answers)=>{
                menuChoice();
                })
                break;
            case 'Finish building team':
                console.log('Team built')
                break;      
            default:
                console.log('Incorrect Selection')  
        }




    })
}


// init();


const intern = new Intern("UWO");

console.log("---Intern---");
intern.getName();
intern.getId();
intern.getEmail();
intern.getRole();
intern.getSchool();

const employee = new Employee('John',42,'john42@gmail.com','Manager')

console.log("---Employee---");
employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

const manager = new Manager(69)

console.log('---Manager---');
manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();
manager.getOffice();

const engineer = new Engineer('Loliman');

console.log("---Engineer---");
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getRole();
engineer.getGithub();
