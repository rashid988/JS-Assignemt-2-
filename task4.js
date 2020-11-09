////Marksheet with  Percentage////
var sub1 = Number(prompt("What are your marks in Maths? "));
var sub2 = Number(prompt("What are your marks in English? "));
var sub3 = Number(prompt("What are your marks in Science? "));
var totalMarks = Number(prompt("What are the Total Marks"));
var marksObt = sub1 + sub2 + sub3;

var per = (marksObt / totalMarks) * 100


if (per <= 100 && per >= 80) {
    document.write("<h1> Marks Sheet </h1>");
    document.write("<br>" + "Total Marks: " + totalMarks);
    document.write("<br>" + "Marks Obtained: " + marksObt);
    document.write("<br>" + "Percentage: " + per + "%");
    document.write("<br>" + "Grade : A-one");
    document.write("<br>" + "Remarks: Excellent");
}
else if (per < 80 && per >= 70) {
    document.write("<h1>" + "Marks Sheet" + "</h1>");
    document.write("<br>" + "Total Marks: " + totalMarks);
    document.write("<br>" + "Marks Obtained: " + marksObt);
    document.write("<br>" + "Percentage: " + per + "%");
    document.write("<br>" + "Grade : A");
    document.write("<br>" + "Remarks: Good");
}
else if (per < 70 && per >= 60) {
    document.write("<h1>" + "Marks Sheet" + "</h1>");
    document.write("<br>" + "Total Marks: " + totalMarks);
    document.write("<br>" + "Marks Obtained: " + marksObt);
    document.write("<br>" + "Percentage: " + per + "%");
    document.write("<br>" + "Grade : B");
    document.write("<br>" + "Remarks: You need to improve");
}
else if (per < 60) {
    document.write("<h1>" + "Marks Sheet" + "</h1>");
    document.write("<br>" + "Total Marks: " + totalMarks);
    document.write("<br>" + "Marks Obtained: " + marksObt);
    document.write("<br>" + "Percentage: " + per + "%");
    document.write("<br>" + "Grade: Fail");
    document.write("<br>" + "Remarks: Sorry");
}