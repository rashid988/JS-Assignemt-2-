//////Traffic Signal Messages According to Color///


var  colorInput = prompt ("What is the color of road traffic signal?");

if (colorInput == "Red"){
    alert("Must Stop");
}
else if (colorInput == "Yellow" ){
    alert("Ready to move");
}
else if (colorInput == "Green"){
    alert("Move now");
}
else {
    alert("Not Available");
}