////// Character Checker (Whether Small or Capital or Number) ////////

var input = prompt("Write any character ");
var checker = input.charCodeAt(0);

if (checker >= 48 && checker <= 57) {
    alert(input + " is a numeric value");
}
else if (checker >= 65 && checker <= 91) {
    alert(input + " is a Capital Letter");
}
else if (checker >= 97 && checker <= 122) {
    alert(input + " is a Small Letter");
}

////// Whose Greater Num1 or Num2 ////////

var num1 = parseInt(prompt("Enter first integer value "));
var num2 = parseInt(prompt("Enter second integer value "));

if (num1 > num2) {
    alert(num1 + " is greater than " + num2);
}
else if (num2 > num1) {
    alert(num2 + " is greater than " + num1);
}

    /////// Greetings According to Gender //////////

var gender = prompt("What is your gender?");

if (gender === "Male") {
    alert("Good Morning Sir!");
}
else if (gender === "Female") {
     alert("Good Morning Ma'am");
}

//////// Fuel Reainder ////////

var fuelInput = prompt("How much fuel is left? (In Litres)");

if (fuelInput < 0.25) {
    alert("Please refill your fuel in your car");
}
else {
    alert ("You Have Enough Petrol")
}




//////// Check Number is Divisible or Not////////

var numInput = Number(prompt("Give a number: "));
var numRem = numInput % 3;

if (numRem == 0) {
    alert( numInput + " is divisible by 3");
}


////// Temperature Status ///////

var temp = Number(prompt("What is the Temperature?"));

if (temp > 40) {
    alert("It is too hot outside.");
}
else if (temp > 30) {
    alert("The Weather today is Normal.");
}
else if (temp > 20) {
    alert("Today’s Weather is cool.");
}
else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}