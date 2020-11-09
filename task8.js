//////Tells that number is Positive or Negative or Zero//////

var numInput = Number(prompt("Type a number "));

if (numInput >= 1) {
    alert(numInput + " is a positive number");
}
else if (numInput < 0) {
    alert(numInput + " is a negative number");
}
else if (numInput == 0) {
    alert(numInput + " is equal to zero");
}