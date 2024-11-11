add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;


let num1;
let op;
let num2;
const plus = document.getElementById("add");
const minus = document.getElementById("subtract");
const times = document.getElementById("multiply");
const division = document.getElementById("divide");
const display = document.getElementsByClassName("display")
const clear = document.getElementById("clear")
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

clear.addEventListener("click", function() {
    display[0].textContent = " "
})
//when you click a number
//empty display
//populate display with number
//store number in a variable
const numbtns = document.querySelectorAll('.num')

numbtns.forEach(btn => {
    btn.addEventListener('click', function(){
    display[0].textContent = btn.id;
    let num = btn.id;
    return num;
    })
})