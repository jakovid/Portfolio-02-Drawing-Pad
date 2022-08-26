import { makeDrawingPad } from "./modules/makeDrawingPad";
import { resetDrawingPad } from "./modules/resetDrawingPad";
import { status } from "./modules/drawingStatus";

(function(){
    var drawingPadMain = {
        init: function() {
            this.cacheBtns();
            this.bindEvents();
            makeDrawingPad(4);
        },
        cacheBtns: function() {
            let blackBtn = document.getElementById('blackBtn');
            let randomBtn = document.getElementById('randomBtn');
            let eraserBtn = document.getElementById('eraserBtn');
            let resetBtn = document.getElementById('resetBtn');
            let sizeSlider = document.getElementById('sizeSlider');
            let setSizeBtn = document.getElementById('setSizeBtn');
        },
        bindEvents: function() {
            resetBtn.addEventListener('click', resetDrawingPad);
            setSizeBtn.addEventListener('click', e => {
                makeDrawingPad(sizeSlider.value);
            })
            console.log(setSizeBtn);
        }
    }
    drawingPadMain.init();
})();