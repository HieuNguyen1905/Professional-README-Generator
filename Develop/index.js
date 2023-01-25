// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const {questions} = require('./Question');

inquirer
    .prompt(questions)
    .then((answers) => {
        fs.writeFile(`${answers.title}.md`,`
        # ${answers.title}
        
        ## Description
        
        - ${answers.motivation}
        - ${answers.purpose}
        - ${answers.problem}
        - ${answers.learn}

        ## Table of Contents

        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)

        ## Installation

        ${answers.install}

        ## Usage

        ${answers.instruction}

        ## Creadit

        ${answers.names}
        https://github.com/${answers.usernames}

        ## License 
        
        https://img.shields.io/badge/license-${answers.license}-green

        ## Feature

        ${answers.feature}
        `, err => err? console.log(err):'')
    })
    .then(()=>
        console.log('Your README has been created!'))
    .catch((err)=> console.log(err));


