
var setitems=document.getElementById("listdata");
var getdata=document.getElementById("getdata");
function appendlist() {
    setitems.innerHTML+=`<li> 
    ${getdata.value} 
    <button >Edit</button>
     
    </li> `
}

// const person = {
//     name: 'Wes',
//     job: 'Web Developer',
//     city: 'Hamilton',
//     bio: 'Wes is a really cool guy that loves to teach web development!'
// };
// // And then create our markup:
// const markup = `
//  <div class="person">
//     <h2>
//         ${person.name}
//     </h2>
//     <p class="location">${person.city}</p>
//     <p class="bio">${person.bio}</p>
//  </div>
// `;


// setitems.innerHTML = markup;

// console.log("test");
// alert("test")