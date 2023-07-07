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
    name: 'instructions',
},
{
    type: 'input',
    message: 'Please enter usage information: ',
    name: 'usage',
},
{
    type: 'input',
    message: 'Please enter contribution guidelines: ',
    name: 'guidelines',
},
{
    type: 'input',
    message: 'Please enter test instructions: ',
    name: 'test',
},
{
    type: 'list',
    message: 'Add a license?',
    choices: ["None", "2"],
    name: 'license',
}];

inquirer
    .prompt(questions)
    .then((response) => {
        //fs.writeFile('data.txt',JSON.stringify(response), (error) => {error ? console.log(error) : console.log("Success!")} );
        console.log(response)
        //write to data object and pass to writetofile
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        };
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var markdownText = generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
