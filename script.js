window.onload = function () {
    var seconds = 00;
    var tense = 00;
    var outputSeconds = document.getElementById("seconds");
    var outputTens = document.getElementById("tense");
    var outputMins = document.getElementById("mins");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");
    var interval;

    buttonStart.addEventListener("click", () => { //the '() =>' is called the arrow function expression i.e a function you dont indend on calling again larer in the program
        clearInterval(interval);
        interval = setInterval(startTime, 10);
    });

    buttonStop.addEventListener("click", () => {
        clearInterval(interval);
    });

    buttonReset.addEventListener("click", () => {
        clearInterval(interval);
        tense = "00";
        seconds = "00";
        mins = "00";
        outputMins.innerHTML = mins;
        outputSeconds.innerHTML = seconds;
        outputTens.innerHTML = tense;
    });

    function startTime() {
        tense++;
        if (tense <= 9) {
            outputTens.innerHTML = "0" + tense;
        }
        if (tense > 9) {
            outputTens.innerHTML = tense;
        }
        if (tense > 99) {
            seconds++;
            outputTens.innerHTML = "0" + seconds;
            tense = 00;
            outputSeconds.innerHTML = "0" + seconds;
        }
      /*  if (seconds > 60) {
            mins++;
            outputSeconds.innerHTML = "0" + seconds;
            seconds = 00;
            outputMins.innerHTML = "0" + mins;
        }
*/
    }
}