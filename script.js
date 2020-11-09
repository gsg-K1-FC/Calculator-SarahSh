let buttons = document.querySelector(".buttons");
let calcDisplay = document.querySelector(".display");
const calculator = {
    firstNum: null,
    secondNum: null,
    operator: null,
};
function display(number){            
        calcDisplay.value = parseInt(calcDisplay.value + number);
}
function Operate(opp){
    if(calculator.firstNum===null){
        calculator.operator=null;
        return false;
        } 
    else if (calculator.operator === null || (calculator.operator!== null && calculator.secondNum===null))
        calculator.operator = opp;
    else if(calculator.operator!==null && calculator.secondNum!==null)
        {
            calculator.operator = opp;
            if(opp ==="+"){
                calculator.firstNum = Number(calculator.firstNum) + Number(calculator.secondNum);
            } else if(opp ==="-"){
                calculator.firstNum -= calculator.secondNum;
            } else if(opp ==="X"){
                calculator.firstNum *= calculator.secondNum;
            }else if(opp ==="/"){
                if(calculator.operator==="/" && calculator.secondNum==="0")
                    alert("Cannot divide by zero!!");
                else 
                    calculator.firstNum /= calculator.secondNum;
            }
            calculator.secondNum = null;
            calcDisplay.value = calculator.firstNum;
        } 
}
function equals(){
    if(calculator.firstNum!==null && calculator.secondNum!==null){
        Operate(calculator.operator)
        calculator.operator=null;
    }
    else if(calculator.operator!==null && calculator.secondNum ===null || calculator.firstNum===null)
        alert("ERROR!!");
    
}
function currencyConvert(currency){
    if(calculator.firstNum===null)
        return false;
    else if(calculator.secondNum !== null){
        equals();
        currencyConvert(currency);
    }
    else if (calculator.operator===null || (calculator.secondNum===null && calculator.operator!==null)){
        calculator.operator=null;
        if(currency ==="ILS/USD")
            calcDisplay.value = calculator.firstNum *= 0.29550;
        else if(currency ==="USD/ILS")
            calcDisplay.value = calculator.firstNum *= 3.36476;
        else if(currency ==="ILS/EUR")
            calcDisplay.value = calculator.firstNum *= 0.24880;
        else if(currency ==="EUR/ILS")
            calcDisplay.value = calculator.firstNum *= 3.99493;
    }
}
buttons.addEventListener("click", (event) => {
    const{target}=event;
    if(target.classList.contains("num-btn") || target.id=="zero"){
        if(calcDisplay.value.length<14){
            if (calculator.secondNum !== null ){
                display(target.innerText);
                calculator.secondNum =calcDisplay.value;
            } else if (calculator.operator !== null && calculator.secondNum===null){
                calcDisplay.value=0;
                display(target.innerText);
                calculator.secondNum =calcDisplay.value;
            }
        else if(calculator.operator==null){
                display(target.innerText);
                calculator.firstNum =calcDisplay.value;
        }
    } else if(calcDisplay.value.length>=14 && calculator.operator!==null && calculator.secondNum===null){
        calcDisplay.value=0;
        display(target.innerText);
        calculator.secondNum =calcDisplay.value;
    } else return false;
}
    else if (target.classList.contains("operator")){
        calculator.operator= target.innerText;
        Operate(calculator.operator);
        }
    else if (target.id == "equals")
        equals();
    else if (target.classList.contains("clear")){
        calculator.firstNum=null;
        calculator.secondNum=null;
        calculator.operator=null;
        calcDisplay.value= 0;
        }
    else if (target.classList.contains("conv-btn"))
        currencyConvert(target.innerText);
    console.log(calculator);
});