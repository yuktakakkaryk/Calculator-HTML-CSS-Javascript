//Get the value of the button in the area after clicking it.
function calcText(val){
    let currentVal = document.getElementById("txt");
    let resultVal = document.getElementById("result");
    if(currentVal.innerText == "0"){
        currentVal.innerText = "";
        currentVal.innerText += val;
    }
    else{
        currentVal.innerText += val;
    }
    resultVal.innerText = eval(currentVal.innerText);
}

//Get the result in the area after clicking the "equal to" button.
function getResult(){
    let currentVal = document.getElementById("txt");
    let resultVal = document.getElementById("result");
    resultVal.innerText = eval(currentVal.innerText);
}

//Clear everything on screen after clicking "AC" button.
function clearAll(){
    let currentVal = document.getElementById("txt");
    let resultVal = document.getElementById("result");
    currentVal.innerText = "0";
    resultVal.innerText = "0";
}

//Clear character from the end.
function clearChar(){
    let currentVal = document.getElementById("txt");
    let resultVal = document.getElementById("result");
    let newVal = currentVal.innerText;
    resultVal.innerText = "0";
    newVal = newVal.slice(0, -1);
    if(currentVal.innerText.length == 1){
        currentVal.innerText = "0";
    }
    else{
        currentVal.innerText = newVal;
    }
}
