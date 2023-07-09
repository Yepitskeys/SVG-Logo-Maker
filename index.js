// Inquirer packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
      type: 'input',
      message: 'Please enter the text you would like to add to your logo!',
      name: 'text',
    },
    {
        type: 'checkbox',
        message: 'What color would you like to make your text?',
        name: 'color',
        choices: [
            {name: 'white', value: 'white'},
            {name: 'black', value: 'black'},
            {name: 'red', value: 'red'},
            {name: 'orange', value: 'orange'},
            {name: 'yellow', value: 'yellow'},
            {name: 'green', value: 'green'},
            {name: 'blue', value: 'blue'},
            {name: 'indigo', value: 'indigo'},
            {name: 'violet', value: 'violet'},
        ]
      },
      {
        type: 'checkbox',
        message: 'What shape would you like for your logo?',
        name: 'shape',
        choices: [
            {name: 'circle', value: 'circle'},
            {name: 'triangle', value: 'triangle'},
            {name: 'square', value: 'square'},
        ]
      },
];

// Function to write svg file
function writeToSVG ()

// Function to initialize app
function init() {
  console.log('Welcome to My Logo Generator!\nPlease answer a few quick questions to generate your very own logo!');

  inquirer.prompt(questions)
  .then( {
      writeToFile
  })

};