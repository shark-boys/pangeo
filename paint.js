var tool = 3;
var tileSize = canvasSize/gridSize;
var isPaint;

function paint(x, y){
    var height = tool;
    tiles[y][x].setHeight(tool);
    draw();
}

function changeTool(t){
    tool = t;
}