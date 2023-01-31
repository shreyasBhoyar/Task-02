//Creating and accessing the elements
var timerContainer = document.createElement("div");
var title = document.createElement("h1");
var parent = document.getElementsByClassName("parent")[0];
var timerValue = document.createElement("p");
var reset = document.createElement("button");
var start = document.createElement("button");
var pause = document.createElement("button");
var radioButton2 = document.getElementById("timer");

//Setting the attributes
timerContainer.setAttribute("class","timerContainer")
title.setAttribute("class","timerHeading")
title.innerHTML = "Timer"
timerValue.setAttribute("id","timerValue")
timerValue.innerHTML = '00 : 00 : 00 : 000 '
start.setAttribute("id","start")
pause.setAttribute("id","pause")
reset.setAttribute("id","reset")
start.innerHTML = "START"
pause.innerHTML = "PAUSE"
reset.innerHTML = "RESET"

//Linking the elements
radioButton2.addEventListener("click",()=>{
    if(parent.children.length>3){
        parent.removeChild(parent.lastElementChild)
    }
    parent.appendChild(timerContainer)
})
timerContainer.appendChild(title)
timerContainer.appendChild(timerValue)
timerContainer.appendChild(start)
timerContainer.appendChild(pause)
timerContainer.appendChild(reset)


let [milliseconds,seconds,minutes,hours] = [0,0,0,0];

let int = null;


start.addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

pause.addEventListener('click', ()=>{
    clearInterval(int);
});

reset.addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerValue.innerHTML = '00 : 00 : 00 : 000 ';
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }


let h = hours < 10 ? "0" + hours : hours;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;
let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

timerValue.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}