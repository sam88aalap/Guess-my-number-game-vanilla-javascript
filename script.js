'use strict';

let number = generateNumber();
let score = 20;
let highScore = 0;

// document.querySelector('.score').textContent = score;
// document.querySelector('.highscore').textContent =highScore;

function generateNumber(){
    return Math.trunc(Math.random() * 20) + 1;
}
function displayMessage(msg){
    document.querySelector('.message').textContent=msg;
}

function setScore(x){
    document.querySelector('.score').textContent = x;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent='Please select a number';
    }
    else if(guess === number){
            displayMessage('Yey!! You found the number. 🥳');
            document.querySelector('.number').textContent=number;
            document.querySelector('body').style.backgroundColor='#F9CB13';
            document.querySelector('.number').style.width='25rem';
            if(score>highScore) {
                highScore=score;
                document.querySelector('.highscore').textContent =highScore;}
    }
    else if(guess !== number){
        if(score>1){
            displayMessage(guess>number ?'Too Big!😮.':"Too small!🤪.");
            score--;
            setScore(score);
        }
        else{
            displayMessage('GAME OVER. 😖');
            setScore(0);
        }
    }    
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    number = generateNumber();
    displayMessage('Start guessing...');
    setScore(score);
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';

});