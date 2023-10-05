/*

*/

console.clear();


// 
console.log([10, 15, 20, 30].at(-1));

// .concat() apjungia i viena masyva, kitus masyvus

const a1 = [1, 2];
const a2 = [3, 4];
const a3 = [5, 6];

const a12 = a1.concat(a2).concat(a3);
console.log(a1, a2, a12);

// .include tikrina ar reiksme yra masyve

const marks = [10, 2, 8, 9];
console.log(marks.includes(10));

// .indexOf grazina indekso reiksme masyve

const marks2 = [10, 2, 8, 9];
console.log(marks2.indexOf(10));

// typeof -> patikrina duomenu tipa

console.log(typeof 'k');

// Array.is Array -> leidzia atskirti ar domuo yra masyvas

console.log(Array.isArray('1'));

// typeof-> sujungia arejaus simbolius ir 
// pagaminia stringa

const marks3 = [10, 2, 8, 9];
console.log(marks3.join('-'));
