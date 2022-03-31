/* 
SNACK 5 (Bonus)
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

let firstArray = ['Naruto', 'Hunter x Hunter', 'Death Note', 'One Piece', 'Cowboy Bebop', 'Code Geass'];
let secondArray = ['Red Dead Redeption', 'The Last of Us', 'Uncharted',];

do {
    secondArray.push('Elden Ring');
    secondArray.push('World of Warcraft');
    secondArray.push('Bloodborne');
} while (secondArray.length < firstArray.length);

console.log(secondArray);