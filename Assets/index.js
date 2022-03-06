
const inquirer = require('inquirer');
const fs = require('fs');
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
        const employee = new Employee(managerName,employeeId,emailAddress,'Manager')
        const manager = new Manager(officeNumber);

        console.log("---Manager---");
        employee.getName();
        employee.getId();
        employee.getEmail();
        manager.getRole();
        manager.getOffice();

        card = [employee.name,employee.id,employee.email,manager.role,`Office Number: ${manager.officeNumber}`]
        managerCard(card);
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
                addEngineer(answers);
                menuChoice();
                })
                break;
            case 'Add intern':
                inquirer.prompt(intQues).then((answers)=>{
                addIntern(answers);
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




// add Intern Function --------------------------------
function addIntern(answers){
    const {intName, intId, intEmail,intSchool} = answers
    const employee = new Employee(intName, intId, intEmail,'Intern')
    const intern = new Intern(intSchool);
    console.log("---Intern---");
    employee.getName();
    employee.getId();
    employee.getEmail();
    intern.getRole();
    intern.getSchool();

    card = [employee.name,employee.id,employee.email,intern.role,`School: ${intern.school}`];
    generateCard(card);
}

// add Engineer Function--------------------------------------------------------

function addEngineer(answers){
    const {engName,engId,engEmail,engGithub} = answers
    const employee = new Employee(engName,engId,engEmail,'Engineer');
    const engineer = new Engineer(engGithub);
    console.log('---Engineer---');
     employee.getName();
     employee.getId();
     employee.getEmail();
     engineer.getRole();
     engineer.getGithub();

    card = [employee.name,employee.id,employee.email,engineer.role,`Github:${engineer.github}`]
    generateCard(card);
}

// generate card function --------------------------------

function generateCard(card){
    fileName = './dist/index.html'
    const content = `
    <div class = "card">
        <div class = 'cardHeader'>
        <h2> Name: ${card[0]}</h2>
        <h3> Role:${card[3]}</h3>
        </div>
        <div class = 'cardBody'>
        <p> ID: ${card[1]}</p>
        <a href="mailto:${card[2]}">Email: ${card[2]}</a>
        <p>${card[4]}</p>
    </div>
    `
    fs.appendFile(fileName, content, (err) =>
      err ? console.log(err) : console.log('')
    );
    
}

// manager card init function

function managerCard(card){

    fileName = './dist/index.html'
    const content = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="./style.css">
        <title>Team Viewer</title>
    </head>
    
    <header class = "header">My Team</header>
    <body>
    
    <div class = "card">
        <div class = 'cardHeader'>
        <h2> Name: ${card[0]}</h2>
        <h3> Role:${card[3]}</h3>
        </div>
        <div class = 'cardBody'>
        <p> ID: ${card[1]}</p>
        <a href="mailto:${card[2]}">Email: ${card[2]}</a>
        <p>${card[4]}</p>
    </div>
    `
    fs.appendFile(fileName, content, (err) =>
      err ? console.log(err) : console.log('')
    );

}


init();