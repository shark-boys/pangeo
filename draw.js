
gridSize = 100
canvasSize = 600

c = document.getElementById("myCanvas");
ctx = c.getContext("2d");
ctx.canvas.width = canvasSize;
ctx.canvas.height = canvasSize;

function getColor(tile) {
    switch(tile.height) {
        case -4:
            return "#000033";
        case -3:
            return "#000088";
        case -2:
            return "#0000AA";
        case -1:
            return "#0000FF"
        case 0:
            return "#FFFF00"
        case 1:
            return "#003300";
        case 2:
            return "#008800";
        case 3:
            return "#00AA00";
        case 4:
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
            if ((x == 0) || (tiles[y][x].height != tiles[y][x - 1].height)) {
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