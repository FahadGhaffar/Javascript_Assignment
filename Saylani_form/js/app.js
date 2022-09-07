

function check_field_valid(x) {


    var e = event.target;
    if (e.value === "") {
        e.classList.remove('is-regex');
        e.classList.remove('is-valid');
        e.classList.add('is-invalid');

    } else {
        e.classList.remove('is-invalid');
        e.classList.add('is-valid');
        e.classList.remove('is-regex');
    }
    console.log(e.value);
    if (!/(.*[a-z]){3}/i.test(e.value)) {
        e.classList.remove('is-invalid');
        e.classList.remove('is-valid');
        e.classList.add("is-regex");

    }
}


function set_on_focus() {

    var e = event.target;
    e.classList.remove('is-valid');
    e.classList.remove('is-invalid');
    // console.log(e.id);


}


function formSubmit() {


    event.preventDefault();


}
