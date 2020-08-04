document.getElementById("login-button").addEventListener('click',function(){
    
    document.getElementById("login-area").style.display = 'none';
    document.getElementById("transaction-area").style.display = 'block';
    
});

document.getElementById("addDeposit").addEventListener('click',function(){
    var depositAmount = getInputNumber("depositAmount")
    updateSpanText("currentDeposit",depositAmount)
    updateSpanText("currentBalance",depositAmount) 
    document.getElementById("depositAmount").value = "";
});

document.getElementById("addWithdraw").addEventListener('click',function(){
    var withdrawAmount = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw",withdrawAmount)
    updateSpanText("currentBalance",-withdrawAmount) 
    document.getElementById("withdrawAmount").value = "";
});

function getInputNumber(id){
    var number = parseFloat(document.getElementById(id).value);
    if(isNaN(number)) number = 0;
    return number
}

function updateSpanText(currentId,depositAmount){
    var current = parseFloat(document.getElementById(currentId).innerText);
    var totalDeposit = depositAmount+current;
    document.getElementById(currentId).innerText = totalDeposit;
}