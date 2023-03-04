var tool = 3;
var isPaint;

function paint(x, y){
    tiles[y][x].setHeight(tool);
    draw();
}

function changeTool(t){
    tool = t;
}