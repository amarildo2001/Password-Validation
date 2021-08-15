var state = false;

function showtoggle() {
    if (state) {
        document.getElementById("mypassword").setAttribute("type", "password");
        document.getElementById("eye").setAttribute("class", "far fa-eye");
    } else {
        document.getElementById("mypassword").setAttribute("type", "text");
        document.getElementById("eye").setAttribute("class", "far fa-eye-slash");
        state = false;
    }
}
myPassword.onfocus = function() {
    document.getElementById("message").style.opacity = "1";
}
myPassword.onblur = function() {
    document.getElementById("message").style.opacity = "0";
}
var Password = document.getElementById("mypassword");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var specialChar = document.getElementById("specialChar");
var length = document.getElementById("length");

Password.onkeyup = function() {

    if (Password.nodeValue.match(/[0-9]/)) {
        document.getElementById(`numberIcon`).setAttribute("class", "fas fa-check")
        number.classList.remove("invalid");
        number.classList.add("invalid");

    } else {
        document.getElementById(`numberIcon`).setAttribute("class", "fas fa-times")
        number.classList.add("invalid");
        number.classList.remove("invalid");
    }


    //second validation

    if (Password.nodeValue.match(/[a - z ^ A - Z]/)) {
        document.getElementById(`charIcon`).setAttribute("class", "fas fa-check")
        specialChar.classList.remove("invalid");
        specialChar.classList.add("invalid");

    } else {
        document.getElementById(`chaIcon`).setAttribute("class", "fas fa-times")
        specialChar.classList.add("invalid");
        specialChar.classList.remove("invalid");
    }
    if (Password.nodeValue.match(/[A - Z]/)) {
        document.getElementById(`capitalIcon`).setAttribute("class", "fas fa-check")
        capital.classList.remove("invalid");
        capital.classList.add("invalid");

    } else {
        document.getElementById(`capitalIcon`).setAttribute("class", "fas fa-times")
        capital.classList.add("invalid");
        capital.classList.remove("invalid");
    }
    if (Password.nodeValue.length >= 8) {
        document.getElementById(`charIcon`).setAttribute("class", "fas fa-check")
        length.classList.remove("invalid");
        length.classList.add("invalid");

    } else {
        document.getElementById(`chaIcon`).setAttribute("class", "fas fa-times")
        length.classList.add("invalid");
        length.classList.remove("invalid");
    }
}