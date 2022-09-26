const cronometro = document.querySelector('.cronometro');
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
function contador() {
    for (let a=0; a=6; a++){
        for (let b=0; b=6; b++){
            for (let c=0; c=6; c++){
                for (let d=0; d=6; d++){
                    for (let e=0; e=6; e++){
                        for (let f=0; f=6; f++){
                            cronometro.innerHTML = `${a}${b}${c}${d}${e}${f}`;
                            sleep(1000);
                        }
                    }
                }
            }
        }
    }
}
