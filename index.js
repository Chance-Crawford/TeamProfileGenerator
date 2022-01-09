
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/html-template')

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



function promptEngineer(){
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



function promptIntern(){
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



function copyStyleFile(){
  fs.copyFile('./src/style.css', './dist/style.css', err =>{
    if (err){
      throw err;
    }

    // if success
    console.log('Stylesheet copied over!');
  });
}



function writeFile(pageHtml){
    fs.writeFile('./dist/index.html', pageHtml, err =>{
      if (err){
        throw err;
      }

      // success case
      console.log('File created in "dist" folder!');
      
    });

    copyStyleFile();
}


function makeManager(managerInfo){
    const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
    promptEmployees(manager);
}

function promptEmployees(manager){

    if(!manager.employeeArr){
        manager.employeeArr = [];
    }

    inquirer.prompt({
        type: 'list',
        name: 'employee',
        message: 'Choose another employee you would like to add: ',
        choices: ['Engineer', 'Intern', "None, I'm finished"]
    })
    .then(({employee}) =>{
        if(employee == "Engineer"){
            promptEngineer()
            .then(engineerInfo => {
                const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
                manager.employeeArr.push(engineer);
                console.log(manager);
                promptEmployees(manager);
            })
        }
        else if(employee == "Intern"){
            promptIntern()
            .then(internInfo => {
              const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
                manager.employeeArr.push(intern);
                console.log(manager);
                promptEmployees(manager);
            })
        }
        else{
            return writeFile(generatePage(manager));
        }
        
    });

}


promptManager()
.then(makeManager)
.catch(err => {
    console.log(err);
});