function getColor(tile) {
    if (tile.isVolcano) {
        return "#FF0000";
    }
    switch(tile.height) {
        case -4:
            return "#00004F";
        case -3:
            return "#000088";
        case -2:
            return "#0000AA";
        case -1:
            return "#0000FF"
        case 0:
            return "#FFFF00"
        case 1:
            return "#004F00";
        case 2:
            return "#008800";
        case 3:
            return "#00AA00";
        case 4:
            return "#00FF00";
    }
}

function getTColor(tile) {
    switch(tile.direction) {
        case 0:
            return "#00004F";
        case 1:
            return "#000088";
        case 2:
            return "#0000AA";
        case 3:
            return "#0000FF"
        case 4:
            return "#FFFF00"
        case 5:
            return "#004F00";
        case 6:
            return "#008800";
        case 7:
            return "#00AA00";
        case 8:
            return "#00FF00";
    }
}

function draw() {
    rectSize = canvasSize / gridSize;

    rect = {
        x: 0,
        y: 0,
        width: rectSize,
        color: "#000000"
    }

    for (y = 0; y < gridSize; y++) {
        for (x = 0; x < gridSize; x++) {
            if ((x == 0) || (tiles[y][x].height != tiles[y][x - 1].height || tiles[y][x].isVolcano || tiles[y][x - 1].isVolcano)) {
                ctx.fillStyle = rect.color;
                ctx.fillRect(rect.x, rect.y, rect.width, rectSize);
                rect.x = x * rectSize;
                rect.y = y * rectSize;
                rect.width = rectSize;
                rect.color = getColor(tiles[y][x]);
            } else {
                rect.width += rectSize;
            }
        }
    }
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.x, rect.y, rect.width, rectSize);
}

function drawT() {
    rectSize = canvasSize / gridSize;

    rect = {
        x: 0,
        y: 0,
        width: rectSize,
        color: "#000000"
    }

    for (y = 0; y < gridSize; y++){
        for(x = 0; x < gridSize; x++) {
            if((x == 0) || (tiles[y][x].direction != tiles[y][x - 1].direction)){
                ctx.fillStyle = rect.color;
                ctx.fillRect(rect.x, rect.y, rect.width, rectSize);
                rect.x = x * rectSize;
                rect.y = y * rectSize;
                rect.width = rectSize;
                rect.color = getTColor(tiles[y][x]);
            } else {
                rect.width += rectSize;
            }
        }
        ctx.fillStyle = rect.color;
        ctx.fillRect(rect.x, rect.y, rect.width, rectSize);
    }
}

function switchTectonic(){
    if (isTectonic){
        draw();
        isTectonic = false;
    } else {
        drawT();
        isTectonic = true;
    }
}