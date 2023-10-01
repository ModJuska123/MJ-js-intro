/*


*/


for (let i = 0; i <= 3; i++) {
    console.log(1)}



console.clear()
// Skaiciai intervale nuo 3 iki 8 yra: 3 4 5 6 7 8.

const start = 3;
const finish = 8;
let numberSequence = ' ';

for(i = start; i <= finish; i++) {
    numberSequence += ' ' + i}

const numberLine = `Skaiciai intervale nuo ${start} iki ${finish} yra: ${numberSequence}.`
console.log(numberLine);

console.clear();

// Skaiciai intervale nuo 3 iki 8 yra: 3, 4, 5, 6, 7, 8.

let numberSequence2 = '';

for(i = start; i < finish; i++) {
    numberSequence2 += i + ', ';}

numberSequence2 += finish;

const numberLine2 = `(|8) Skaiciai intervale nuo ${start} iki ${finish} yra: ${numberSequence2}.`
console.log(numberLine2);

// Skaiciai intervale nuo 3 iki 8 yra: 3|, 4, 5, 6, 7, 8

let numberSequence3 = start;

for(i = start + 1; i <= finish; i++) {
    numberSequence3 += ', ' + i;}

const numberLine3 = `(3|) Skaiciai intervale nuo ${start} iki ${finish} yra: ${numberSequence2}.`
console.log(numberLine3);

