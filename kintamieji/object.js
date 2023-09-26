/*

Objektas, daiktas, dalykas.

*/

// vartotojas: vardas, amzius, ar vedes

// key value

const jonas = {
name: 'Jonas', // name yra "raktas"
age: 99,
ismarried: true,
};

console.log(jonas);
console.log(jonas['name'], jonas.name);
console.log(jonas['age'], jonas.age);
console.log(jonas['ismarried'], jonas.ismarried);

jonas.age++;
console.log(jonas);

let a = 1;
let b = a;
console.log('a:', a, 'b:', b);

a = 2;
console.log('a:', a, 'b:', b); //b prisimena sena reiksme

b = 3;
console.log('a:', a, 'b:', b);

//...array reiksme galima pakeisti, c ir turi ta pacia reiksme
const c = [1, 2];
const d = c;
console.log('c:', c, 'd:', d);

c[0] = 111;
console.log('c:', c, 'd:', d);

c[1] = 222;
console.log('c:', c, 'd:', d);

d[0] = 333;
console.log('c:', c, 'd:', d);

d[1] = 444;
console.log('c:', c, 'd:', d);
