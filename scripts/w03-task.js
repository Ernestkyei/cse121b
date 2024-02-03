/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(num1, num2){
    return num1 + num2;
}

function addNumbers(){
    const num1 = parseInt(document.getElementById("add1").value);
    const num2 = parseInt(document.querySelector("#add2").value);
    const sum = add(num1,  num2);

    const total = document.getElementById("sum")
    total.value = sum;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

function subtract(num1, num2){
    return num1 - num2;
}


function subtractNumbers(){
    const num1 = parseInt( document.getElementById("subtract1").value);
    const num2 = parseInt( document.querySelector("#subtract2").value);
    const difference = subtract(num1, num2);

        const differences = document.getElementById("difference");
            differences.value = difference;

}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

const products = (num1, num2) =>num1 * num2;

const multipyNumbers = () =>{
        const num1 = parseInt(document.getElementById("factor1").value);
        const num2 = parseInt(document.querySelector("#factor2").value);
        const product = products(num1,num2);

        const result = document.getElementById("product");
            result.value = product;
}

document.getElementById("multiplyNumbers").addEventListener("click", multipyNumbers);

/* Open Function Use - Divide Numbers */

function divide(num1, num2){
    return num1 / num2;
}


function divideNumbers(){
    const num1 = document.getElementById("dividend").value;
    const num2 = document.querySelector("#divisor").value;
    const quotient = divide(num1,num2);

    const result = document.getElementById("quotient");
    result.value= quotient;

}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);



/* Decision Structure */
document.addEventListener("DOMContentLoaded", function () {
    
    const subtotalInput = document.getElementById("subtotal");
    const memberCheckbox = document.getElementById("member");
    const getTotalButton = document.getElementById("getTotal");
    const totalSpan = document.getElementById("total");

    
    getTotalButton.addEventListener("click", calculateTotal);
    
    function calculateTotal() {
        const subtotal = parseFloat(subtotalInput.value) || 0;
    const isMember = memberCheckbox.checked;

        let totalDue;

        if (subtotal >= 0) {
            if (isMember) {
        
                totalDue = subtotal * 0.9;
            } else {
                totalDue = subtotal;
            }

          
            totalSpan.textContent = `$${totalDue.toFixed(2)}`;
        } else {
          
            alert("Please enter a valid subtotal amount.");
        }
    }
});





/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const sourceArray = Array.from({ length: 13 }, (_, index) => index + 1);
document.getElementById("array").innerHTML=sourceArray;

/* Output Odds Only Array */
const oddNumbers = sourceArray.filter(num =>num % 2 !==0);
document.getElementById("odds").innerHTML = oddNumbers;

/* Output Evens Only Array */
const evenNumber = sourceArray.filter(num => num % 2 ===0);
document.getElementById("evens").innerHTML=evenNumber;

/* Output Sum of Org. Array */
const sumOfSourceArray = sourceArray.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfArray").innerHTML=sumOfSourceArray;


/* Output Multiplied by 2 Array */
const sourceArrayTimesTwo = sourceArray.map(num => num * 2);
document.getElementById("multiplied").innerText = sourceArrayTimesTwo;

/* Output Sum of Multiplied by 2 Array */
const sumOfSourceArrayTimesTwo = sourceArrayTimesTwo.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfMultiplied").innerText = sumOfSourceArrayTimesTwo;