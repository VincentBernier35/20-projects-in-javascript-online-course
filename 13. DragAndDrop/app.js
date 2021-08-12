let base = document.querySelector('.base');
const premiereCase = document.getElementById('premiere-case');
const boxes = document.querySelectorAll(".case");
const destroy = document.querySelector('.destroy');
const allCases = [];

for(i = 0; i < boxes.length; i++){
    allCases.push(boxes[i]);
}

let indexPhoto = 1;

base.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`

for(const vide of allCases) {
    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('drop', dragDrop);
}

function dragDrop() {
    this.appendChild(base);
}


function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
}

