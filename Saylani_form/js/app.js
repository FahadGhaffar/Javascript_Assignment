

function check_field_valid() {


    var e = event.target;
    if (e.value === "") {
        e.classList.remove('is-valid');
        e.classList.add('is-invalid');

    } else {
        e.classList.remove('is-invalid');
        e.classList.add('is-valid');
    }
}


function set_on_focus() {

    var e = event.target;
    e.classList.remove('is-valid');
    e.classList.remove('is-invalid');


}