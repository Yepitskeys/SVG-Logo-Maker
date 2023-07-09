// Inquirer packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Imports classes from shapes.js
const Shapes = require('../shapes.js');

const questions = [
    {
      type: 'input',
      message: 'What text you would like to add to your logo? (Three characters max allowed)',
      name: 'text',
    },
    {
        type: 'checkbox',
        message: 'What color would you like to make your TEXT?',
        name: 'textColor',
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
        type: 'list',
        message: 'What shape would you like for your logo?',
        name: 'shape',
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: 'checkbox',
        message: 'What color would you like to make your SHAPE?',
        name: 'shapeColor',
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
]

// Error if logo text is more than 3 characters
.then((answers) => {
    if (answers.text.length > 3) {
        console.log("Please no more than 3 characters for your text!");
        questions();
    } else {
        writeToFile('logo.svg', answers);
    }
})

// Function to write svg file
function writeToFile () {
    let svgContainer = '';

    // Create Shape Parameters
    let shapeOptions;
    if (answers.shape === triangles)

}

// Function to initialize app
function init() {
  console.log('Welcome to My Logo Generator!\nPlease answer a few quick questions to generate your very own logo!');

  inquirer.prompt(questions)
  .then((answers) => {
      writeToFile('logo.svg', answers);
  })

};