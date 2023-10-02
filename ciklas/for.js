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


// U....

let i1 = 0;

for(; i1 <= 10;) {
    console.log(i1, 'ciklas');
    i1 += 2;
    
}
console.log(i1, 'uz ciklo');

// U.....

function arTestiCikla(index) {
    if (index <= 10) {return true;
    } else {return false;
    }
}
for(let i = 0; arTestiCikla(i); i += 2) {
    console.log(i, 'ciklas')
};

// ...

const word = 'zodis';

for(let i = 0; i < word.length; i++) {
    console.log(i, `Raide: ${word[i]}`);
}

//..
             // 0  1  2  3  4
const marks = [10, 2, 8, 4, 6];
let totalSum = 0;
const amount = marks.length;

for(i = 0; i < amount; i++) {
    totalSum += marks[i];
    console.log(`${i}.`, marks[i], '=', totalSum)
}
const average = totalSum / amount;
console.log(marks, 'average is', average);

//.........
