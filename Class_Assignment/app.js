


var skill_html="yes";
var skill_js="yes"
var skill_css="yes";
var age=18;
var exp=2;
var city="yes";


if((skill_css === "yes" || skill_html === "yes") && skill_js==="yes" && age >= 18 && exp >=2 && city==="yes" ) {

    console.log("welcome");

}
else{
    console.log("try next time");
}



if((skill_css === "yes" || skill_html === "yes")  && age >= 18  && city==="yes" ) {

     if (skill_js ==="yes" ){

        if(exp>=2){
            console.log("welcome");

        }else{
            console.log("you exp is not enough");
        }
      

     }else{
        console.log("We need Js developer");
     }



}else{
    console.log("try next time");
}

