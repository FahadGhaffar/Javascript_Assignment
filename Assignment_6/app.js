 


var shopMenu=["biryani","nihari","qorma","pai"];



var user= prompt("Enter your food").toLowerCase();


// console.log(shopMenu.indexOf(user))

if(shopMenu.indexOf(user)!== -1){

    document.write("Yes We have available <h1>"+shopMenu[shopMenu.indexOf(user)]+"</h1>")

}
else{
    document.write("Sorry We have not available your food but you can choice in between this menu <br/>")
    for(var i=0 ; i<shopMenu.length ; i++){

        document.write("<li>"+shopMenu[i]+"</li><br/>")
    }
}
