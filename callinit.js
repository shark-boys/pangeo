import {Tile} from "Tiles.js";
function init(){
    let maxLength = 100;
    let maxHeight = 100;
    const quadrent1 = [];
    const quadrent2 = [];
    const quadrent3 = [];
    const quadrent4 = [];

    for (let i = 0; i<(maxLength * maxHeight)/4;i++){
        quadrent1[i] = new Tile(0,0);
    }
    for (let i = (maxLength * maxHeight)/4; i<(maxLength * maxHeight)/2;i++){
        quadrent2[i] = new Tile(0,0);
    }
   for (let i = (maxHeight * maxLength)/2; i<(3 * (maxLength * maxHeight))/4;i++){
    quadrent3[i] = new Tile(0,0);
    }
    for (let i = (3 * (maxLength * maxHeight))/4; i<(maxLength * maxHeight);i++){
        quadrent4[i] = new Tile(0,0);
    }
}