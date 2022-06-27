


var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]



for (var i = 0; i < arr.length; i++) {
  
    for (var j = 0; j < i.length; j++) {
        document.write(j +" ")
        
    }
    document.write("<br/>")
    
}

for (var i = 1; i < 11; i++) {
    document.write(i +"<br/> ")
}


var table=+prompt("number ",2);
var length=+prompt("lenght",10);


for (var i = 1; i <= length.length; i++) {
    
    document.write(table +" * "+i+" = "+i*table);
}


var fruits = ["apple", "banana", "mango", "orange",
    "trawberry"]
    
    for (var i = 0; i < fruits.length; i++) {
    
        document.write("Element at index "+i+" is "+fruits[i]);
    }
