const marks = [10, 2, 4, 6];

let sumFor = 0;

for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    sumFor += mark;
}

console.log(sumFor);

// For-of
// marks - masyvas;
// mark - masyvo simbolis; 

let sumForOf = 0;

for (const mark of marks) {
    sumForOf += mark;
}
console.log(sumForOf);

//Mano pav.

const array = [10, 20, 50];
let sumOfArray = 0;
for (const number of array) {
sumOfArray += number;
}
console.log(sumOfArray);

//While

let sumWhile = 0;
let i = 0;
while (i < marks.length) {
    const mark = marks[i];
    sumWhile += mark;
    i++;
}
console.log(sumWhile);

// Do-while:

let sumDoWhile = 0;
let iDoWhile = 0;
do {
    const mark = marks[iDoWhile];
    sumDoWhile += mark;
    iDoWhile++;
} while (iDoWhile < marks.length);
console.log(sumDoWhile);
