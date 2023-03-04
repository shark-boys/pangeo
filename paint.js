var tool = 3;
var isPaint;

function paint(x, y){
    tiles[y-1][x].setHeight(tool);
    tiles[y-1][x].setHeight(tool);
    tiles[y-1][x].setHeight(tool);
    tiles[y][x-1].setHeight(tool);
    tiles[y][x].setHeight(tool);
    tiles[y][x+1].setHeight(tool);
    tiles[y+1][x].setHeight(tool);
    tiles[y+1][x].setHeight(tool);
    tiles[y+1][x].setHeight(tool);
    draw();
}

function changeTool(t){
    tool = t;
}