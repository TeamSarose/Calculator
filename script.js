let currentInput = "";         // Defining Default value
let currentOperator = "";
let previousValue = null;

function updateDisplay() {
    const display = document.querySelector(".display");
    display.value = currentInput !== "" ? currentInput : "0";
}

function clearDisplay() {
    currentInput = "";
    currentOperator = "";
    previousValue = null;
    updateDisplay();
}

function toggleSign() {
    if (currentInput !== "") {
        currentInput = String(-parseFloat(currentInput));
        updateDisplay();
        }
    }

function percentage() {
    if (currentInput !== "") {
        currentInput = String(parseFloat(currentInput) / 100);
        updateDisplay();
        }
    }

function appendNumber(num) {
    if (currentInput === "0" || currentInput === "-0") {
        currentInput = String(num);
        } else {
            currentInput += String(num);
            }
            updateDisplay();
        }

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
        }
    }

function appendOperator(operator) {
    if (currentInput !== "") {
        if (previousValue !== null) {
            calculateResult();
            }
            previousValue = currentInput;
            currentInput = "";
            currentOperator = operator;
            } else if (previousValue !== null) {
                currentOperator = operator;
            }
        }

function calculateResult() {
    if (previousValue !== null && currentInput !== "") {
        switch (currentOperator) {
            case "+":
                currentInput = String(parseFloat(previousValue) + parseFloat(currentInput));
                break;
                case "-":
                    currentInput = String(parseFloat(previousValue) - parseFloat(currentInput));
                    break;
                    case "*":
                        currentInput = String(parseFloat(previousValue) * parseFloat(currentInput));
                        break;
                        case "/":
                        if (parseFloat(currentInput) !== 0) {
                            currentInput = String(parseFloat(previousValue) / parseFloat(currentInput));
                        } else {
                            currentInput = "Error";
                        }
                        break;
                }
                previousValue = null;
                currentOperator = "";
                updateDisplay();
            }
        }