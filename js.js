const numbers = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('#decimal');
//clicking number
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        calcProp.currentNumber += e.target.textContent
        display.textContent = calcProp.currentNumber;
    })
});

//clicking operator
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        calcProp.operator(e.target.textContent);
    })
})

//clicking decimal




let calcProp = {
    currentNumber: '',
    savedNumber: '',
    firstNumber: true,
    currentSymbol: '',
    operator: (symbol) => {
        display.textContent = symbol;
        if(calcProp.firstNumber) {
            calcProp.savedNumber = calcProp.currentNumber;
            calcProp.currentNumber = '';
            calcProp.firstNumber = false;
        } else {
            calcProp.calculate();
        }
        calcProp.currentSymbol = symbol;
        console.log(calcProp.savedNumber, calcProp.currentNumber, calcProp.currentSymbol);
        },
    calculate: () => {
        if(calcProp.currentSymbol === '+') {
            calcProp.savedNumber = Number(calcProp.savedNumber)+Number(calcProp.currentNumber);
            calcProp.currentNumber = ''
            display.textContent = calcProp.savedNumber
        } else if (calcProp.currentSymbol === '-') {
            calcProp.savedNumber = Number(calcProp.savedNumber)-Number(calcProp.currentNumber);
            calcProp.currentNumber = ''
            display.textContent = calcProp.savedNumber
        } else if (calcProp.currentSymbol === 'x') {
            calcProp.savedNumber = Number(calcProp.savedNumber)*Number(calcProp.currentNumber);
            calcProp.currentNumber = ''
            display.textContent = calcProp.savedNumber
        } else if (calcProp.currentSymbol === '/') {
            calcProp.savedNumber = Number(calcProp.savedNumber)/Number(calcProp.currentNumber);
            calcProp.currentNumber = ''
            display.textContent = calcProp.savedNumber
        }
    }
};