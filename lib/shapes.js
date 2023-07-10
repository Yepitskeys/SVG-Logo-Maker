class Shape {
    constructor () {
    this.color = "";
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render () {
        return `<square x="73" y="40" width="160" height="160" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`
    }
}
// Export classes

module.exports = {Shape, Triangle, Square, Circle};