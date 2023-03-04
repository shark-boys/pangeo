class Tile{
    constructor(h, dir, vol, w, la){
this.height = h;
this.direction = dir;
this.isVolcano = vol;
this.weight = w;
this.isLava = la;
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
setWeight(newWeight){
    this.weight = newWeight;
}
setIsLava(newLava){
    this.isLava = newLava;
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
getWeight(){
    return this.weight;
}
getIsLava(){
    return this.isLava;
}
};