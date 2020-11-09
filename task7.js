/////Calculator//////

var firstNum = Number(prompt("What is the first number? "));
var secNum = Number(prompt("What is the second number? "));
var operator = prompt("Give Operator sign ");

if (operator == "+") {
    alert( firstNum + " + " + secNum + " is equal to " + (firstNum + secNum) );
}
else if (operator == "-") {
    alert( secNum + " - " + firstNum + " is equal to " + (secNum - firstNum) );
}
else if (operator == "*") {
    alert( firstNum + " x " + secNum + " is equal to " + (firstNum * secNum) );
}
else if (operator == "/") {
    alert( firstNum + " / " + secNum + " is equal to " + (firstNum / secNum) );
}
else if (operator == "%") {
    alert( firstNum + " % " + secNum + " is equal to " + (firstNum % secNum) );
}