const gridSize = 100;
const canvasSize = 600;
const numSquares = Math.pow(gridSize, 2);

const ctx = document.getElementById("myCanvas").getContext("2d");
ctx.canvas.width = canvasSize;
ctx.canvas.height = canvasSize;

const tiles = new Array(gridSize);
for (var i = 0; i < tiles.length; i++) {
tiles[i] = new Array(gridSize);
}

for (y = 0; y < gridSize; y++) {
    for (x = 0; x < gridSize; x++) {
        tiles[y][x] = new Tile(0, 0, false);
    }
}

for (i = 0; i < 4; i++) {
    direction = Math.floor(Math.random() * 8);
    fraction = gridSize / 4;
    for (y = i * fraction; y < ((i + 1) * fraction); y++) {
        for (x = i * fraction; x < ((i + 1) * fraction); x++) {
            console.log("changing" + x + "," + y);
            tiles[y][x].direction = direction;
        }
    }
}