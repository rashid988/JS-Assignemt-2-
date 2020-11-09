//////Guess Game///

var secretNum = 8;
var guessNum = Number(prompt("Guess a number ranging from 1 to 10"));

if (secretNum == guessNum) {
    alert("Bingo! Correct Answer");
}
else if (secretNum == guessNum + 1 ) {
    alert("Close enough to the correct answer");
}
else {
    alert("Wrong Answer..."+ "\n" + "Try Again")
}