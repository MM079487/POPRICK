var audio = new Audio('audio.mp3');
var img = document.getElementById('img')
var area = document.body
var score;

if(typeof localStorage.getItem('score') != NaN){
    score = localStorage.getItem('score')
    document.getElementById('score').innerText=score;
}else{
    score = 0;
    document.getElementById('score').innerText='0';
}

checkScore()

function checkScore(){
    if(score > 9999){
        document.getElementById('score').style.color="red";
        document.title="POPRICK [Pro Mode]"
    }
}

function changeImg(){
    try{
        const img = document.getElementById('img')
        img.src="/img/no-background-rick-smile.png";
        score++
        if(typeof localStorage.getItem('score') != NaN){
            if(localStorage.getItem('score') < score){
                localStorage.setItem('score', score)
                document.getElementById('score').innerText=score;
                checkScore()
            }
        }
        audio.pause()
        audio.currentTime =0;
        audio.play();
    }catch (err){
        return false
    }
}

function clearImg(){
    const img = document.getElementById('img')
    img.src="/img/no-background-rick.png";
}

var muted = false
function mute () {
    if(muted == false){
        document.getElementById('mute-b').className = 'fas fa-volume-mute fa-5x'
        console.log('muted')
        muted = true
        audio.pause()
        audio = NaN;
    }else{
        document.getElementById('mute-b').className = 'fas fa-volume-up fa-5x'
        muted = false
        audio = new Audio('audio.mp3');
        console.log("unmuted")
    }
}

var mute_b = document.getElementById('mute-b')

mute_b.addEventListener('mousedown', () => {
    mute()
})

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
   (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
    area.addEventListener('touchstart', () => {
        changeImg()
    })

    area.addEventListener('touchend', () => {
        clearImg()
    })

}else{

    area.addEventListener('mousedown', () => {
        changeImg()
    })

    area.addEventListener('mouseup', () => {
        clearImg()
    })

    area.addEventListener('keydown', () => {
        changeImg()
    })

    area.addEventListener('keyup', () => {
        clearImg()
    })
}