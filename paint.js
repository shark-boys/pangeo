var tool;
var tileSize = canvasSize/gridSize;
var isPaint;

function paint(x, y){
    var height = tool;
    tiles[y%tileSize][x%tileSize].setHeight(tool);
    draw();
}

function changeTool(t){
    tool = t;
}