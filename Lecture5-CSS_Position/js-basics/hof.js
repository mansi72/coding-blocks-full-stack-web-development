// high order function

function creategreeter(greeting) {
    function greet(name) {
        console.log(greeting,name)
    }
    return greet
}

let g1 = creategreeter("Good Morning")
let g2 = creategreeter("Good Evening")

function getName() {
    return document.getElementById('namebox').value
}

