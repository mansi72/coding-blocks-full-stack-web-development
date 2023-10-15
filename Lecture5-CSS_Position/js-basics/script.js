console.log("Hello")

console.log(alpha())

// this will give error bcs beta is not defined yet arrow functon order matters
// console.log(beta()) 

function alpha() {
    return "A"
}

let beta = () => {
    return "B"
}

console.log(alpha())
console.log(beta())


function area(height, width) {
    if (!width) { // undefined is false 
        return Math.PI * height * height
    }
    return height * width
}

//polymorphism in js: can't define same function twice
console.log('area 3,4 : ', area(3, 4))
console.log('area 4', area(4))

function hello(x) {
    //arguments have all the arguments passed to function
    // let arguments = "mansi" // don't do this 
    console.log("hello " + arguments[0] + arguments[1]);
}

hello("mansi", "garg");