add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;


let num1 = 0;
let op;
let num2 = 0;
const plus = document.getElementById("add");
const minus = document.getElementById("subtract");
const times = document.getElementById("multiply");
const division = document.getElementById("divide");
const display = document.getElementsByClassName("display")
const clear = document.getElementById("clear")

operate = (op, a, b) => {
    if(op = "+") {
        add(a, b)
    } else if(op = "-") {
        subtract(a, b)
    } else if(op = "*") {
        multiply(a, b)
    } else if(op = "/") {
        divide(a, b)
    }
};