//Import Shapes constructor
const Shapes = require('../shapes.js');

//Shape testing suite
describe('Shapes', () => {
    //Triangle testing suite
    describe('Test for triangle class', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

    });


    //Square Class testing suite
    describe('Test for square class', () => {
        const shape = new Square();
        shape.setColor("indigo");
        expect(shape.render()).toEqual('<square x="73" y="40" width="160" height="160" fill="indigo" />');

    });


    //Circle Class testing suite
    describe('Test for circle class', () => {
        const shape = new Triangle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="yellow" />');

    });
});
