

var vid = document.getElementById("autoplay")
var redlight = document.getElementById("redlight")
var yellowlight = document.getElementById("yellowlight")
var greenlight = document.getElementById("greenlight")




function redlightover() {

    vid.playbackRate = 0
    redlight.style.backgroundColor = "red"


}


function lightout() {
    vid.playbackRate = 1
    redlight.style.backgroundColor = "transparent"
    yellowlight.style.backgroundColor = "transparent"
    greenlight.style.backgroundColor = "transparent"

}
function yellowlightover() {
    vid.playbackRate = 0.5

    yellowlight.style.backgroundColor = "yellow"
}




function greenlightover() {

    greenlight.style.backgroundColor = "green"

}

