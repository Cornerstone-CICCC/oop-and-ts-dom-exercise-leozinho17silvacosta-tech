// CLASS:

class Calculator {
    #num1
    #num2

    constructor(num1, num2) {
        this.#num1 = num1;
        this.#num2 = num2;
    }

    setValues (num1, num2) {
        this.#num1 = num1;
        this.#num2 = num2;
    }

    add() {
        return this.#num1 + this.#num2
    }

    subtract() {
        return this.#num1 - this.#num2
    }

    multiply() {
        return this.#num1 * this.#num2
    }

    divide() {
        return this.#num1 / this.#num2
    }

    compute(operation) {
        if(operation === "add") {
            return this.add()
        } else if (operation === "subtract") {
            return this.subtract()
        } else if (operation === "multiply") {
            return this.multiply()
        } else {
            return this.divide()
        }     
    }
}

// CLICK FUNCTION

const num1Input = document.getElementById("num1")
const num2Input = document.getElementById("num2")
const operationSelector = document.getElementById("operation")
const calculateBtn = document.getElementById("calculateBtn")
const resultDisplay = document.getElementById("result")

const calculator = new Calculator(0, 0)

calculateBtn.addEventListener("click", function() {
    const num1 = Number(num1Input.value)
    const num2 = Number(num2Input.value)

    const operation = operationSelector.value

    calculator.setValues(num1, num2)

    const result = calculator.compute(operation)
    
    resultDisplay.textContent = result
})