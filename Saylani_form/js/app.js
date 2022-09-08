
var formemail = document.getElementById("emailAddress");
var formphone = document.getElementById("phoneNumer");
var cinc = document.getElementById("cinc");
var fatherCnic = document.getElementById("fatherCnic")



function check_field_valid(x) {


    var e = event.target;
    if (e.value === "") {

        e.classList.remove('is-valid');
        e.classList.add('is-invalid');


    } else {
        e.classList.remove('is-invalid');
        e.classList.add('is-valid');

    }

    if ((e.id === "fullName" || e.id === "fatherName" || e.id === "address" || e.id === "lastQualification") && !/(.*[a-z]){3}/i.test(e.value)) {

        e.classList.remove('is-valid');
        e.classList.add("is-invalid");


    }
    if ((e.id === "cinc" || e.id === "fatherCnic") && !/^[0-9]{5}-[0-9]{7}-[0-9]$/.test(e.value)) {
        e.classList.remove('is-valid');
        e.classList.add("is-invalid");

    }
    if (e.id === "phoneNumer" && !/^[0-9]{4}-[0-9]{7}$/.test(e.value)) {
        e.classList.remove('is-valid');
        e.classList.add("is-invalid");

    }

    if (e.id === "emailAddress" && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value)) {
        e.classList.remove('is-valid');
        e.classList.add("is-invalid");
    }
}


function set_on_focus() {

    var e = event.target;
    e.classList.remove('is-valid');
    e.classList.remove('is-invalid');
    // console.log(e.id);


}

const userData = {
    userStatus: false

};

function btnSubmit() {




    //  var name = document.forms["reg_form"].querySelectorAll('select', 'input')[1].value;
    if (/^[0-9]{5}-[0-9]{7}-[0-9]$/.test(cinc)) {
        event.preventDefault();
        document.forms["reg_form"].querySelectorAll('select').forEach((element) => {
            userData[element['id']] = element.value;
        });
        document.forms["reg_form"].querySelectorAll('input').forEach((element) => {
            userData[element['id']] = element.value;
        });
        console.log(userData)
        swal("Good job!", "You clicked the button!", "success");
    }
}
// var name = document.forms["welcome_form"]["userName"].value;