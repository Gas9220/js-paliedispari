Esercizio - Palindroma
1. Con un prompt chiedo all'utente di inserire una parola e salvo il suo valore in una cost.
2. Creo una funzione con un parametro che inverte le parole:
 - Converto la parola inserita come parametro in un array, assicurandomi che non ci siano lettere maiuscole
 - Creo un array vuoto che conterra la parola invertita
 - Faccio un ciclo:
  - ...che ha indice uguale alla lunghezza della parola inserita - 1
  - ...che continui finchè l'indice non è maggiore o uguale a zero
  - ...ad ogni iterazione decremento l'indice
  - ad ogni giro prendo un carattere della parola inserita e lo aggiungo all'array che conterrà i caratteri della parola invertita 
 - Ritorno l'array con la parola invertita unendo tutti i suoi elementi in un unica stringa

3. Creo una funzione che accetta un parametro ed esegue le seguenti operazioni:
 - Creo una costante che contiene il ritorno della funzione che inverte le parole
 - Controllo se la parola inserita nella funzione sia uguale a quella ricavata invertendola e in caso positivo ritorno true
 - Se non sono entrato nella condizione precedente, le parole non sono uguali e ritorno false

4. Stampo in console l'esito della funzione