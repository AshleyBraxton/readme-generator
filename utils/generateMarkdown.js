var index = require('../index.js')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return "";
  }else {
   return '(https://img.shields.io/badge/License-'+ license +'-lightgrey.svg)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license){
    return "";
  }else{
    return '[(https://img.shields.io/badge/License-'+ license +'-lightgrey.svg)](https://opensource.org/licenses/'+ license + ' )'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return '';
  }else {
    return "Read more about the license here: "
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Useage](#usage)
  *[How to Contribute](#how-to-contribute)
  *[Tests](#tests)
  *[License](license)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.useage}

  ## How to Contibute
  ${data.contributing}

  ## Tests
  ${data.test}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.licnese)}
`;
}

module.exports = generateMarkdown;
