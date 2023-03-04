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