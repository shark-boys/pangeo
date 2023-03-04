var tool;
var tileSize = canvasSize/gridSize;
var isPaint;

function paint(x, y, tool){
    var height = tool;
    tiles[detYtile()][detXtile()].setHeight(tool);
    draw();
}

function detXtile(){
    return mouseX/tileSize;
}

function detYtile(){
    return mouseY/tileSize;
}

function changeTool(t){
    tool = t;
}