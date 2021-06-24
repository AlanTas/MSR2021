var totalSeconds = 0; // reset this to zero when you reset as below
var secondsLabel = document.getElementById("seconds");
var minutesLabel = document.getElementById("minutes");
document.getElementById("reset").addEventListener("click",resertTimer);

setInterval(setTime, 1000);

function setTime(){
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds%60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val){
    var valString = val + "";
    if(valString.length < 2)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
}

// reset() function
function resertTimer(){
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    totalSeconds = 0
}