let cnt=0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let bravo = document.getElementById('a');

function play() {
    bravo.play();
}

let increment = function (){
    cnt++;
    play();
    countEl.textContent = cnt+" bravo ";
}

let save = function (){
    let countString = cnt + " - ";
    saveEl.textContent += countString;
    countEl.textContent = 0;
    cnt = 0;

}





