class Tile{
    constructor(h, dir, vol){
this.height = h;
this.direction = dir;
this.isVolcano = vol;
}
setHeight(height, newHeight){
    this.height = newHeight;
}
setDirection(direction, newDirection){
    this.direction = newDirection;
}
setIsVolcano(volcano,newBool){
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