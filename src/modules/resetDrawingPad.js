function resetDrawingPad() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((div) => div.style.backgroundColor = 'white');
}

export {resetDrawingPad};