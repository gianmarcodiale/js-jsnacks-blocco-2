/* 
SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

let sum = 0;
let sum2 = 0;

// CICLO WHILE

let i = 0;

while (i < 5) {
    userNumbers = Number(prompt('Inserisci un numero.'))
    i++;
    sum += userNumbers;
}

console.log(sum);

// CICLO FOR

/* for (let index = 0; index < 5; index++) {
    userNumbers2 = Number(prompt('Inserisci un numero.'));
    sum2 += userNumbers2;
}

console.log(sum2);
console.log(sum + sum2); */
