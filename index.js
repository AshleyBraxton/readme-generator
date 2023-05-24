var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown.js');
var fs = require('fs');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
 questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe this project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation insructions for this project?',
    },
    {
        type: 'input',
        name: 'useage',
        message: 'How is this project used?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are he guidelines for contributing to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would someone test this porject?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is used for this project?',
        choices: ['MIT', 'Apache 2.0','GNU General Public License v3.0', 'BSD 2-Clause "simplified"','Boost Software Liscense 1.0'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
]

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.appendFile(`README.md`, data, 
    (err) => err ? console.error(err) : console.log(`README.md has been generated.`))
}


// TODO: Create a function to initialize app
async function init() {
  let data = await inquirer.prompt(questions);
   writeToFile((generateMarkdown(data)));
}

// Function call to initialize app
init();
