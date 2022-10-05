let thousandths = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;


function start() {
    interval = setInterval(watch, 10);
}

function pause() {
    clearInterval(interval);
}

function end() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    document.getElementById('watch').innerText = `00:00:00:00`;
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