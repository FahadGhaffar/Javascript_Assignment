

function power(a, b) {

    c = a;
    for (var index = 0; index < (b - 1); index++) {

        a = a * c;
        console.log(a);
    }


    return a;
}

document.write(power(5, 3) + "<br>");



function is_leap(year) {
    var leap = false;




    if (year % 4 === 0) {
        var leap = true;

        if (year % 100 === 0 && year % 400 === 0) {
            var leap = true;
        }
    }

    console.log(leap)

    return leap;
}

document.write(is_leap(2012) + "<br>");


function area_of_trangle(a, b, c) {


    var s = (a + b + c) / 2;
    var a = s - a;
    var b = s - b;
    var c = s - c;
    area = s(a * b * c)


    return area;


}

