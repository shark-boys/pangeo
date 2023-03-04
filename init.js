const gridSize = 100;
const canvasSize = 600;
const numSquares = Math.pow(gridSize, 2);

const tileSize = canvasSize/gridSize;

const ctx = document.getElementById("myCanvas").getContext("2d");
ctx.canvas.width = canvasSize;
ctx.canvas.height = canvasSize;

const tiles = new Array(gridSize);
for (var i = 0; i < tiles.length; i++) {
tiles[i] = new Array(gridSize);
}

for (y = 0; y < gridSize; y++) {
    for (x = 0; x < gridSize; x++) {
        tiles[y][x] = new Tile(-1, 0, false,0,false);
    }
}

for (i = 0; i < 4; i++) {
    direction = Math.floor(Math.random() * 8);
    fraction = gridSize / 4;
    weight = Math.floor(Math.random() * 10);
    for (y = i * fraction; y < ((i + 1) * fraction); y++) {
        for (x = i * fraction; x < ((i + 1) * fraction); x++) {
            tiles[y][x].direction = direction;
            tiles[y][x].weight = weight;
        }
    }
}

draw();