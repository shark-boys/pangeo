const gridSize = 100;
var canvasSize = 600;
var numSquares = Math.pow(gridSize, 2);

var isTectonic = false;
var tileSize = canvasSize/gridSize;

const ctx = document.getElementById("myCanvas").getContext("2d");

const tiles = new Array(gridSize);
for (var i = 0; i < tiles.length; i++) {
tiles[i] = new Array(gridSize);
}

function initilize(){
    for (y = 0; y < gridSize; y++) {
        for (x = 0; x < gridSize; x++) {
            tiles[y][x] = new Tile(-1, 0, false,0,false, x, y);
        }
    }

    for (i = 0; i < 2; i++) {
        direction = 2; //Math.floor(Math.random() * 8);
        fraction = gridSize / 2;
        weight = Math.floor(Math.random() * 10);
        for (y = i * fraction; y < ((i + 1) * fraction); y++) {
            for (x = i * fraction; x < ((i + 1) * fraction); x++) {
                tiles[y][x].direction = direction;
                tiles[y][x].weight = weight;
            }
        }
    }
    draw();
    resizeCanvas();

    x = document.getElementById("altoggle");
    x.style.display = "none";
}

window.onresize = resizeCanvas;