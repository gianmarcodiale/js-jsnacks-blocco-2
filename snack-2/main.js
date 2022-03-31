/* 
SNACK 2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
*/

let userNumber = Number(prompt('Digita un numero.'));

if (userNumber % 2 != 0) {
    console.log(userNumber + 1);
} else {
    console.log(userNumber);
};