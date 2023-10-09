var sec = 0
var min = 0
var hr = 0

var interval 

function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if (min==60) {
            hr++
            min=0
        }
    }
    document.getElementById('crono').innerText= decimal(hr)+ ':' + decimal(min) + ':' + decimal(sec)
}

function decimal(digito) {
    if(digito<10){
        return('0'+digito)
    }else{
        return(digito)
    }
}

function start() {
    watch()
    interval=setInterval(watch,1000)
}
function pause() {
   clearInterval(interval)
}
function stop() {
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('crono').innerText='00:00:00'
}
