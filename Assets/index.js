
const inquirer = require('inquirer');




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


init();