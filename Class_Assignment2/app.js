

var word="civic";
var temp="";
console.log(word.length);
for(var i=word.length-1 ; i>=0 ; i--){
    
    temp= temp+word[i];
    
   


}
console.log(temp);
if(temp===word){

    alert("good");
}