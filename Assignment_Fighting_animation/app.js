// function generatePassword() {
//   var user = 10;
//   var randomStrings =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
//   var randomPassword = "";
//   var randomNumber = 0;
//   for (var i = 0; i < user; i++) {
//     randomNumber = Math.floor(Math.random() * randomStrings.length);
//     randomPassword += randomStrings.charAt(randomNumber);
//   }
//   return randomPassword;
// }

// function emailValidation(para) {
//   var email = document.getElementById(para);
//   var password = document.getElementById("my-password");
//   if (email.value) {
//     console.log(email.value);
//     email.style.backgroundColor = "white";
//     password.value = generatePassword();
//   } else {
//     email.style.backgroundColor = "red";
//   }
// }

// function submit() {
//   if (event.keyCode === 13) {
//     console.log("Login");
//   }
// }

// function getValue() {
//   var heading = document.getElementById("heading");

//   console.log(heading.innerHTML);
// }

// function setValue() {
//   var heading = document.getElementById("heading");

//   heading.innerText = "<span>Ghous Ahmed</span>";
// }

// console.log("hello");
// window.onload = function () {
// };

// window.onkeydown = function () {
//   console.log(event.keyCode);
// };

// window.onblur = function () {
//   console.log("offline");
// };

// window.onfocus = function () {
//   console.log("online");
// };\

// function getTime() {
//   console.log(new Date().toTimeString());
// }

// setInterval(getTime, 1000);

// setTimeout(function () {
//   console.log("hello");
// }, 2000);

// console.log("one");
// setTimeout(function () {
//   console.log("two");
// }, 1000);
// console.log("three");

// console.log(window);

// console.log(document);
// var count = 0;
// var timer = setInterval(function () {
//   count++;

//   console.log(count);
// }, 1000);

// setTimeout(function () {
//   clearInterval(timer);
// }, 5000);

// setTimeout(function () {
//   timer = setInterval(function () {
//     count++;

//     console.log(count);
//   }, 1000);
// }, 7000);

var count = 350;
window.onkeydown = function () {
  console.log(event.keyCode);
  var character = document.getElementById("character");
  if (event.keyCode === 39) {
    character.src = "two.gif";
    count = count + 50;
    console.log(count);
    character.style.left = count + "px";
    setTimeout(function () {
      character.src = "one.gif";
    }, 100);
  }
  if (event.keyCode === 37) {
    character.src = "two.gif";
    count = count - 50;
    console.log(count);
    character.style.left = count + "px";
    setTimeout(function () {
      character.src = "one.gif";
    }, 100);
  }
  if (event.keyCode === 65) {
    character.src = "three.gif";
    setTimeout(function () {
      character.src = "one.gif";
    }, 1000);
  }
};
