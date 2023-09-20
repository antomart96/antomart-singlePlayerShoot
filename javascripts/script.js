

// 2. Set a timer 
intervalID = setInterval(buttonPos, 1000);

const target = document.querySelector('#target');
function buttonPos(){
    // 1. Create a target permet de changer la position de manière aléatoire 
    const randomTop = Math.random() * 95;
    const randomLeft = Math.random() * 95;
    target.style.top = randomTop + "%";
    target.style.left = randomLeft + "%";
    // on fait le décompte des secondes on le met dans cette fonction pcq ça fonctionne chaque seonde
    // ATTTENTION à modifier si le jeu doit être plus rapide pas opti antoine 
    tempsCounter--;
    timing.innerText = tempsCounter;
    if (tempsCounter <= 0) {
        gameOver();
    }
}

// 3. Add the player with the mouse
const hitting = document.querySelector("#hit");
const scoring = document.querySelector("#score");

target.addEventListener('click', hit);

let hitCounter = 0;
let scoreCounter = 0;

function hit(){
    hitCounter++; 
    hitting.innerText= hitCounter; //incrémente le hit: chaque fois de 1
    scoreCounter += 5; 
    scoring.innerText= scoreCounter; //augmente le score: de 5 chaque fois
}

// 4. Game over

let tempsCounter = 5; // duree de la parie en seconde
const timing = document.querySelector("#temps");
const finalScore = document.querySelector('#finalScore');
const affichageScore =  document.querySelector('#affichageScore');
const retry =  document.querySelector('#Retry');
    // Fonction qui fait la fin de la parite
//setTimeout(gameOver, tempsCounter * 1000); // on ne l'utise plus pcq la question de time est dans la fonction button

function gameOver(){
    clearInterval(intervalID); //stop les mvt
    target.removeEventListener('click', hit); // stop les shoot
    // montre le panneau des score
    finalScore.innerText = scoreCounter; 
    affichageScore.style.display = "block";
}
//création du boutton retry 
retry.addEventListener('click', retryGame);

function retryGame(){
    //on renitialise les compteurs
    hitCounter = 0; 
    hitting.innerText= hitCounter;
    scoreCounter = 0; 
    scoring.innerText= scoreCounter; 
    tempsCounter = 5;
    timing.innerText = tempsCounter;
    //on recache l'affichage de fin de game
    affichageScore.style.display = "none"; 
    //on relance la fonction pour relancer le timing et recommencer la parite
    //setTimeout(gameOver, tempsCounter * 1000); //on ne l'utise plus pcq la question de time est dans la fonction button
    //on relance la fonction bouton puisqu'on l'a désactivé dans la fonction gamerOver()
    target.addEventListener('click', hit);
    //On relance la fonction qui permet le mouvement aléatoire du bouton target
    intervalID = setInterval(buttonPos, 1000);
}
