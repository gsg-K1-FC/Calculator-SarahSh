let buttons = document.querySelector(".buttons")
const numbers={
    displayNumber : "0",
};
function updateDisplay(){
    let Calcdisplay = document.querySelector(".display");
    Calcdisplay.value = numbers.displayNumber; 
    
};
buttons.addEventListener("click",(event)=>{
    const {target} = event ;
    numbers.displayNumber= target.innerText;
    updateDisplay();
});
function operator(firstNo,secondNo,opperation){

}
const calculator = {
    displayNumber: '0',
    firstNum: null,
    waitingForSecondOperand: false,
    operator: null,
};
function inputDigit(digit){
    if (calculator. waitingForSecondOperand === true){
        calculator.displayNumber = digit;
        calculator.waitingForSecondOperand = false;
    } else if(Calcdisplay.value.length<15){
        calculator.displayNumber = (displayNumber === '0') ? digit : displayNumber+digit;
    }else 
    return false;
}
function handleOperator(nextOperator){
    
}
buttons.addEventListener("click", (event) => {
    const{target}=event;
    if(target.classList.contains("operator")){
        handleOperator(target.innerText);
        updateDisplay();
    }
    if (target.classList.contains("clear")){
        return;
    }
    inputDigit(target.innerText)
    updateDisplay();
});