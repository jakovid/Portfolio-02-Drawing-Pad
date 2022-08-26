import { makeDrawingPad } from "./modules/makeDrawingPad";
import { resetDrawingPad } from "./modules/resetDrawingPad";
import { domStatusUpdate } from "./modules/domStatusUpdate";
import { changeColor } from "./modules/changeColor";

(function(){
    var drawingPadMain = {
        init: function() {
            this.cacheBtns();
            this.bindEvents();
            makeDrawingPad(4);
            domStatusUpdate();
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
            blackBtn.addEventListener('click', e => {
                changeColor('black');
                domStatusUpdate();
            });
            randomBtn.addEventListener('click', e => {
                changeColor('random');
                domStatusUpdate();
            })
            eraserBtn.addEventListener('click', e => {
                changeColor('eraser');
                domStatusUpdate();
            })
            resetBtn.addEventListener('click', resetDrawingPad);
            setSizeBtn.addEventListener('click', e => {
                makeDrawingPad(sizeSlider.value);
                domStatusUpdate();
            })
            console.log(setSizeBtn);
        }
    }
    drawingPadMain.init();
})();