


var date=new Date()

document.write(date +"<br/>")



var month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
document.write( "Current Month " +month[date.getMonth()] +"<br/>")


var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.write( "Today " +dayNames[date.getDay()] +"<br/>")
  



if (date.getDay()===0 || date.getDay()===6){
    document.write( "It’s Fun day" +"<br/>")

}



