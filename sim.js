function simulate(){
    oldTiles = JSON.parse(JSON.stringify(tiles));
    heatMap = generateHeatMap();

    //2nd and 4th collisions
    for (y = 0; y < gridSize; y++) {
        for (x = 0; x < gridSize; x++) {
            if (heatMap[y][x] >= 2) {
                if (++tiles[y][x].height > 4) {
                    tiles[y][x].height = 4;
                    contributers = createTowardsArray(y,x);
                    for (i in contributers) {
                        oldTile = contributers[i];
                        liveTile = tiles[oldTile.y][oldTile.x];
                        if (liveTile.height < 4) {
                            reverseDirection(liveTile);
                        }
                    }
                }
            }
        }
    }

    //oldTiles = JSON.parse(JSON.stringify(tiles));
    //zeros
    for (y = 0; y < gridSize; y++) {
        for (x = 0; x < gridSize; x++) {
            if (heatMap[y][x] == 0) {
                if (--tiles[y][x].height < -4) {
                    tiles[y][x].height = -4;
                }
            }
        }
    }

    //oldTiles = JSON.parse(JSON.stringify(tiles));
    //ones
    for (y = 0; y < gridSize; y++) {
        for (x = 0; x < gridSize; x++) {
            if (heatMap[y][x] == 1) {
                
            }
        }
    }
    draw();
}
function reverseDirection(tile) {
    tile.direction = (tile.direction + 4) % 8
}
function isToward(pos, adjTile) {
    switch(pos) {
        case 0:
            return adjTile.direction == 4;
        case 1:
            return adjTile.direction == 5;
        case 2:
            return adjTile.direction == 6; 
        case 3:
            return adjTile.direction == 7;
        case 4:
            return adjTile.direction == 0;
        case 5:
            return adjTile.direction == 1;
        case 6:
            return adjTile.direction == 2;
        case 7:
            return adjTile.direction == 3;
    }
}

function isAway(pos, adjTile) {
    return pos == adjTile.direction;
}