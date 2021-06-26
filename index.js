// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./util/generateMarkdown');

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
    name: 'usage',
    message: 'How do you Use your Application?'
},
{
    type:  'checkbox',
    name: 'license',
    message: 'What License do you have on your Application?',
    choices: ['Eclipse', 'Apache', 'GNU', 'MIT', ' ']
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
    name: 'questions',
    message: 'For Questions how can you be contacted?'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(fileName, data);
}
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((answers) => {
writeToFile('README.md',  generateMarkdown(answers));
});
}

// Function call to initialize app
init();
