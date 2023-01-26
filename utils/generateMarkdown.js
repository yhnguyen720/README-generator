function generateMarkdown(data) {
  return `

  # ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-blue)<br />

  ## Table of Contents:
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is covered by the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Find me on GitHub: [${data.github}](https://github.com/${data.github})<br />
  Email me with any questions: ${data.email}<br /><br />
`;
}

module.exports = generateMarkdown;
