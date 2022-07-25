
const allBtns = document.getElementById('all-btns');
const currentDisplay = document.getElementById('currentInput');
const prevDisplay = document.getElementById('prevInput');

var inputnumber = '';
var operator ;



allBtns.addEventListener('click', function(e){
    const btn = e.target;

    // number buttons event 
    if(btn.classList.contains('number')) {
        if(btn.innerText === '.' && currentDisplay.innerHTML.includes('.')){
            return
        }
        inputnumber = inputnumber.toString() + btn.innerText.toString();
        currentDisplay.innerHTML = inputnumber;
    }


    // operator button event
    if(btn.classList.contains('operator')) {
        if(!prevDisplay.innerHTML){
            prevDisplay.innerHTML = currentDisplay.innerHTML + btn.innerText;
            currentDisplay.innerHTML = '';
            inputnumber = '';
        }
        else{
            calculation();
            prevDisplay.innerHTML = currentDisplay.innerHTML + btn.innerText;
            currentDisplay.innerHTML = '';
            inputnumber = '';
        }
    }


    // all delete button event
    if(btn.classList.contains('remove')) {
        currentDisplay.innerHTML = '';
        prevDisplay.innerHTML = '';
        inputnumber = '';
        operator = '';
    }

    // single delete button
    if(btn.classList.contains('delete')) {
        inputnumber = inputnumber.toString().slice(0, -1);
        currentDisplay.innerHTML = inputnumber;
    }


    // result or equal buuton
    if(btn.classList.contains('result')) {
        calculation();
    }
});



// calculation functionality
function calculation(){
    var prevInput = parseFloat(prevDisplay.innerHTML);
    console.log(prevInput)
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