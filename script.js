score=0;
document.onkeydown = function(e){
    console.log("key code is:",e.keyCode)
    if(e.keyCode==38){
        Jerry= document.querySelector('.Jerry');
        Jerry.classList.add('animateJerry');
        setTimeout(() => {
            Jerry.classList.remove('animateJerry')
        }, 700);
        
        }
        if(e.keyCode==39){
            Jerry = document.querySelector('.Jerry');
            JerryX = parseInt(window.getComputedStyle(Jerry,null).getPropertyValue('left'));
            Jerry.style.left = JerryX + 112 + "px";
    
    }
    if(e.keyCode==37){
        Jerry = document.querySelector('.Jerry');
        JerryX = parseInt(window.getComputedStyle(Jerry,null).getPropertyValue('left'));
        Jerry.style.left = (JerryX - 112 )+ "px";

}
}
setInterval(() => {
    Jerry = document.querrySelector('.Jerry');
    gameOver = document.querySelector('.gameOver');
    obstacle = doccument.querySelector('.obstacle');
   
    dx = parseInt(window.getComputedStyle(Jerry,null).getPropertyValue('left'));
    dx =parseInt( window.getComputedStyle(Jerry,null).getPropertyValue('top'));

    ox =parseInt( window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(ds-ox);
    offsetY = Math.abs(dy-oy);
    console.log(offsetX, offsetY)
    if(offsetX<133 && offsetY<112){
        gameOver.style.visibility ='viisible';
        obstacle.classList.remove('obstacleAni')
        obstacle.classList.remove('obstacleAni')
    }
    else{
        score+1;
        updateScore(score);

    }
}, 100);
function updateScore(score){
    ServiceWorkerContainer.innerHTML="Your Score:" + score
}
