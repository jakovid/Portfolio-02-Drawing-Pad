import { status } from "./drawingStatus";

function domStatusUpdate() {
    //select elements
    let colorStatus = document.getElementById('colorStatus');
    let sizeStatus = document.getElementById('sizeStatus');
    //update inner html
    colorStatus.innerHTML = `${status.color}`;
    sizeStatus.innerHTML = `${status.currentSize} x ${status.currentSize}`;
}

export {domStatusUpdate};