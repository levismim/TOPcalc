function add(a, b) {
    let result = a + b;
    return result;
}

function subtract(a, b) {
    let result = a - b;
    return result;
}

function multiply(a, b) {
    let result = a * b;
    return result;
}

function divide(a, b) {
    let result = a / b;
    return result;
}

let num1;
let op;
let num2;

function operate(op, a, b) {
    if(op = "+") {
        add(a, b)
    } else if(op = "-") {
        subtract(a, b)
    } else if(op = "*") {
        multiply(a, b)
    } else if(op = "/") {
        divide(a, b)
    }
}