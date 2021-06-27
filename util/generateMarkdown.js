// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
    let licenseBadge = ' ';
    const licenseAnswer = answers.license[0];
    if (licenseAnswer === 'Eclipse') {
        licenseBadge = ` [![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`
        return licenseBadge;
    };
    if (licenseAnswer === 'Apache') {
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
        return licenseBadge;
    };
    if (licenseAnswer === 'MIT') {
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
        return licenseBadge;
    };
    if (licenseAnswer === 'GNU') {
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
        return licenseBadge;
    }
    else {
        licenseBadge = ' ';
        return licenseBadge
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
    const licenseAnswer = answers.license[0];
    if (licenseAnswer === 'Eclipse') {
        licenseLink = `(https://opensource.org/licenses/EPL-1.0)`
        return licenseLink;
    }
    if (licenseAnswer === 'Apache') {
        licenseLink = `(https://opensource.org/licenses/Apache-2.0)`
        return licenseLink;
    }
    if (licenseAnswer === 'MIT') {
        licenseLink = `(https://opensource.org/licenses/MIT)`
        return licenseLink;
    }
    if (licenseAnswer === 'GNU') {
        licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
        return licenseLink;
    }
    else {
        licenseLink = ' ';
        return licenseLink;
    }
};

//   TODO: Create a function that returns the license section of README
//   If there is no license, return an empty string
  function renderLicenseSection(answers) {
      return `${renderLicenseBadge(answers)}, ${renderLicenseLink(answers)}`

  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return ` # ${answers.title}

## Table of Contents:
    *   [Description] (#describe)
    *   [Installatin] (#install)
    *   [Usage] (#usage)
    *   [License] (#license)
    *   [Contribution] (#contribute)
    *   [Tests] (#tests)
    *   [Github] (#github)
    *   [Url] (#url)
    *   [Questions] (#questions)



## Describe your Project:
${answers.describe}

## How do you Install your Application?
${answers.installation}

## How do you use your Application?
${answers.usage}

## Do you have a license for your Application?
# ${answers.license}
${renderLicenseSection(answers)}

## How do you Contribute to your Application?
${answers.contribute}

## How do you Test your Application?
${answers.tests}

## What is your Github Name?
${answers.github}

## What is the URL of your Github Repo?
${answers.url}

## For Questions how can you be contacted?
${answers.questions}

  `;
}

module.exports = generateMarkdown
