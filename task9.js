/////Vowel and Consonant Checker////
var vowel = prompt("Type a letter to check whether it is a vowl or not");
var vowelASCII = vowel.charCodeAt(0);

if (vowelASCII == 65 || vowelASCII == 69 || vowelASCII == 73 || vowelASCII == 79 || vowelASCII == 85 || vowelASCII == 97 || vowelASCII == 101 || vowelASCII == 105 || vowelASCII == 111 || vowelASCII == 117 ) {
    alert( "True! " + '"' + vowel + '"' + " is a vowel ");
}
else {
    alert( "False! " + '"' + vowel + '"' + " is not a vowel ");
}