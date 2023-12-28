let rock = document.querySelector("#rockButt")
let paper = document.querySelector("#paperButt")
let scissor = document.querySelector("#scissorButt")
let rockevent = document.querySelector('.rockText')
let rockk = document.querySelector ('#rock')
let paperevent = document.querySelector('.paperText')
let paperr = document.querySelector ('#paper')
let scissorevent = document.querySelector('.scissorText')
let scissorr = document.querySelector ('#scissor')
let changeText = document.querySelector ('#textComp')
let colorChange = document.querySelector('#computer')
let plScore = document.querySelector('#playerScore')
let cpScore = document.querySelector('#compScore')
let face = document.querySelector('#face')
let playAgai = document.querySelector('#playAgain')
let pcrock1 = document.querySelector('pcrock')
let pcpaper1 = document.querySelector('pcpaper')
let pcscissor1 = document.querySelector('pcscissor')
let todos = document.querySelector('.todos')
let start = document.querySelector('.start')
let startt = document.querySelector('.startGame')
    end = document.querySelector('.EndGame')
    endscorepl = document.querySelector('#EndplayerScore')
    endscorecp = document.querySelector('#EndcompScore')
    endbutt = document.querySelector('#EndplayAgain')
    buttt = document.querySelector('.buttons')
    butttcp = document.querySelector('.buttonscp')


function startGame() {
    
    start.style.visibility = 'hidden';
    start.style.opacity = '0';
    buttt.style.visibility = 'visible';
    butttcp.style.visibility = 'visible';
}

function endGame() {
    
    todos.style.visibility = 'hidden';
    todos.style.opacity = '0';
    end.style.visibility = 'visible';
    end.style.opacity = '1';
    buttt.style.visibility = 'hidden';
    butttcp.style.visibility = 'hidden';


}

function startGame2() {
    
    todos.style.visibility = 'visible';
    todos.style.opacity = '1';
}

function namerock() {
    
    rockevent.style.visibility = 'visible';
    rockevent.style.opacity = '1';
}
function namerockout() {
    
    rockevent.style.visibility = 'hidden';
    rockevent.style.opacity = '0';
}
function namepaper() {
    
    paperevent.style.visibility = 'visible';
    paperevent.style.opacity = '1';
}
function namepaperout() {
    
    paperevent.style.visibility = 'hidden';
    paperevent.style.opacity = '0';
}
function namescissor() {
    
    scissorevent.style.visibility = 'visible';
    scissorevent.style.opacity = '1';
}
function namescissorout() {
    
    scissorevent.style.visibility = 'hidden';
    scissorevent.style.opacity = '0';
}

rockk.addEventListener("mouseover", namerock)
rockk.addEventListener("mouseout", namerockout)
paperr.addEventListener("mouseover", namepaper)
paperr.addEventListener("mouseout", namepaperout)
scissorr.addEventListener("mouseover", namescissor)
scissorr.addEventListener("mouseout", namescissorout)
startt.addEventListener('click',() => {    
    startGame();
    startGame2();    
});
// Game
let options = ["ROCK", 'PAPER', "SCISSOR"]
let scoreComp = 0
let scorePlayer = 0

function clickRock() {
    
    // Escolher random
    let random = Math.floor(Math.random() * options.length);
    console.log(random, options[random]);
    if (options[random] == "ROCK") {
        pcscissor.style.backgroundColor= "#e8e4e6"
        pcpaper.style.backgroundColor= "#e8e4e6"
        changeText.textContent ="TIE"
        colorChange.style.backgroundColor = "rgba(119, 128, 0, 0.30)"
        pcrock.style.backgroundColor= "rgba(119, 128, 0, 0.30)"
        
    }
    else if (options[random] == "PAPER") {
        pcrock.style.backgroundColor= "#e8e4e6"
        pcscissor.style.backgroundColor= "#e8e4e6"
        changeText.textContent ="LOSS"
        colorChange.style.backgroundColor = "rgba(128, 0, 0, 0.0.30)"
        scoreComp = scoreComp+1
        pcpaper.style.backgroundColor= "rgba(128, 0, 0, 0.0.30)"
    }
    else {
        pcpaper.style.backgroundColor= "#e8e4e6"
        pcrock.style.backgroundColor= "#e8e4e6"
        changeText.textContent ="WIN"
        colorChange.style.backgroundColor = "rgba(0, 128, 0, 0.30)"
        scorePlayer = scorePlayer+1
        pcscissor.style.backgroundColor= "rgba(0, 128, 0, 0.30)"
    }
    plScore.textContent=scorePlayer
    cpScore.textContent=scoreComp
    endscorepl.textContent=scorePlayer
    endscorecp.textContent=scoreComp
    if (scorePlayer ==5 ) {
        endGame()
        
    }
    else if (scoreComp ==5) {
        endGame()
    }
}

