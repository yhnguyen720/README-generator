//required dependencies

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

//array of questions for inquirer
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
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "Unlicensed"]
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

//function to generate readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        } else {
            return console.log("File written successfully.")
        }
    });
}

//function to initialize application
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data));
        writeToFile("./sample/README.md", data);
    });
}


init();