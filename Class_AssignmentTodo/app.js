
var getdata=document.getElementById("getdata");
var setitems=document.getElementById("listdata");
var arr=[]


function loadData(){
   
    setitems.innerHTML ="";
    for (let i = 0; i < arr.length; i++) {
       
            setitems.innerHTML+=`<li> 
    <span >${arr[i]} </span> 
    <button onclick="editItem(${i})" >EDIT</button>
    <button onclick="deleteItem(${i})" >DELETE</button>
     
    </li> 
        
        `

        
    }




}

loadData();

function appendList() {

  arr.push(getdata.value);
  loadData();

}

function editItem(i){
    


    var edit=prompt("Update element");
    arr.splice(i,1,edit);
    loadData();
    // console.log(i);


}


function deleteItem(i){


    arr.splice(i,1);
    loadData();
}




// function appendList() {
    
//     if(getdata.value !== ""){
//     arr.push(getdata.value)       
//     setitems.innerHTML+=`<li> 
//     <span >${getdata.value} </span> 
//     <button onclick="editItem(event)" >EDIT</button>
//     <button onclick="deleteItem(event)" >DELETE</button>
     
//     </li> `}

//      console.log(arr)
// }


// function deleteList(){

//     setitems.innerHTML = ""
 

// }

// function editItem(event){
   
//     var edit=prompt("Update element");

//    event.target.previousElementSibling.innerText= edit


// }

// function deleteItem(event){
 

//     // console.log(event.target.parentNode.remove());
//     event.target.parentNode.remove();


// }

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