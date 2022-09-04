

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