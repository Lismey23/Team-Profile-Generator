const inquirer = require('inquirer')
const fs = require ('fs')

const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const welcomeTeam = "Welcome to this command-line application that will help you gather your team basic info and easily access to their emails and GitHub profiles. Please enter all your team members information as requested"
let completeTeam = [];


console.log(welcomeTeam)

// prompts for information
function addManager (){
inquirer.prompt ([
    {
    type:'input', 
    name: 'name',
    message:'Please enter the Manager Name',    
    
},
{
    type:'input', 
    name: 'id',
    message:'Please enter the Manager Employee ID',    
    
},
{
    type:'input', 
    name: 'email',
    message:'Please enter the Manager email address',    
    
},
{
    type:'input', 
    name: 'officeNumber',
    message:'Please enter the Manager office number',    
    
},


])
.then(function(data){
    const name = data.name
    const id = data.id
    const email = data.email
    const officeNumber = data.officeNumber
    const teamMember = new Manager(name, id, email, officeNumber)
    completeTeam.push(teamMember)
})
addTeamMembers();
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type:'list',
            message:'What would you like to do?',
            choices:['Add an Engineer','Add an Intern','Display my Team'],
            name:'addMember',
        }

    ])
.then(function(data){
    

})
}

