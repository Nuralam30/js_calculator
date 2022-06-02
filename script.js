
const allBtns = document.getElementById('all-btns');
const currentDisplay = document.getElementById('currentInput');
const prevDisplay = document.getElementById('prevInput');

var inputnumber = '';


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
        inputnumber = inputnumber + btn.innerText;
        prevDisplay.innerHTML = inputnumber;
        currentDisplay.innerHTML = '';
        inputnumber = '';
    }
    if(btn.classList.contains('remove')) {
        currentDisplay.innerHTML = '';
        prevDisplay.innerHTML = '';
        inputnumber = '';
    }
    if(btn.classList.contains('delete')) {
        inputnumber = inputnumber.toString().slice(0, -1);
        currentDisplay.innerHTML = inputnumber;
    }
    if(btn.classList.contains('result')) {
        const inputValue = currentDisplay.innerHTML; 
        var result = parseFloat(inputValue)
        // console.log(typeof(result))
    }
});


// console.log(display.innerHTML.length)