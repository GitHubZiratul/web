window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStop.onclick = function(){
        clearInterval(Interval);
    }

    buttonStart.onclick = function(){
        Interval = setInterval(startTimer, 10);

    }

    

    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;

    }
    function startTimer(){
        tens++;
        if (tens<9){
            appendTens.innerHTML = "0" + tens;

        }
        if (tens>9){
            appendTens.innerHTML = tens;
        }
    }

}
