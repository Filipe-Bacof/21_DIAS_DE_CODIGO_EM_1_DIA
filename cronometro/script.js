let thousandths = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let canStart = true;

function start() {
    if (canStart == true){
        interval = setInterval(watch, 10);
        canStart = false;
    } else {
        return;
    }
}
// bug: if the var "canStart" doesn't exist, the interval can be activated infinite times... solved!

function pause() {
    clearInterval(interval);
    canStart = true;
}

function end() {
    clearInterval(interval);
    thousandths = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('watch').innerText = `00:00:00:00`;
    canStart = true;
}

function twoDigits(digit) {
    if(digit<10) {
        return(`0${digit}`);
    } else {
        return(digit);
    }
}

function watch() {
    thousandths++;
    if(thousandths==60){
        seconds++;
        thousandths=0;
    }
    if(seconds==60) {
        minutes++;
        seconds=0;
    }
    if(minutes==60) {
        hours++;
        minutes=0;
    }
    document.getElementById('watch').innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}:${twoDigits(thousandths)}`;
}