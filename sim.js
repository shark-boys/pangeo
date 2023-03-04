function simulate(){
    heatmap = generateHeatMap();
    for (i = 0; i < 2; i++) {
        fraction = gridSize / 2;
        for (y = i * fraction; y < ((i + 1) * fraction); y++) {
            for (x = i * fraction; x < ((i + 1) * fraction); x++) {
               if(heatmap[y][x] >= 2){
                towardsArray = createTowardsArray(tile[y][x]);
                if(towardsArray.length == 4){
                    collide(towardsArray[0],towardsArray[1]);
                    collide(towardsArray[2],towardsArray[3]);
                }
                else{
                    collide(towardsArray[0],towardsArray[1]);
                }
               }
               else if(heatmap[y][x] == 0){
                awayArray = createAwayArray(tile[y][x]);
                if(awayArray.length == 4){
                    submurge(awayArray[0],awayArray[1]);
                    submurge(awayArray[2],awayArray[3]);
                }
                else{
                    submurge(awayArray[0],awayArray[1]);
                }
               }
               else{
                newcell = createTowardsArray(tile[y][x]);
                tile[y][x].height = newcell[0].height;
                tile[y][x].isVolcano = newcell[0].isVolcano;
                tile[y][x].direction = newcell[0].direction;
               }
            }
        }
    }
}
function createTowardsArray(tile){
    towardTiles = [];
    countToward = 0;
    if(isToward(0, tile[y-1][x])){
        if(y<0){
            newY = gridSize % (gridSize + (y-1));
        }
        else{
            newY = y-1;
        }
        towardTiles[count] = tile[newY][x];
        countToward++;
    }
    if(isToward(1, tile[y-1][x+1])){
        if(y<0){
            newY = gridSize % (gridSize + (y-1));
        }
        else{
            newY = y-1;
        }
        if(x > gridSize){
            newX = gridSize % (gridSize + (x+1));
        }
        else {
            newX = x+1;
        }
        towardTiles[count] = tile[newY][newX];
        countToward++;
    }
    if(isToward(2, tile[y][x+1])){
        if(x > gridSize){
            newX = gridSize % (gridSize + (x+1));
        }
        else {
            newX = x+1;
        }
        towardTiles[count] = tile[y][newX];
        countToward++;
    }
    if(isToward(3, tile[y+1][x+1])){
        if(y>gridSize){
            newY = gridSize % (gridSize + (y+1));
        }
        else{
            newY = y+1;
        }
        if(x > gridSize){
            newX = gridSize % (gridSize + (x+1));
        }
        else {
            newX = x+1;
        }
        towardTiles[count] = tile[newY][newX];
        countToward++;
    }
    if(isToward(4, tile[y+1][x])){
        if(y>gridSize){
            newY = gridSize % (gridSize + (y+1));
        }
        else{
            newY = y+1;
        }
        towardTiles[count] = tile[newY][x];
        countToward++;
    }
    else if(isToward(5, tile[y+1][x-1])){
        if(y>gridSize){
            newY = gridSize % (gridSize + (y+1));
        }
        else{
            newY = y+1;
        }
        if(x < 0){
            newX = gridSize % (gridSize + (x-1));
        }
        else {
            newX = x-1;
        }
        towardTiles[count] = tile[newY][newX];
        countToward++;
    }
    else if(isToward(6, tile[y][x-1])){
        if(x < 0){
            newX = gridSize % (gridSize + (x-1));
        }
        else {
            newX = x-1;
        }
        towardTiles[count] = tile[y][newX];
        countToward++;
    }
    else if(isToward(7, tile[y-1][x-1])){
        if(y<0){
            newY = gridSize % (gridSize + (y-1));
        }
        else{
            newY = y-1;
        }
        if(x < 0){
            newX = gridSize % (gridSize + (x-1));
        }
        else {
            newX = x-1;
        }
        towardTiles[count] = tile[newY][newX];
        countToward++;
    }
    return towardTiles;
}
function createAwayArray(tile){
    awayTiles = [];
    countAway = 0;
    if(isAway(0, tile[y-1][x])){
        if(y<0){
            newY = gridSize % (gridSize + (y-1));
        }
        else{
            newY = y-1;
        }
        awayTiles[count] = tile[newY][x];
        countAway++;
    }
    if(isAway(1, tile[y-1][x+1])){
        if(y<0){
            newY = gridSize % (gridSize + (y-1));
        }
        else{
            newY = y-1;
        }
        if(x > gridSize){
            newX = gridSize % (gridSize + (x+1));
        }
        else {
            newX = x+1;
        }
        awayTiles[count] = tile[newY][newX];
        countAway++;
    }
    if(isAway(2, tile[y][x+1])){
        if(x > gridSize){
            newX = gridSize % (gridSize + (x+1));
        }
        else {
            newX = x+1;
        }
        awayTiles[count] = tile[y][newX];
        countAway++;
    }
    if(isAway(3, tile[y+1][x+1])){
        if(y>gridSize){
            newY = gridSize % (gridSize + (y+1));
        }
        else{
            newY = y+1;
        }
        if(x > gridSize){
            newX = gridSize % (gridSize + (x+1));
        }
        else {
            newX = x+1;
        }
        awayTiles[count] = tile[newY][newX];
        countAway++;
    }
    if(isAway(4, tile[y+1][x])){
        if(y>gridSize){
            newY = gridSize % (gridSize + (y+1));
        }
        else{
            newY = y+1;
        }
        awayTiles[count] = tile[newY][x];
        countAway++;
    }
    else if(isAway(5, tile[y+1][x-1])){
        if(y>gridSize){
            newY = gridSize % (gridSize + (y+1));
        }
        else{
            newY = y+1;
        }
        if(x < 0){
            newX = gridSize % (gridSize + (x-1));
        }
        else {
            newX = x-1;
        }
        awayTiles[count] = tile[newY][newX];
        countAway++;
    }
    else if(isAway(6, tile[y][x-1])){
        if(x < 0){
            newX = gridSize % (gridSize + (x-1));
        }
        else {
            newX = x-1;
        }
        awayTiles[count] = tile[y][newX];
        countAway++;
    }
    else if(isAway(7, tile[y-1][x-1])){
        if(y<0){
            newY = gridSize % (gridSize + (y-1));
        }
        else{
            newY = y-1;
        }
        if(x < 0){
            newX = gridSize % (gridSize + (x-1));
        }
        else {
            newX = x-1;
        }
        awayTiles[count] = tile[newY][newX];
        countAway++;
    }
    return awayTiles;
}
function collide(tile1,tile2){
if (tile1.weight > tile2.weight){
    fourException(tile2);
}
else if(tile1.weight < tile2.weight){
    fourException(tile1);
}
else {
    fourException(tile1);
    fourException(tile2);
}
}
 function submurge(tile1,tile2){
    if (tile1.height >= 0 && tile2.height >= 0){
        tile1.height = tile1.height - 1;
        tile2.height = tile2.height - 1;
    }
    else if(tile1.height < 0 && tile2.height < 0){
        negFourException(tile1,tile2);
    }
    
    else {
        negFourException(tile1,tile2);    
    }
 }

 function negFourException(tile1, tile2){
            if(tile1.height == -4 && tile2.height != -4){
            tile1.isVolcano == true;
            tile1.isLava == true;
            tile2.height = tile2.height - 1;
        }
        if(tile2.height == -4 && tile1.height != -4){
            tile2.isVolcano == true;
            tile2.isLava == true;
            tile1.height = tile1.height - 1;
        }
        else if(tile1.height == -4 && tile2.height == -4){
            tile1.isLava == true;
            tile1.isVolcano == true;
            tile2.isLava == true;
            tile2.isVolcano == true;
        }
        else{
        tile1.height = tile1.height - 1;
        tile2.height = tile2.height - 1;
 }
}
function fourException(tile){
    if(tile.height == 4 && tile.isLava == true){
            tile.isVolcano = true;
    }
    else if(tile.height < 4){
        tile.height = tile.height + 1;
    }
    else {

    }
}