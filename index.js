// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./util/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type:  'input',
    name: 'title',
    message: 'What is the Title of your Project?'
},
{
    type:  'input',
    name: 'describe',
    message: 'How do you Describe your of your Project?'
},
{
    type:  'input',
    name: 'installation',
    message: 'How do you Install of your Application?'
},
{
    type:  'input',
    name: 'Usage',
    message: 'How do you Use your Application?'
},
{
    type:  'input',
    name: 'license',
    message: 'What license do you have on your Application?'
},
{
    type:  'input',
    name: 'contribute',
    message: 'How do you Contribute to your Application?'
},
{
    type:  'input',
    name: 'tests',
    message: 'How do you Test your Application?'
},
{
    type:  'input',
    name: 'github',
    message: 'What is your Github Name?'
},
{
    type:  'input',
    name: 'url',
    message: 'What is the URL for your Github Repo?'
},
{
    type:  'input',
    name: 'contact',
    message: 'How can you be Contacted?'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeToFile(README.md, generate);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
    });
}

// Function call to initialize app
init();
