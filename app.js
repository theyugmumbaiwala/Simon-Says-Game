let gameseq = [];
let userseq = [];
let btns = ["red","purple","green","yellow"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let highscore = 0;
let h3 = document.querySelector("h3");

// To start the game
document.addEventListener("keypress", function(){
    if(started== false){
        h2.innerText = "Game Started"
        started == true;
        levelup();
    }
});

// to level up

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level} `;
    let rand = Math.floor(Math.random()*3);
    // console.log(rand);
    let randcolr = btns[rand];
    // console.log(randcolr);
    let randbtn = document.querySelector(`.${randcolr}`);
    // console.log(randbtn);
    gameseq.push(randcolr);
    // console.log(gameseq);
    buttonflash(randbtn,"flash");
    if(highscore<level){
        highscore = level;
        console.log(highscore);
        h3.innerText = `Highest Score - ${highscore}`;
    }
}
// to flash button

function buttonflash(btn,color){

    btn.classList.add(color);
    setTimeout(function(){
        btn.classList.remove(color);
    },300);
}

function btnpress(){
    let btn = this;
    buttonflash(btn,"userflash");

    userbtn = btn.getAttribute("id");

    userseq.push(userbtn);

    checkresult(userseq.length-1);

}

let allbtn = document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click", btnpress);
}

function checkresult(idx){
    // console.log(`level ${level}`)
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h2.innerText = `game over! Your Score was ${level}; Press any key to start over!`;
        gameover();
        reset();
    }
}

function reset(){
    started == false;
    gameseq = [];
    userseq = [];
    level =0;
}

function gameover(){
    let body = document.querySelector("body");
    body.classList.add("gameover");
    setTimeout(function(){
        body.classList.remove("gameover");
    },200);
}
