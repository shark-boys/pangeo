class Tile{
    constructor(h, dir, vol){
this.height = h;
this.direction = dir;
this.isVolcano = vol;
}
setHeight(newHeight){
    this.height = newHeight;
}
setDirection(newDirection){
    this.direction = newDirection;
}
setIsVolcano(newBool){
    this.isVolcano = newBool;
}
getHeight(){
    return this.height;
}
getDirection(){
    return this.direction;
}

getIsVolcano(){
    return this.isVolcano;
}
};