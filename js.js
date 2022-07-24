const numbers = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('#decimal');
const equal = document.querySelector('.equal');
const ac = document.querySelector('.ac');
const back = document.querySelector('.back');

let calc = {
    current: '',
    saved: '',
    symbol: '',
    first: true,
    onOperator: false,
}

//click on number
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        calc.onOperator = false;
        calc.current += number.textContent;
        display.textContent = calc.current;
    })
})

//click on decimal
decimal.addEventListener('click', (e) => {
    calc.current += '.';
    display.textContent = calc.current;
}, {once: true})

//click on operator
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        if(calc.onOperator) {
            return;
        }
        calc.onOperator = true;
        if(calc.first){
            calc.symbol = e.target.textContent;
            calc.saved = calc.current;
            calc.current = '';
            display.textContent = e.target.textContent;
            calc.first = false;
            console.log(e.target.textContent);
        } else {
        performEqual();
        calc.symbol = e.target.textContent;
    }
        
    })
})

//click on equal
equal.addEventListener('click', () => {
    if(calc.first) {
        return;
    }
    performEqual();
    calc.first = true;
    calc.current = '';
    calc.saved = '';
    calc.symbol = '';
})

//click on ac
ac.addEventListener('click', () => {
    calc.first = true;
    calc.current = '';
    calc.saved = '';
    calc.symbol = '';
    display.textContent = '';
})

//click on back
back.addEventListener('click', () => {
    if(typeof(Number(display.textContent)) === 'number') {
        const shortCurrent = calc.current.slice(0,calc.current.length-1);
        calc.current = shortCurrent;
        display.textContent = calc.current;
    }
})

//calculate and display
const performEqual = function() {

    //if is not first time, operate on the saved and current number, and then save that number to get a new one
    //if press equal, will compute and save the number and display it, and the symbol will reset to nothing
    //if press another operator, will compute the number, update the new symbol and wait for new number
    switch(calc.symbol) {
        case '+':
            calc.saved = Number(calc.saved) + Number(calc.current);
            display.textContent = calc.saved;
            calc.current = '';
            break;
        case '-':
            calc.saved = Number(calc.saved) - Number(calc.current);
            display.textContent = calc.saved;
            calc.current = '';
            break;
        case 'x':
            calc.saved = Number(calc.saved) * Number(calc.current);
            display.textContent = calc.saved;
            calc.current = '';
            break;
        case '/':
            calc.saved = Number(calc.saved) / Number(calc.current);
            display.textContent = calc.saved;
            calc.current = '';
            break;
    }
    calc.first = false;

}