/* 
SNACK 4
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

let numbersList = [12, 32, 57, 85, 4, 23, 9, 17, 99, 16];
let sum = 0;

i = 0;
while (i < numbersList.length) {
    i++;
    numberPosition = numbersList[i];
    if (i % 2 != 0) {
        sum += numberPosition;
    }
}

console.log(sum);