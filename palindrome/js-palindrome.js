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

// Funzione che aggiunge degli elementi ad una lista
function addListItem(input, list) {
    const li = document.createElement('li')

    if (isPalindrome(input)) {
        li.classList.add('text-success');
        li.innerHTML = `'${input}' is a palindrome word`;
    } else {
        li.classList.add('text-danger');
        li.innerHTML = `'${input}' is not a palindrome word`;
    }

    list.appendChild(li);
}

// ---------- END Functions ---------- //

// Riferimenti HTML
const checkBtn = document.getElementById('check-palindrome');
const wordInput = document.getElementById('word-input');
const timelineListElement = document.getElementById('timeline');

checkBtn.addEventListener('click',
    function() {
        // Ad ogni click aggiungo un li alla lista
        addListItem(wordInput.value, timelineListElement)
        // Resetto l'input
        wordInput.value = ""
    }
)
