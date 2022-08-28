import { status } from "./drawingStatus";

function draw(event) {
    if (event.type === 'click') {
        console.log('click');
        console.log(status.drawing);
        status.drawing = !status.drawing;
    }

    if (status.drawing) {
        if(status.color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = `${status.color}`;
        }
    }
}

export { draw };