var currentNumberWrapper = document.getElementById("currentNumber");
var currentCountZeroWrapper = document.getElementById("countZero");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber;
    currentCountZeroWrapper.innerHTML = ""
}

function decrement(){
    if (currentNumber > 0){
        currentNumber = currentNumber - 1
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        currentCountZeroWrapper.innerHTML = "Atenção, Contador Zerado!"
    }

}