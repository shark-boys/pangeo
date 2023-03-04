var tool = 4;
var isPaint;

function paint(x, y){
    if(isTectonic){
        tiles[y-1][x-1].setDirection(tool);
        tiles[y-1][x].setDirection(tool);
        tiles[y-1][x+1].setDirection(tool);
        tiles[y][x-1].setDirection(tool);
        tiles[y][x].setDirection(tool);
        tiles[y][x+1].setDirection(tool);
        tiles[y+1][x-1].setDirection(tool);
        tiles[y+1][x].setDirection(tool);
        tiles[y+1][x+1].setDirection(tool);
    }
    else {
        tiles[y-1][x].setHeight(tool);
        tiles[y-1][x].setHeight(tool);
        tiles[y-1][x].setHeight(tool);
        tiles[y][x-1].setHeight(tool);
        tiles[y][x].setHeight(tool);
        tiles[y][x+1].setHeight(tool);
        tiles[y+1][x].setHeight(tool);
        tiles[y+1][x].setHeight(tool);
        tiles[y+1][x].setHeight(tool);
    }
    if(isTectonic){drawT();}
    else {draw();}
}

function changeTool(t){
    tool = t;
}