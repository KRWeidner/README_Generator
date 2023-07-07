// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None") {
        return "";
    }
    return `![Static Badge](https://img.shields.io/badge/license-${license}-blue)`;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    //link in table of contents to bring you to license section
    if (license === "None") {
        return "";
    }
    return "[License](#license)";
 }

// Function that returns the license section of README - will call licenseLink function as part of section
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    }
    return `## License \n*Notice - Application is covered under license ${license}`;
 }

 function renderQuestionsSection(username,email) {
    return `For any questions use contact info:
    \nName: ${username} \n\nGitHub URL: [${username} Homepage](https://github.com/${username}) \n\nE-Mail: ${email}`;
 }

// function to generate markdown for README
function generateMarkdown(data) {
    var license = renderLicenseSection(data.license);
    var badge = renderLicenseBadge(data.license);
    var licenseLink = renderLicenseLink(data.license)
    var questionInfo = renderQuestionsSection(data.username,data.email)
    return `# ${data.title}
    \n${badge}
    \n## Description
    \n${data.description}
    \n## Table Of Contents 
    \n[Installation](#installation)
    \n[Usage](#usage)
    \n[Contributing](#contributing)
    \n[Tests](#tests)
    \n${licenseLink}
    \n[Questions](#questions)
    \n## Installation
    \n${data.installation}
    \n## Usage
    \n${data.usage}
    \n## Contributing
    \n${data.contributing}
    \n## Tests
    \n${data.tests}
    \n${license}
    \n## Questions
    \n${questionInfo}
`;
}

module.exports = generateMarkdown;