
var getdata=document.getElementById("getdata");
var setitems=document.getElementById("listdata");
var arr=[]
function appendList() {
    
    if(getdata.value !== ""){
    arr.push(getdata.value)       
    setitems.innerHTML+=`<li> 
    ${getdata.value} 
    <button onclick="editItem()" >EDIT</button>
    <button onclick="deleteItem(getdata.value)" >DELETE</button>
     
    </li> `}

    console.log(arr)
}


function deleteList(){

    setitems.innerHTML = ""
 

}

function editItem(){
   



}

function deleteItem(a){
 

    console.log(a);


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