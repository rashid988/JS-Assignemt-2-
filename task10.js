//////Tells that Password is Correct or Not or Enter Password in Case of Empty//// 
var correctPassword = "ABC";
var password = prompt("Enter password");

if (password == "") {
    alert("Please enter your Password");
}
else if (password === correctPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}