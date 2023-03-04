function createTowardsArray(tile, y, x){
    if ((y-1) < 0){
        munY= gridSize % (gridSize + (y-1));
    }
    if((y+1) > gridSize){
        pluY= gridSize % (gridSize + (y+1));  
    }
    else{
        pluY = y;
        munY = y;
    }
    if((x-1) < 0){
        munX = gridSize % (gridSize + (x-1));
    }
    if((x+1) > gridSize){
        pluX = gridSize % (gridSize + (x+1));
    }
    else{
        pluX = x;
        munX = x;
    }
    towardTiles = [];
    countToward = 0;
    if(isToward(0, tile[munY][x])){

        towardTiles[count] = tile[numY][x];
        countToward++;
    }
    if(isToward(1, tile[munY][pluX])){
        towardTiles[count] = tile[munY][pluX];
        countToward++;
    }
    if(isToward(2, tile[y][pluX])){
        towardTiles[count] = tile[y][pluX];
        countToward++;
    }
    if(isToward(3, tile[pluY][pluX])){
        towardTiles[count] = tile[pluY][pluX];
        countToward++;
    }
    if(isToward(4, tile[pluY][x])){
        towardTiles[count] = tile[pluY][x];
        countToward++;
    }
    else if(isToward(5, tile[pluY][munX])){
        towardTiles[count] = tile[munY][munX];
        countToward++;
    }
    else if(isToward(6, tile[y][munX])){
        towardTiles[count] = tile[y][munX];
        countToward++;
    }
    else if(isToward(7, tile[munY][munX])){
        towardTiles[count] = tile[munY][munX];
        countToward++;
    }
    return towardTiles;
}
function createAwayArray(tile, y , x){
    awayTiles = [];
    countAway = 0;
    if ((y-1) < 0){
        munY= gridSize % (gridSize + (y-1));
    }
    if((y+1) > gridSize){
        pluY= gridSize % (gridSize + (y+1));  
    }
    else{
        pluY = y;
        munY = y;
    }
    if((x-1) < 0){
        munX = gridSize % (gridSize + (x-1));
    }
    if((x+1) > gridSize){
        pluX = gridSize % (gridSize + (x+1));
    }
    else{
        pluX = x;
        munX = x;
    }
    if(isAway(0, tile[munY][x])){
        awayTiles[count] = tile[munY][x];
        countAway++;
    }
    if(isAway(1, tile[munY][pluX])){
        awayTiles[count] = tile[munY][pluX];
        countAway++;
    }
    if(isAway(2, tile[y][pluX])){
        awayTiles[count] = tile[y][pluX];
        countAway++;
    }
    if(isAway(3, tile[pluY][pluX])){
        awayTiles[count] = tile[pluYY][pluX];
        countAway++;
    }
    if(isAway(4, tile[pluY][x])){
        awayTiles[count] = tile[pluY][x];
        countAway++;
    }
    else if(isAway(5, tile[pluY][munX])){
        awayTiles[count] = tile[pluY][munX];
        countAway++;
    }
    else if(isAway(6, tile[y][munX])){
        awayTiles[count] = tile[y][munX];
        countAway++;
    }
    else if(isAway(7, tile[munY][munX])){
        awayTiles[count] = tile[munY][munX];
        countAway++;
    }
    return awayTiles;
}