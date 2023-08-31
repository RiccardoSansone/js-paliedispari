// Palidroma
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma


const control = document.querySelector('button');
control.addEventListener('click', function(){
    let word = document.getElementById('parola').value;
    let lastletter = word.length - 1;
    let result = 'la parola é palindroma';
    for(let i = 0; i < Math.floor(word.length/2); i++ ){
        if(word[i] != word[lastletter]){
            result ='la tua parola non é palindroma' 
        }
        lastletter--;
    }
    console.log(result);
})