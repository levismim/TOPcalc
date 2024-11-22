add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
function divide(a, b) { 
    if (b == 0) {
        result = "nope";
    } else {
        result = a / b;
    } return result;
    };

let result = '';
let num1 = '';
let operator = undefined;
let num2 = '';
const display = document.getElementsByClassName("display");
const clear = document.getElementById("clear");

operate = (op, a, b) => {
        if(op == "+") {
            result = add(a, b);
            return result;
        } else if(op == "-") {
            result = subtract(a, b)
            return result;
        } else if(op == "*") {
            result = multiply(a, b)
            return result;
        } else if(op == "/") {
            result = divide(a, b)
            return result;
        }
};

clear.addEventListener("click", function() {
    display[0].textContent = ''
    num1 = '';
    num2 = '';
    operator = undefined;
});

const numbtns = document.querySelectorAll('.num');

numbtns.forEach(btn => {
    btn.addEventListener('click', function input(){
        if(operator === undefined) {
            let firstNum = parseInt(num1 += btn.id);
            display[0].textContent = firstNum;
            num1 = firstNum;
            console.log(num1)
            return num1;    
        } else {
            let nextNum = parseInt(num2 += btn.id);
            display[0].textContent = nextNum;
            num2 = nextNum;
            console.log(num2)
            return num2;    
    }
    })
    });

const ops = document.querySelectorAll('.op');

ops.forEach(op => {
    op.addEventListener('click', function input(){
        operator = op.id;
        display[0].textContent = operator;
        console.log(operator);
        return operator;
    })
    });

const equals = document.getElementById("equal");


equals.addEventListener('click', function finalResult() {
    display[0].textContent = '';
    operate(operator, num1, num2);
        if (result % 1 !== 0) {
            display[0].textContent = result.toFixed(10);
        } else {
            display[0].textContent = result
        }
    num1 = result;
    num2 = '';
    });