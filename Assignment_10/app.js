function date() {



    var newdate = new Date();
    document.write(newdate + "<br>");

}


function fullname(fanme, lname) {

    document.write("Hello " + (fanme + " " + lname) + "<br>");
}


function sum(a, b) {

    return a + b;
}

function calculator(num1, num2, operator) {


    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "*") {
        return num1 * num2;
    } else if (operator == "/") {
        return num1 / num2;
    }
}


function square(num) {
    return num * num
}