function clickPaper() {
    
    // Escolher random
    let random = Math.floor(Math.random() * options.length);
    console.log(random, options[random]);
    if (options[random] == "PAPER") {
        pcrock.style.backgroundColor= "#e8e4e6"
        pcscissor.style.backgroundColor= "#e8e4e6"
        changeText.textContent ="TIE"
        colorChange.style.backgroundColor = "rgba(119, 128, 0, 0.30)"
        pcpaper.style.backgroundColor= "rgba(119, 128, 0, 0.30)"
        
    }
    else if (options[random] == "SCISSOR") {
        pcpaper.style.backgroundColor= "#e8e4e6"
        pcrock.style.backgroundColor= "#e8e4e6"
        changeText.textContent ="LOSS"
        colorChange.style.backgroundColor = "rgba(128, 0, 0, 0.30)"
        scoreComp = scoreComp+1
        pcscissor.style.backgroundColor= "rgba(128, 0, 0, 0.30)"
    }
    else {
        pcscissor.style.backgroundColor= "#e8e4e6"
        pcpaper.style.backgroundColor= "#e8e4e6"
        changeText.textContent ="WIN"
        colorChange.style.backgroundColor = "rgba(0, 128, 0, 0.30)"
        scorePlayer = scorePlayer+1
        pcrock.style.backgroundColor= "rgba(0, 128, 0, 0.30)"
    }
    plScore.textContent=scorePlayer
    cpScore.textContent=scoreComp
    endscorepl.textContent=scorePlayer
    endscorecp.textContent=scoreComp
    if (scorePlayer ==5 ) {
        endGame()
        
    }
    else if (scoreComp ==5) {
        endGame()
    }
}
function clickScissor() {
    
    // Escolher random
    let random = Math.floor(Math.random() * options.length);
    console.log(random, options[random]);
    if (options[random] == "SCISSOR") {
        pcpaper.style.backgroundColor= "#e8e4e6"
        pcrock.style.backgroundColor= "#e8e4e6"
        changeText.textContent ="TIE"
        colorChange.style.backgroundColor = "rgba(119, 128, 0, 0.30)"
        pcscissor.style.backgroundColor= "rgba(119, 128, 0, 0.30)"
        
    }
    else if (options[random] == "ROCK") {
        pcscissor.style.backgroundColor= "#e8e4e6"
        pcpaper.style.backgroundColor= "#e8e4e6"
        changeText.textContent ="LOSS"
        colorChange.style.backgroundColor = "rgba(128, 0, 0, 0.30)"
        scoreComp = scoreComp+1
        pcrock.style.backgroundColor= "rgba(128, 0, 0, 0.30)"
    }
    else {
        pcrock.style.backgroundColor= "#e8e4e6"
        pcscissor.style.backgroundColor= "#e8e4e6"
        changeText.textContent ="WIN"
        colorChange.style.background = "rgba(0, 128, 0, 0.30)"
        scorePlayer = scorePlayer+1
        pcpaper.style.backgroundColor= "rgba(0, 128, 0, 0.30)"
    }
    plScore.textContent=scorePlayer
    cpScore.textContent=scoreComp
    endscorepl.textContent=scorePlayer
    endscorecp.textContent=scoreComp
    if (scorePlayer ==5 ) {
        endGame()
        
    }
    else if (scoreComp ==5) {
        endGame()
    }
}

endbutt.addEventListener('click', function(){
    scoreComp = 0
    scorePlayer = 0

    end.style.visibility = 'hidden';
    end.style.opacity = '0';
    buttt.style.visibility = 'visible';
    butttcp.style.visibility = 'visible';
    startGame2()
})

rockk.addEventListener('click',clickRock)
playAgai.addEventListener('click',endGame)
paperr.addEventListener('click',clickPaper)
scissorr.addEventListener('click',clickScissor)

