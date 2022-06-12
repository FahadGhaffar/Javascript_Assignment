

var arr=[34,45 ,54,56];
var min=0
console.log("hello")
for(var i=0 ; i<arr.length; i++){

    if(arr[i]<arr[i+1]){
        if(arr[i+1]== undefined){
            break
        }
        min=arr[i];
    }
}
console.log(min)