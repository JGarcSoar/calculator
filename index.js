// CALCULATOR PROGRAM

const display = document.getElementById("display")
const clear = document.getElementById("clear")


function appendToDisplay(input){

    display.value += input;

    if(input !== ""){
        clear.textContent = "C";
    }
}

function signalConverter(){
    
    if(display.value > 0 || display.value < 0){
        display.value = display.value * (-1)
    }
}

function clearDisplay(){

    display.value = "";
    clear.textContent = "AC"
}

function calculate(){

    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}