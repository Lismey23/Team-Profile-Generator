const inquirer = require('inquirer')

const welcomeTeam = "Welcome to this command-line application that will help you gather your team basic info and easily access to their emails and GitHub profiles. Please enter all your team members information as requested"
let completeTeam = []


console.log(welcomeTeam)

// prompts for information
function addManager (){
inquirer.prompt ([
    {
    type:'input', 
    name: 'managerName',
    message:'Please enter the Manager Name',    
    
},
{
    type:'input', 
    name: 'managerID',
    message:'Please enter the Manager Employee ID',    
    
},
{
    type:'input', 
    name: 'managerEmail',
    message:'Please enter the Manager email address',    
    
},
{
    type:'input', 
    name: 'managerNumber',
    message:'Please enter the Manager office number',    
    
},


])
.then(function(data){
    const name = data.managerName
    const id = data.managerID
    const email = data.managerEmail
    const officeNumber = data.managerNumber
    const teamMember = new Manager(managerName, managerID, managerEmail, managerNumber)completeTeam.push(teamMember)
})
addTeamMembers();
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type:'list',
            message:'Would you like to add team members',
            choices:['Engineer','Intern','Display Team'],
            name:'addMember',
        }

    ])
.then(function(data){

})
}

