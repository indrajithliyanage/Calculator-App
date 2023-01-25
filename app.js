let output = document.querySelector('.cal-output');
let num1;
let num2;

function add() {
    if (tryParse()) {
        output.innerHTML = "SUM: " + (num1 + num2);
    }
}

function sub() {
    if (tryParse()) {
        output.innerHTML = "Substract: " + (num1 - num2);
    }
}

function div() {
    if (tryParse()) {
        output.innerHTML = "Divide: " + (num1 / num2);
    }
}


function mul() {
    if (tryParse()) {
        output.innerHTML = "Multiply: " + (num1 * num2);
    }
}

function tryParse() {
    var num1Val = document.getElementById('num1').value;
    var num2Val = document.getElementById('num2').value;
    num1 = parseInt(num1Val);
    num2 = parseInt(num2Val);
    if (typeof(num1) != "number" || typeof(num2) != "number") {
        output.innerHTML = "Please enter a valid Number!";
        return false;
    }
    return true;
}