// Init vars
// ----------------------
let a = '';
let b = '';
let operator = '';
let displayValue = "0";
let recentOperator = false;
// ----------------------

// Initialize display
let display = document.querySelector(".display")
display.innerHTML = displayValue

// 'Clear' button
let clearButton = document.querySelector(".C")
clearButton.addEventListener("click", clear)

// Update display with numpad
let numButtons = document.querySelectorAll(".button.number")
let numButtonsArray = Array.from(numButtons)
for (let button of numButtonsArray) {
    button.addEventListener("click", function(e) {
        if (e.target.matches(".number")) {
            // If operator was the last button pressed, init_display
            if (recentOperator) {
                init_display();
                recentOperator = false;
            };
            // If displayValue is 0, don't show leading 0
            if (Number(displayValue) === 0) {
                displayValue = e.target.innerHTML;
            } else {
                // Append value of pressed button to displayValue
                displayValue += e.target.innerHTML;
            };
            // Populate value in html
            display.innerHTML = displayValue;
        };
    });
};

let opButtons = document.querySelectorAll(".button.operator")
let opButtonsArray = Array.from(opButtons)
for (let button of opButtonsArray) {
    button.addEventListener("click", function(e) {
        if (e.target.matches(".operator")) {
            if (a != '') {
                b = displayValue;
                displayValue = operate(a, b, operator);
                display.innerHTML = displayValue;
                a = displayValue;
                b = '';
            }

            operator = e.target.innerHTML;

            if (recentOperator != true) {
                a = displayValue;
            };

            recentOperator = true;
        }
    });
};

// Function definitions:
// ----------------------

function add(a, b) {
    return Number(a) + Number(b);
};

function subtract(a, b) {
    return Number(a) - Number(b);
};

function multiply(a, b) {
    return Number(a) * Number(b);
};

function divide(a, b) {
    return Number(a) / Number(b);
};

function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "x") {
        return multiply(a, b);
    } else if (operator === "%") {
        return divide(a, b);
    } else {
        return 0;
        alert("Invalid operator!")
    };

}

function init_display() {
    displayValue = 0;
    display.innerHTML = displayValue;
}

function clear() {
    displayValue = 0;
    display.innerHTML = displayValue;
    a = '';
    b = '';
    operator = '';
    recentOperator = false;
}


