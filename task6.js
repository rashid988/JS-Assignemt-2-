//////Even or Odd Checker////
var inputNum = Number(prompt("Type a number "));
if ((inputNum%2) == 0) {
    alert( inputNum + " is an even number");
}
else if ( !( (inputNum%2) == 0 ) ) {
    alert( inputNum + " is an odd number");
}