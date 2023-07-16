// Inquirer packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Imports classes from shapes.js
const Shapes = require('./lib/shapes');
const {Shape, Triangle, Square, Circle} = require('./lib/shapes.js');

const questions = ([
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
])

// Function to write svg file
function writeToFile (fileName, answers) {
    let svgContainer = "";

    // Create Shape Parameters
    let shapeOptions;
    if (answers.shape === "Circle") {
        const circle = new Circle();
        circle.changeColor(answers.shapeColor)
        svgContainer = `
            <svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
            ${circle.render()} 
            <text x="150" y="130" text-anchor="middle" font-size="30" fill="${answers.textColor}">${answers.text}</text>
            </svg>`;

    } if (answers.shape === "Triangle") {
        const triangle = new Triangle();
        triangle.changeColor(answers.shapeColor)
        svgContainer = `
            <svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
            ${triangle.render()} 
            <text x="150" y="130" text-anchor="middle" font-size="30" fill="${answers.textColor}">${answers.text}</text>
            </svg>`;

    } if (answers.shape === "Square") {
        const square = new Square();
        square.changeColor(answers.shapeColor)
        svgContainer = `
        <svg version="1.1" width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
            ${square.render()} 
            <text x="150" y="130" text-anchor="middle" font-size="30" fill="${answers.textColor}">${answers.text}</text>
            </svg>`;
    }
    fs.writeFile(fileName, svgContainer, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
      });
};

// Function to initialize app
function init() {
  console.log('Welcome to My Logo Generator!\nPlease answer a few quick questions to generate your very own logo!');

  inquirer.prompt(questions)
  .then((answers) => {
    // Error if logo text is more than 3 character
    if (answers.text.length > 3) {
        console.log("Please no more than 3 characters for your text!");
        init();
    } else {
    writeToFile('logo.svg', answers);
    }
 });
};

init ();