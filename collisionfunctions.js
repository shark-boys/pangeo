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