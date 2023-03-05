function exportToStr() {
    console.log(JSON.stringify(tiles));
}

function importString(str) {
    tiles = JSON.parse(str);
    if (isTectonic) {
        drawT();
    } else {
        draw();
    }
}