'use strict';

// ---------- START Functions ---------- //

// Funzione che permette di generare un numero random tra due numeri
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

// Funzione che permette di sommare due numeri
  function sum(num1, num2) {
    return num1 + num2
  }

// Funzione che stabilisce se un numero è pari o dispari
function numCheck(num) {
    if (num % 2 === 0) {
        return "even"
    }

    return "odd"
}

// Funzione che stabilisce il vincitore
function checkWinner(userChoice, result) {

    if (result === userChoice) {
        return "You Win!"
    }

    return "You loose!"
}

// ---------- END Functions ---------- //

// Chiedo all'utente di scegliere tra pari e dispari e di inserire un numero da 1 a 5
let userChoice = prompt("Odd or even?");
let userNumber = Number(prompt("Insert a number between 1 and 5"));

// Finchè l'utente non inserisce i valori corretto riproprongo i prompt
while (userChoice.toLowerCase() !== "even" && userChoice.toLowerCase() !== "odd") {
    userChoice = prompt("Odd or even?");
}

while (isNaN(userNumber) || userNumber > 5 || userNumber < 1) {
    userNumber = Number(prompt("Insert a number between 1 and 5"));
}

// Creo un numero random da 1 a 5
const randomNumber = getRandomInt(1, 5);

// Sommo il numero inserito dall'utente con quello generato casualmente
const total = userNumber + randomNumber;

// Eseguo la funzione per verificare se il risultato è pari o dispari
const result = numCheck(total);

// Eseguo la funzione per verificare il vincitore
const winner = checkWinner(userChoice, total);

// Stampo in console il vincitore
console.log(`You have choose an ${userChoice} number. Your number is ${userNumber}. The CPU number is ${randomNumber}. The total is ${total} and is an ${result} number so ${winner}`)