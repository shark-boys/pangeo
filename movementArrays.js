function createTowardsArray(y, x){

    if ((y-1) < 0){
        munY= gridSize % (gridSize + (y-1));
        pluY = y + 1;
    }
    else if((y+1) >= gridSize){
        pluY = gridSize % (gridSize + (y+1));  
        munY = y - 1;
    }
    else{
        pluY = y + 1;
        munY = y - 1;
    }
    if((x-1) < 0){
        munX = gridSize % (gridSize + (x-1));
        pluX = x + 1;
    }
    else if((x+1) >= gridSize){
        pluX = gridSize % (gridSize + (x+1));
        munX = x - 1;
    }
    else{
        pluX = x + 1;
        munX = x - 1;
    }
    towardTiles = [];
    countToward = 0;
    console.log(x);
    console.log(y);
    up = tiles[munY][x];
    if(isToward(0, up)){
        towardTiles[countToward] = tiles[munY][x];
        countToward++;
    }
    if(isToward(1, tiles[munY][pluX])){
        towardTiles[countToward] = tiles[munY][pluX];
        countToward++;
    }
    if(isToward(2, tiles[y][pluX])){
        towardTiles[countToward] = tiles[y][pluX];
        countToward++;
    }
    if(isToward(3, tiles[pluY][pluX])){
        towardTiles[countToward] = tiles[pluY][pluX];
        countToward++;
    }
    if(isToward(4, tiles[pluY][x])){
        towardTiles[countToward] = tiles[pluY][x];
        countToward++;
    }
    if(isToward(5, tiles[pluY][munX])){
        towardTiles[countToward] = tiles[munY][munX];
        countToward++;
    }
    if(isToward(6, tiles[y][munX])){
        towardTiles[countToward] = tiles[y][munX];
        countToward++;
    }
    if(isToward(7, tiles[munY][munX])){
        towardTiles[countToward] = tiles[munY][munX];
        countToward++;
    }
    return towardTiles;
}
function createAwayArray(y ,x){
    awayTiles = [];
    countAway = 0;
    if ((y-1) < 0){
        munY= gridSize % (gridSize + (y-1));
        pluY = y + 1;
    }
    else if((y+1) >= gridSize){
        pluY= gridSize % (gridSize + (y+1));  
        munY = y - 1;
    }
    else{
        pluY = y + 1;
        munY = y - 1;
    }
    if((x-1) < 0){
        munX = gridSize % (gridSize + (x-1));
        pluX = x + 1;
    }
    else if((x+1) >= gridSize){
        pluX = gridSize % (gridSize + (x+1));
        munX = x - 1;
    }
    else{
        pluX = x + 1;
        munX = x - 1;
    }
    up = tiles[munY][x];
    console.log(x);
    console.log(y);
    if(isAway(0, up)){
        awayTiles[countAway] = tiles[munY][x];
        countAway++;
    }
    if(isAway(1, tiles[munY][pluX])){
        awayTiles[countAway] = tiles[munY][pluX];
        countAway++;
    }
    if(isAway(2, tiles[y][pluX])){
        awayTiles[countAway] = tiles[y][pluX];
        countAway++;
    }
    if(isAway(3, tiles[pluY][pluX])){
        awayTiles[countAway] = tiles[pluY][pluX];
        countAway++;
    }
    if(isAway(4, tiles[pluY][x])){
        awayTiles[countAway] = tiles[pluY][x];
        countAway++;
    }
    if(isAway(5, tiles[pluY][munX])){
        awayTiles[countAway] = tiles[pluY][munX];
        countAway++;
    }
    if(isAway(6, tiles[y][munX])){
        awayTiles[countAway] = tiles[y][munX];
        countAway++;
    }
    if(isAway(7, tiles[munY][munX])){
        awayTiles[countAway] = tiles[munY][munX];
        countAway++;
    }
    return awayTiles;
}