var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var roverwidth=100
var roverheight=95
var roverx=100
var rovery=50
var backgroundimage="mars.jpg"
var roverimage="rover.png"
function add(){
    backgroundimgtag=new Image()
    backgroundimgtag.onload=uploadbackground()
    backgroundimgtag.src=backgroundimage
    roverimgtag=new Image()
    roverimgtag.onload=uploadrover()
    roverimgtag.src=roverimage
}
function uploadbackground(){
    ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(roverimgtag,roverx,rovery,roverwidth,roverheight)
}
window.addEventListener("keydown", mymousedown)
function mymousedown(e){
    keyPressed=e.keyCode
    console.log(keyPressed)
    if (keyPressed == "37") {
        Left()
    }
    if(keyPressed == "38") {
        up()
    }
    if(keyPressed == "39"){
        right()
    }
    if(keyPressed == "40"){
        down()
    }
}