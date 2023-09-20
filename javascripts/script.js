

// 2. Set a timer 
intervalID = setInterval(buttonPos, 1000);

const target = document.querySelector('#target');
function buttonPos(){
    // 1. Create a target permet de changer la position de manière aléatoire 
    const randomTop = Math.random() * 95;
    const randomLeft = Math.random() * 95;
    target.style.top = randomTop + "%";
    target.style.left = randomLeft + "%";
}

// 3. Add the player with the mouse
const hitting = document.querySelector("#hit");
const scoring = document.querySelector("#score");

target.addEventListener('click', hit);

let hitCounter = 0;
let scoreCounter = 0;

function hit(){
    hitCounter++; 
    hitting.textContent= hitCounter; //incrémente le hit: chaque fois de 1
    scoreCounter += 5; 
    scoring.textContent= scoreCounter; //augmente le score: de 5 chaque fois
}

// 4. Game over

let tempsCounter = 5; // duree de la parie en seconde
const timing = document.querySelector("#temps");
const finalScore = document.querySelector('#finalScore');
const affichageScore =  document.querySelector('#affichageScore');
//gameover
setTimeout(function(){
    clearInterval(intervalID); //stop les mvt
    target.removeEventListener('click', hit); // stop les shoot
    // montre le panneau des score
    finalScore.innerText = scoreCounter; 
    affichageScore.style.display = "initial";
}, tempsCounter * 1000)




