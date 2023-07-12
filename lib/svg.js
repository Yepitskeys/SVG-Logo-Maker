class svg {
    constructor() {
    }
   text (color, text){
    if (answers.text.length > 3) {
        console.log("Please no more than 3 characters for your text!");
        questions();
    } else {
        writeToFile('logo.svg', answers);
    }
}};