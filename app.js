var minVar = 0;
var secVar = 0;
var msecVar = 0;
var interval;
var startButton=document.getElementById("startbtn");
var stoptButton=document.getElementById("stopbtn");
var resetButton=document.getElementById("resetbtn");
stoptButton.disabled=true;
resetButton.disabled=true;
function msecF() {
    msecVar++;
    var msecL = document.getElementById("msecH");
    msecL.innerHTML = msecVar;
    if (msecVar >= 100) {
        secVar++;
        var secL = document.getElementById("secH");
        secL.innerHTML = secVar;
        msecVar = 0;
    }
    if (secVar >= 60) {
        minVar++;
        var minL = document.getElementById("minH");
        minL.innerHTML = minVar;
        secVar = 0;
    }


}
function start() {
    msecF();

    interval = setInterval(msecF, 10);
    startButton.disabled=true;
    stoptButton.disabled=false;
resetButton.disabled=false;
}
function stop(){
    clearInterval(interval);
    startButton.disabled=false;
    stoptButton.disabled=true;
}
function reset(){
    msecVar=0;
    minVar=0;
    secVar=0;
    var secL = document.getElementById("secH");
    var msecL = document.getElementById("msecH");
    var minL = document.getElementById("minH");
    secL.innerHTML=0;
    minL.innerHTML=0;
    msecL.innerHTML=0;
    stop();
    startButton.disabled=false;
    stoptButton.disabled=true;
resetButton.disabled=true;

}