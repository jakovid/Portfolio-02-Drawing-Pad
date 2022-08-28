import { status } from "./drawingStatus";
import { draw } from "./draw";

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
        box.addEventListener("click", draw);
        box.addEventListener("mouseover", draw);
        drawingPad.append(box);
    }
    status.currentSize = size;
}

export { makeDrawingPad };