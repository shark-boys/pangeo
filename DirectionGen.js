function generateDirections(quadrent, tileArray){    //for loop to go through quadrents?
    let rand = Math.floor((math.random() * 7)); //random number between 0 to 7 (0 is north)
    for (let i = 0;i<quadrent.length; i++){     //iterate through tiles in the quadrent
        quadrent[i].setHeight(rand);            //set direction to the random number we generated
    }
}