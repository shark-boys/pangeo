window.onload = function(){
    canvasEvent();
}

function canvasEvent(){
    var canvas = document.getElementById("Canvas");
    var cap = canvas.getContext("2d");

    cap.rect(0,0,800,400);

    canvas.addEventListener("mouseover",hover,false);
    canvas.addEventListener("mouseout",hoverOut,false);

}

function hover(e){
    var canvas = document.getElementById("Canvas");
    var cap = canvas.getContext("2d");

    cap.fillStyle = "red";
    cap.fill();
}

function hoverOut(e){
    var canvas = document.getElementById("Canvas");
    var cap = canvas.getContext("2d");

    cap.fillStyle = "green";
    cap.fill();
}
