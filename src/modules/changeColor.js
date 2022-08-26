import { status } from "./drawingStatus";

function changeColor(selectedColor) {
    status.color = `${selectedColor}`;
}

export {changeColor};