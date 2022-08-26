import { status } from "./drawingStatus";

function makeDrawingPad(size) {
    //clear the pad
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((div) => div.remove());
    //build new area
    let drawingPad = document.getElementById('drawingPad');
    drawingPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++) {
        let box = document.createElement("div");
        box.className = 'box';
        box.innerHTML = '.';
        // box.addEventListener("mousedown", colorBox);
        // box.addEventListener("click", colorBox)
        // box.addEventListener("mouseover", colorBox)
        drawingPad.append(box);
    }
    status.currentSize = size;
}

export { makeDrawingPad };