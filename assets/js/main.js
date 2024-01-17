/* --------------------------------------------------------------------------------

Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

-------------------------------------------------------------------------------- */


const gridHtml = document.getElementById('griglia');
const playButtonHtml = document.getElementById('play-button');

// funzione che crea e restituisce una cella (elemento div con classe "cell")
function createCell(difficulty) {
    const cell = document.createElement('div');
    
    cell.classList.add('cell');

    switch (difficulty) {
        case "easy":
            cell.classList.add('easy-mode-cell');
            break;
        case "medium":
            cell.classList.add('medium-mode-cell');
            break;
        case "hard":
            cell.classList.add('hard-mode-cell');
            break;
    }

    cell.addEventListener('click', function(){
        this.classList.toggle('active');
        console.log(this.querySelector('span').innerText);
    });

    return cell;
}

// al click del bottone play viene generata la griglia di 100 celle
playButtonHtml.addEventListener('click', function(){
    const mode = document.getElementById('game-mode');
    let howManyCells = 0;

    switch (mode.value) {
        case "easy":
            howManyCells = 100;
            //gridHtml.classList.add('easy-mode-grid');
            break;
        case "medium":
            howManyCells = 81;
            //gridHtml.classList.add('medium-mode-grid');
            break;
        case "hard":
            howManyCells = 49;
            //gridHtml.classList.add('hard-mode-grid');
            break;
    }


    // se non è ancora stata generata alcuna griglia..
    if (gridHtml.querySelectorAll('div').length === 0) {
        for(let i = 0; i < howManyCells; i++) {
            const cell = createCell(mode.value);
            const number = document.createElement('span');
    
            number.innerText = i+1;
    
            cell.append(number);
    
            gridHtml.append(cell);
        }
    }
    

});



