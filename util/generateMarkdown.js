// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge = ' ';
    const licenseAnswer =data.license [0];
    if (licenseAnswer === 'Eclipse') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]'
    }
    if (licenseAnswer === 'Apache') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
  }
     if (licenseAnswer === 'MIT') {
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
     if (licenseAnswer === 'GNU') {
        licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  }
    else {
        licenseBadge = ' ';
  }
}  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    const licenseAnswer =data.license [0];
    if (licenseAnswer === 'Eclipse') {
        licenseLink = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]'
    }
    if (licenseAnswer === 'Apache') {
        licenseLink = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
  }
     if (licenseAnswer === 'MIT') {
        licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
     if (licenseAnswer === 'GNU') {
        licenseLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  }
    else {
        licenseLink = ' ';
  }

  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
      return renderLicenseBadge(license), renderLicenseLink(license)

  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(answers) {
    return `
    ## What is the Title of your Project?
    # ${answers.title}

    # ${answers.contribute}
    # ${answers.tests}
    # ${answers.github}
    # ${answers.url}
    # ${answers.questions}
  
# Table of Contents
    1.  [Description] (#describe)
    2.  [Installatin] (#install)
    3.  [Usage] (#usage)
    4.  [License] (#license)
    5.  [Contribution] (#contribute)
    6.  [Tests] (#tests)
    7.  [Github] (#github)
    8.  [Url] (#url)
    9.  [Questions] (#questions)

## Describe your Project:
# ${answers.describe}

## How do you Install your Application?
# ${answers.installation}

## How do you use your Application?
# ${answers.usage}

## Do you have a license for your Application?
# ${answers.license}
  `;
  }

  module.exports = generateMarkdown
