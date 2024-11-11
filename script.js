function add(a, b) {
    const result = a + b;
    return result;
}

function subtract(a, b) {
    const result = a - b;
    return result;
}

function multiply(a, b) {
    const result = a * b;
    return result;
}

function divide(a, b) {
    const result = a / b;
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
};

const plus = document.getElementById("add");
const minus = document.getElementById("subtract");
const times = document.getElementById("multiply");
const division = document.getElementById("divide");
const display = document.getElementsByClassName("display")
//when you click a number
//empty display
//populate display with number
const numbtns = document.querySelectorAll('.num')

numbtns.forEach(btn => {
    btn.addEventListener('click', function(){
        display[0].textContent = btn.id;
    })
})