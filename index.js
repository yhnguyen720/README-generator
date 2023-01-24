// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description for the project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage information.",
    },
    {
        type: "list",
        name: "license",
        message: "Choose the license(s) associated with project.",
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "Unlicense", "BSD 2-clause", "LGPLv3", "AGPLv3"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide names of any contributing members",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide any testing information",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
