// var heading = document.querySelectorAll(".my-heading");

// heading[0].innerHTML = "Ghous Ahmed"

// var link = document.getElementById("link");

// console.log(link.id);

// var count = 1;

// function scaleImage(zoom) {
//   var image = document.getElementById("image");
//   if (zoom === "+") {
//     count++;
//     image.style.transform = "scale(" + count + ")";
//   } else {
//     count--;
//     image.style.transform = "scale(" + count + ")";
//   }
// }

// var paragraph = document.getElementsByTagName("p");

// console.log(paragraph)

// var main = document.getElementById("main");

// var paragraph = main.getElementsByTagName("p");

// console.log(paragraph);

// console.log(document.childNodes[1].childNodes[0].nextSibling.nodeName);

// console.log(document.getElementById("main").setAttribute("class", "xyz"));

// var main = document.getElementById("main");

// var div = document.createElement("div");
// var h1 = document.createElement("h1");
// var text = document.createTextNode("Hello World");
// h1.appendChild(text);
// div.appendChild(h1);

// main.appendChild(div);

// function addTodo() {
//   var inputValue = document.getElementById("todo-value");
//   var list = document.getElementById("list");
//   var li = document.createElement("li");
//   var text = document.createTextNode(inputValue.value);
//   var deleteBtn = document.createElement("button");
//   deleteBtn.setAttribute("onclick", "deleteTodo()");
//   var deleteText = document.createTextNode("Delete");
//   deleteBtn.appendChild(deleteText);
//   li.appendChild(text);
//   li.appendChild(deleteBtn);
//   list.appendChild(li);

//   inputValue.value = "";
// }

// function deleteAll() {
//   var list = document.getElementById("list");
//   list.innerHTML = "";
// }

// function deleteTodo() {
//   event.target.parentNode.remove();
// }

function foo() {
  console.log("test");
}

function abc() {
  foo();
  console.log(event.target);
}
