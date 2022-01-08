
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');

const fs = require('fs');


function promptManager(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Hello team manager, please enter your name: ',
            validate: nameInput =>{
                if(nameInput){
                  return true;
                }
                else{
                  console.log("Please enter your name");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your employee ID: ',
            validate: input =>{
                if(input){
                  return true;
                }
                else{
                  console.log("Please enter your ID");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address: ',
            validate: input =>{
                if(input){
                  return true;
                }
                else{
                  console.log("Please enter your email");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your office number: ',
            validate: input =>{
                if(input){
                  return true;
                }
                else{
                  console.log("Please enter your office number");
                  return false;
                }
            }
        }
    ]);
}



function promptEngineer(managerInfo){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the engineer: ',
            validate: nameInput =>{
                if(nameInput){
                  return true;
                }
                else{
                  console.log("Please enter a name");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID: ',
            validate: input =>{
                if(input){
                  return true;
                }
                else{
                  console.log("Please enter an ID");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address: ',
            validate: input =>{
                if(input){
                  return true;
                }
                else{
                  console.log("Please enter an email");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the GitHub username: ',
            validate: input =>{
                if(input){
                  return true;
                }
                else{
                  console.log("Please enter a GitHub username");
                  return false;
                }
            }
        }
    ]);
}



function promptIntern(managerInfo){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the intern: ',
            validate: nameInput =>{
                if(nameInput){
                  return true;
                }
                else{
                  console.log("Please enter a name");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the employee ID: ',
            validate: input =>{
                if(input){
                  return true;
                }
                else{
                  console.log("Please enter an ID");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address: ',
            validate: input =>{
                if(input){
                  return true;
                }
                else{
                  console.log("Please enter an email");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school: ",
            validate: input =>{
                if(input){
                  return true;
                }
                else{
                  console.log("Please enter the intern's school");
                  return false;
                }
            }
        }
    ]);
}


function promptEmployees(managerInfo){

    if(!managerInfo.employeeArr){
        managerInfo.employeeArr = [];
    }

    inquirer.prompt({
        type: 'list',
        name: 'employee',
        message: 'Choose another employee you would like to add: ',
        choices: ['Engineer', 'Intern', "None, I'm finished"]
    })
    .then(({employee}) =>{
        if(employee == "Engineer"){
            promptEngineer(managerInfo)
            .then(engineerInfo => {
                engineerInfo.role = 'engineer';
                managerInfo.employeeArr.push(engineerInfo);
                console.log(managerInfo);
                promptEmployees(managerInfo);
            })
        }
        else if(employee == "Intern"){
            promptIntern(managerInfo)
            .then(internInfo => {
                internInfo.role = 'intern';
                managerInfo.employeeArr.push(internInfo);
                console.log(managerInfo);
                promptEmployees(managerInfo);
            })
        }
        else{
            return managerInfo;
        }
        
    });

    



}

promptManager()
.then(managerInfo => {promptEmployees(managerInfo);})
.then(fullList => {console.log(fullList);});