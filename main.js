var sec = 0
var min = 0

var interval 

function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
    }
    document.getElementById('crono').innerText=min+':'+sec
}

function start() {
    watch()
    interval=setInterval(watch,100)
}
function pause() {
   clearInterval(interval)
}
function stop() {
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('crono').innerText='00:00'
}
