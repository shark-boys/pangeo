function simulate(){
    heatmap = generateHeatMap();
    for (i = 0; i < 2; i++) {
        fraction = gridSize / 2;
        for (y = i * fraction; y < ((i + 1) * fraction); y++) {
            for (x = i * fraction; x < ((i + 1) * fraction); x++) {
               if(heatmap[y][x] >= 2){
                console.log(x);
                towardsArray = createTowardsArray(y, x);
                if(towardsArray.length == 4){
                    collide(towardsArray[0],towardsArray[1]);
                    collide(towardsArray[2],towardsArray[3]);
                }
                else{
                    collide(towardsArray[0],towardsArray[1]);
                }
               }
               else if(heatmap[y][x] == 0){
                awayArray = createAwayArray(y, x);
                submurge(awayArray[0]);
                }
               else{
                newcell = createTowardsArray(y,x);
                tiles[y][x].height = newcell[0].height;
                tiles[y][x].isVolcano = newcell[0].isVolcano;
                tiles[y][x].direction = newcell[0].direction;
               }
            }
        }
    }
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