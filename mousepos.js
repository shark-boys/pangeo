var c = "myCanvas"
function inCanvas(){
    var cap = document.getElementById(c).getContext("2d");
    var check;
    
    //records mouse whenever over canvas
    cap.canvas.addEventListener("mousemove", function(event){
        var mouseX = event.clientX - cap.canvas.offsetLeft;
        var mouseY = event.clientY - cap.canvas.offsetTop;
        /*var status = document.getElementById('status');
        status.innerHTML = mouseX+" "+mouseY;*/
    }, false);

    //records when the mouse first pressed
    cap.canvas.addEventListener("mousedown", function(event){
        var mouseX = event.clientX - cap.canvas.offsetLeft;
        var mouseY = event.clientY - cap.canvas.offsetTop;
        /*var mousedown = document.getElementById('mousedown');
        mousedown.innerHTML = mouseX+" "+mouseY;*/
        check = true;
        recordPress();
    });

    //records at the end of mouse click
    cap.canvas.addEventListener("click", function(event){
        var mouseX = event.clientX - cap.canvas.offsetLeft;
        var mouseY = event.clientY - cap.canvas.offsetTop;
        /*var mousePos = document.getElementById('mousePos');
        mousePos.innerHTML = mouseX+" "+mouseY;*/
        recordPickup();
    }, false);

}
window.addEventListener("load", function(event){
    inCanvas();
});

function recordPress(){
    /*var status = document.getElementById('status');
    status.innerHTML = 1+" "+1;*/
}

function recordPickup(){
    /*var status = document.getElementById('status');
    status.innerHTML = 2+" "+2;*/
}