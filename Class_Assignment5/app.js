




var date=new Date();



console.log(date.getDay("june 10, 2022"))

var arr=["Sun","monday","tue","wed","thur","fri","sat"]


for (var i = 0; i < 10; i++) {
    var year =2022+(i+1)
    console.log("nov 24,"+year)
    console.log(arr[new Date("nov 24,"+year).getDay()])
    
}
