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

function importPreset(num) {
    importString(presets[num]);
}


/*
    KEY:
    0 = two stacked all land
    1 = two stacked all water
    2 = four quadrants moving together island
    3 = four quadrants moving apart island
*/
const presets = [
    '',
    '',
    '',
    ''
]