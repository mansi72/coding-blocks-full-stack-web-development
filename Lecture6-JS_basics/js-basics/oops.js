
// 1. using objects
let apple = {
    taste: "sweet",
    color: "red"
}
console.log("Apple: ",apple);

// 2. using function

function Fruit(color, taste) {
    this.color = color;
    this.taste = taste;
}

let mango = new Fruit("yellow", "sweet");
console.log("Mango: ", mango);

//3. using class keyword : class decration
class FruitClass{
    constructor(color, taste) {
        this.color = color;
        this.taste = taste;
    }
}

let orage = new FruitClass("orange", "sour");
console.log("Orange: ", orage);


//4. using class keyword : class expression
const FruitClass2 = class {
    constructor(color, taste) {
        this.color = color;
        this.taste = taste;
    }
}

let kiwi = new FruitClass2("green", "sour");
console.log("Kiwi: ", kiwi);