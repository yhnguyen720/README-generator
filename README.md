# README Generator

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Demonstration](#demonstration)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

```md
When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.
```

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation

```md
Initiliaze repository with `package.json` file by running `npm init -y`.
Install inquirer and add to list of dependencies by running `npm i inquirer@8.2.4`. 
```

## Usage

```md
The application will be invoked by using the following command:
`node index.js`
Answer the prompted questions to generate the README file based on your input.
```

## Demonstration 

[Video Link](https://drive.google.com/file/d/1K_KRsrEw6pNNgyqj7faADdx7FL3NaXzj/view)

See the README.md file in the sample folder for an example of a generated readme file. 


## Contributing

[Yen Nguyen](https://github.com/yhnguyen720)


## Questions

Contact me with any questions: [email](yhnguyen720@gmail.com)