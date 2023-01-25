const questions = [
    {
    type:'input',
    name:'title',
    message:'What is your project title?',
    },
    {
    type:'input',
    name:'motivation',
    message:'What was your motivation?',
    },
    {
    type:'input',
    name:'purpose',
    message:'Why did you build this project?',
    },
    {
    type:'input',
    name:'problem',
    message:'What problem dose it solve?',
    },
    {
    type:'input',
    name:'learn',
    message:'What did you learn?',
    },
    {
    type:'input',
    name:'install',
    message:'What are the steps require to install your project?',
    },
    {
    type:'input',
    name:'instruction',
    message:'Please provide instruction and examples for use.',
    }, 
    {
    type:'input',
    name:'names',
    message:'Name your collaborators.',
    },
    {
    type:'input',
    name:'usernames',
    message:'What is their Github username.',
    },
    {
    type:'list',
    name:'license',
    message:'What license did you use?',
    choices: ['Apache', 'MIT','GNU','None'],
    },
    {
    type:'input',
    name:'feature',
    message:'What features does your project has?',
    },
];
module.exports = {questions};