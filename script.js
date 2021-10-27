var audio = new Audio('audio.mp3');
var score;
if(typeof localStorage.getItem('score') != NaN){
    score = localStorage.getItem('score')
    document.getElementById('score').innerText=score;
}else{
    score = 0;
    document.getElementById('score').innerText='0';
}

function changeImg(){
    const img = document.getElementById('img')
    img.src="/img/no-background-rick-smile.png";

    audio.play();
    score++
    if(typeof localStorage.getItem('score') != NaN){
        if(localStorage.getItem('score') < score){
            localStorage.setItem('score', score)
            document.getElementById('score').innerText=score;
        }
    }
}

function clearImg(){
    const img = document.getElementById('img')
    img.src="/img/no-background-rick.png";
    audio.pause()
    audio.currentTime = 0;
}