function acceptCookie(e){
    e.parentNode.parentNode.removeChild(e.parentNode)
}

var high=document.getElementsByClassName("high");
var low=document.getElementsByClassName("low");

var htf=[]
var ltf=[]

function changeTempScale(e){
    if (e.value=="c"){
        changeToCelsius()
    }
    else {
        changeToFahrenheight()
    }
}
function changeToCelsius(){
    for (var i=0; i<high.length; i++){
        var t=parseInt(high[i].innerText)
        htf.push(t);
        high[i].innerText=Math.floor((t-32)*5/9);
    }        
    for (var i=0; i<low.length; i++){
        var t=parseInt(low[i].innerText)
        ltf.push(t);
        low[i].innerText=Math.floor((t-32)*5/9);
    }
}
function changeToFahrenheight(){
    for (var i=0; i<high.length; i++){
        high[i].innerText=htf[i];
    }        
    for (var i=0; i<low.length; i++){
        low[i].innerText=ltf[i]
    }
}