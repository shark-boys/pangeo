class Tile{
    constructor(rec, h, dir){
this.rect = rec;
this.height = h;
this.direction = dir;
}
setHeight(height, newHeight){
    this.height = newHeight;
}
setDirection(direction, newDirection){
    this.direction = newDirection;
}
getHeight(){
    return this.height;
}
getDirection(){
    return this.direction;
}
};