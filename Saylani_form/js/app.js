
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
    userStatus: false,
    message: ""

};

function btnSubmit() {



    console.log("ok")
    //  var name = document.forms["reg_form"].querySelectorAll('select', 'input')[1].value;
    if (/^[0-9]{5}-[0-9]{7}-[0-9]$/.test(cinc.value) && /^[0-9]{4}-[0-9]{7}$/.test(formphone.value) && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formemail.value)) {
        event.preventDefault();

        document.forms["reg_form"].querySelectorAll('select, input').forEach((element) => {

            userData[element['id']] = element.value;
            if (element['myatt'] === "true") {
                console.log("okk");
            }
        });

        if (!fatherCnic.value && /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(fatherCnic.value)) {
            userData[fatherCnic['id']] = fatherCnic.value;
        }
        // document.forms["reg_form"].querySelectorAll('input').forEach((element) => {
        //     userData[element['id']] = element.value;
        // });
        console.log(userData)
        swal("Good job!", "You clicked the button!", "success");

    } else {
        swal({
            title: "Are you sure?",
            text: "Something gonna wrong",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });
        // .then((willDelete) => {
        //     if (willDelete) {
        //         swal("Poof! Your imaginary file has been deleted!", {
        //             icon: "success",
        //         });
        //     } else {
        //         swal("Your imaginary file is safe!");
        //     }
        // });
    }
}
// var name = document.forms["welcome_form"]["userName"].value;