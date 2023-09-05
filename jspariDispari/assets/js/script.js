// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.

let sceltaUt = document.getElementById('numero');
let pariUt = document.getElementById('pari');
let dispariUt = document.getElementById('dispari');
let pariDispari; //true se è pari, false se è dispari

pariUt.addEventListener('click', function () {
    if(result(true)){
        console.log('hai vinto');
    } else{
        console.log('hai perso');
    }
})

dispariUt.addEventListener('click', function () {
    if(result(false)){
        console.log('hai vinto');
    } else {
        console.log('hai perso');
    }
})

function result (pariDispari){
    let pcNumber = Number(Math.floor(Math.random()* 5) + 1);
    let randomNum = pcNumber + Number(sceltaUt.value);
    console.log("Scelta: " + pariDispari + " numero inserito: " + sceltaUt.value + " numero generato: " + pcNumber + " somma: " + randomNum  );
    if(pariDispari == true && randomNum% 2 == 0){
        console.log("pari");
        return true;
    } else if(pariDispari == false && randomNum% 2 != 0){
        console.log("dispari");
       return true; 
    }
    return false;
}