canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var lastpositionofx, lastpositionofy;
color = "black";
widthofline = 1;
var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if (width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", mytouchstart);
function mytouchstart(e) {
    color = document.getElementById("color").value;
    widthofline = document.getElementById("Linewidth").value;
    lastpositionofx= e.touches[0].clientX - canvas.offsetLeft;
    console.log("lastx"+lastpositionofx);
    lastpositionofy = e.touches[0].clientY - canvas.offsetTop;
    console.log("lasty"+lastpositionofy);
}


canvas.addEventListener("touchmove", mytouchmove);
function mytouchmove(e) {
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
console.log(current_position_of_mouse_x,current_position_of_mouse_y);
    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;
        ctx.moveTo(lastpositionofx, lastpositionofy);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

    lastpositionofx = current_position_of_mouse_x;
    lastpositionofy = current_position_of_mouse_y;
    console.log(lastpositionofx,lastpositionofy);
}
function ClearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
