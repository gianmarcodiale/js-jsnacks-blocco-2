/* 
SNACK 3
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

let namesList = ['John', 'Ryan', 'Susan', 'Jacob', 'Martha', 'Elliot'];
let surnameList = ['Smith', 'Jackson', 'Sanchez', 'Evans', 'Miller', 'Alderson'];
let completeNameList = []

for (let i = 0; i < namesList.length; i++) {
    firstName = namesList[i];
    lastName = surnameList[i];
    completeName = (`${firstName} ${lastName}`);
    completeNameList.push(completeName);
};

console.log(completeNameList);



