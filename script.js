
const allBtns = document.getElementById('all-btns');
const currentDisplay = document.getElementById('currentInput');
const prevDisplay = document.getElementById('prevInput');

var inputnumber = '';
var operator ;



allBtns.addEventListener('click', function(e){
    const btn = e.target;

    if(btn.classList.contains('number')) {
        if(btn.innerText === '.' && currentDisplay.innerHTML.includes('.')){
            return
        }
        inputnumber = inputnumber.toString() + btn.innerText.toString();
        currentDisplay.innerHTML = inputnumber;
    }
    if(btn.classList.contains('operator')) {
        prevDisplay.innerHTML = currentDisplay.innerHTML + btn.innerText;
        currentDisplay.innerHTML = '';
        inputnumber = '';
    }
    if(btn.classList.contains('remove')) {
        currentDisplay.innerHTML = '';
        prevDisplay.innerHTML = '';
        inputnumber = '';
        operator = '';
    }
    if(btn.classList.contains('delete')) {
        inputnumber = inputnumber.toString().slice(0, -1);
        currentDisplay.innerHTML = inputnumber;
    }
    if(btn.classList.contains('result')) {
        calculation();
    }
});


function calculation(){
    var prevInput = parseFloat(prevDisplay.innerHTML);
    var currentInput = parseFloat(currentDisplay.innerHTML);
    operator = prevDisplay.innerHTML.slice(-1);
    
    

    switch(operator){
        case '+':
            var result = prevInput + currentInput;
            prevDisplay.innerHTML = prevDisplay.innerHTML + currentDisplay.innerHTML;
            break;

        case '-':
            var result = prevInput - currentInput;
            prevDisplay.innerHTML = prevDisplay.innerHTML + currentDisplay.innerHTML;
            break;

        case '÷':
            var result = prevInput / currentInput;
            prevDisplay.innerHTML = prevDisplay.innerHTML + currentDisplay.innerHTML;
            break;

        case '×':
            var result = prevInput * currentInput;
            prevDisplay.innerHTML = prevDisplay.innerHTML + currentDisplay.innerHTML;
            break;

        default:
            return
    }
    currentDisplay.innerHTML = result;
    
        
}

// console.log(display.innerHTML.length)