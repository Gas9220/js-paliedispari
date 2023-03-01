'use strict';

// ---------- START Functions ---------- //

// Funzione per invertire le parole
function invertWord(word) {
    // Creo un array dalla parola
    const charArray = Array.from(word.toLowerCase());

    // Creo un array che conterra la parola invertita
    let invertedWordArray = [];

    // Ad ogni iterazione, aggiungo ad invertedWordArray una lettera della parola inserita, iniziando dalla fine
    for (let index = charArray.length - 1; index >= 0; index--) {
        invertedWordArray.push(charArray[index]);
    }

    // Unisco i caratteri dell'array in un unica parola
    return invertedWordArray.join("");
}

// Funzione che determina se una parola è palindroma
function isPalindrome(word) {
    // Inverto la parola
    const invertedWord = invertWord(word);

    // Se le parole sono uguali ritorno vero
    if (word.toLowerCase() === invertedWord) {
        return true;
    }

    // Se non entro nella condizione, ritorernò falso
    return false;
}

// ---------- END Functions ---------- //


// Chiedo la parola all'utente
// const input = prompt('Inserisci una parola');

// Verifico se è palindroma
// console.log(isPalindrome(input));
