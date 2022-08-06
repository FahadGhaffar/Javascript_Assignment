

var check_number = "A   ";
check_number = check_number.charCodeAt(check_number)

if (check_number > 64 && check_number < 91) {

    document.write("Your input in UperCase case  <br/>");
} else {

    document.write("Your input in lover case  <br/>");
}


var a = 5;
var b = 9;


if (a > b) {

    document.write("First Number is greater  <br/>");
} else {

    document.write("Second Number is greater  <br/>");

}




var number = +prompt("Enter Your Number ");


if (number > 0) {
    document.write(" Number is Positive  <br/>");

} else if (number < 0) {
    document.write(" Number is Negitive  <br/>");

} else {
    document.write(" Number is Zero  <br/>");
}


var check_vowel = "e";

if (check_number === "a" && check_number === "e" && check_number === "i" && check_number === "o" && check_number === "u") {

    document.write(" Letter is Vowel  <br/>");

} else {

    document.write(" Letter not is Vowel  <br/>");
}

var check_password = "Asd"
var password = prompt("Enter your Password")
if (check_number === password) {

    document.write(" Correct!  <br/>");
} else {
    document.write(" Wrong  <br/>");
}



var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}



