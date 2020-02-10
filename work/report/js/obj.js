

var timerid = null;

/*var object = document.getElementById("cat");

object.onclick= function(){
    var x = Math.floor(Math.random()*300);
    var y = Math.floor(Math.random()*300);
    object.style.right = x + 'px';
    object.style.left = y + 'px';

};*/


function move()
{
document.getElementById('duck').style.right = 
    parseInt(document.getElementById('duck').style.right) + 1 + 'px'; 


}

window.onload=function()
{   

document.getElementById('duck').onclick=function(){

    var x = Math.floor(Math.random()*500);
    var y = Math.floor(Math.random()*500);
    document.getElementById('duck').style.right = x + 'px';
    document.getElementById('duck').style.top = y + 'px';


    /*if(timerid == null){
        timerid = setInterval("move()", 10);

    }else{
        clearInterval(timerid);
        timerid = null;
    }*/
}   


var button2 = document.getElementById('button2');
button2.onclick= reloadPage;

    function reloadPage(){
        window.location.reload();
    }

}
