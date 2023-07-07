//Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'Please enter a description: ',
    name: 'description',
},
{
    type: 'input',
    message: 'Please enter install instructions: ',
    name: 'installation',
},
{
    type: 'input',
    message: 'Please enter usage information: ',
    name: 'usage',
},
{
    type: 'input',
    message: 'Please enter contribution guidelines: ',
    name: 'contributing',
},
{
    type: 'input',
    message: 'Please enter test instructions: ',
    name: 'tests',
},
{
    type: 'list',
    message: 'Add a license?',
    choices: ["None", "MIT", "Apache 2.0", "GNU GPLv3"],
    name: 'license',
},
{
    type: 'input',
    message: 'Please enter your GitHub username: ',
    name: 'username',
},
{
    type: 'input',
    message: 'Please enter your contact email: ',
    name: 'email',
}];

// function to generate markup text and write README file
function writeToFile(fileName, data) {
    var markdownText = generateMarkdown(data);
    fs.writeFile(fileName, markdownText, function (error) { if (error) { throw error } });
}

//initial function to gather user input with inquirer
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        var fileName = "README.md";
        writeToFile(fileName, data);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
            console.log(error);
        };
    });
 }

// Function call to initialize app
init();
