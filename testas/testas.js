// const input = '328702744723486911532475768422255001894526113116325060007961735316660332370078413228044719094265596322238541795017994255633388010154191613037999755961333112';
// for (let i = 0; i < input.length; i++) {
// const poros = input[i] + input[i+1];
// console.log(poros);




const input = '328702744723486911532475768422255001894526113116325060007961735316660332370078413228044719094265596322238541795017994255633388010154191613037999755961333112';

// const poros = [];

// for (let i = 0; i < 100; i++) {
//     poros.push(0);    
// }

// for (let i = 0; i < input.length - 1; i++) {
//     const pora = parseInt(input[i] + input[i + 1]);
//     poros[pora]++;
   
// }
// console.log(poros)

// const maxKiekis = Math.max(...poros);

// for (let i = 0; i < 100; i++) {
//     if (poros[i] === maxKiekis) {
//         console.log("labiausiai besikartojantis sk.:", i);
//     }
// }

const poros = {};
for (let i = 0; i < input.length - 1; i++) {
    const nr = input[i] + input[i + 1];
    if (poros[nr]) {poros[nr]++;      
    } else {poros[nr] = 1
    }
}
let maxKiekis = 0;

for (const key in poros) {
    if (poros[key] > maxKiekis) {
        maxKiekis = poros[key];
        
    }
}
console.log(maxKiekis);

const maxPoros = [];

for(const key in poros) {
    if (poros[key] === maxKiekis) {
        maxPoros.push(key);
        
    }
} 
console.log(maxPoros);




// [4:49 PM] Arvydas Kijakauskas (Dėstytojas)
const farm = [
    'Cow',
    'Pig',
    'Chicken',
    'Dog',
    'Cat',
    'Cow',
    'Horse',
    'Sheep',
    'Goat',
    'Goat',
    'Cow',
    'Duck',
    'Cat',
    'Turkey',
];

console.log("1.1. farm:  Kindergarden (level)---------------------");

let karviuKiekis = '';
for (let i = 0; i < farm.length; i++) {
if (farm[i] === 'Cow') {karviuKiekis++};
}
console.log(karviuKiekis);

console.log("1.2. farm: Midle---------------------");
//Midle sckool

let cowsSum2 = 0;
for (const animal of farm) {
    if (animal == 'Cow') {
cowsSum2++        
    }
}
console.log(cowsSum2);

console.log("1.3. farm: High sckool---------------------");
// High school

let cowsSum3 = 0;
farm.forEach(animal => animal == 'Cow' ? cowsSum3++ : null);
console.log(cowsSum3);

let catNumber = 0;
farm.forEach(item => item == 'Cat' ? catNumber++ : null);
console.log('Cats:', catNumber);



function jubiliejai(username, metai) {
    return `${username} turejo ${metai} metus`;
}
console.log(jubiliejai('Jonas', 99));



const marke = 'Toyota Corrolla';
const metai = 2014;
function autoParkas(marke, metai) {
    return `${marke} pagaminimo metai ${metai}`;
}
console.log(autoParkas(marke, metai));



const autoparkas2 = function () {return `${marke} pagaminimo metai ${metai}`}
console.log(autoparkas2(marke, metai));



const autoparkas3 = () => {return `${marke} pagaminimo metai ${metai}`}
console.log(autoparkas3(marke, metai));



const autoparkas4 = () => `${marke} pagaminimo metai ${metai}`
console.log(autoparkas3(marke, metai));



console.log("1.4. farm: university---------------------");
// University

let cowsSum4 = 0;
farm.forEach(animal => animal == 'Cow' && cowsSum4++);

console.log(cowsSum4);

let catSum = 0;
farm.forEach(participant => participant == 'Cat' && catSum++);
console.log('Cats:', catSum);


// task 2, kiek karves turi metu?
const farm2 = [
    { name: 'Cow', age: 5 },
    { name: 'Pig', age: 3 },
    { name: 'Chicken', age: 1 },
    { name: 'Dog', age: 2 },
    { name: 'Cat', age: 4 },
    { name: 'Cow', age: 7 },
    { name: 'Horse', age: 4 },
    { name: 'Sheep', age: 6 },
    { name: 'Goat', age: 3 },
    { name: 'Cow', age: 2 },
    { name: 'Duck', age: 1 },
    { name: 'Cat', age: 2 },
    { name: 'Turkey', age: 3 },
];

console.log('2.1. farm2: Kindergarden---------------------');
// Kindergarden
let cowsAgeSum5 = 0;
for (let i = 0; i < farm2.length; i++) {
    if (farm2[i].name == 'Cow') {
        cowsAgeSum5 += farm2[i].age;
    }
}
console.log('cowsAgeSum5', cowsAgeSum5);

console.log('2.2. farm2: Middle school---------------------');
// Middle school
let cowsAgeSum6 = 0;
for (const animal of farm2) {
    if (animal.name == 'Cow') {
        cowsAgeSum6 += animal.age;
    }
}

console.log('cowsAgeSum6', cowsAgeSum6);

console.log('2.3. farm2: High school---------------------');
// High school
let cowsAgeSum7 = 0;
farm2.forEach(animal => animal.name == 'Cow' ? cowsAgeSum7 += animal.age : null);

console.log('cowsAgeSum7', cowsAgeSum7);

console.log('2.3. farm2: University---------------------');
// University
let cowsAgeSum8 = 0;
farm2.forEach(animal => animal.name == 'Cow' && (cowsAgeSum8 += animal.age));
console.log('cowsAgeSum8', cowsAgeSum8);

let cowAge = 0;
farm2.forEach(animal => animal.name == 'Cow' && (cowAge += animal.age));
console.log(cowAge);


let A = 5;
let B = A; // by value

A = 10;

console.log('A', A);
console.log('B', B);

let C = { value: 5 };
let D = C; // by reference

C.value = 10;

console.log('C', C);
console.log('D', D);

let E = 12;
let F = 12;

console.log(E == F);

let G = { value: 12 };
let H = { value: 12 };

console.log(G == H);

// rest and spread


// ,,,,,,,,,,, => [] rest
// {} => ,,,,,,,,,,,, spread

const sum = (a, ...numbers) => {
    console.log('numbers', numbers);
    let result = 0;
    for (const number of numbers) {
        result += number;
    }
    console.log('result', result, a);
}


sum(5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23);

let V = { value: 5, name: 'Vasya', age: 25, hasCat: true };
let I = { age: 44, ...V, hasCat: false };

V.value = 10;

console.log('V', V);
console.log('I', I);

const mas1 = [1, 2, 3, 4, 5];
const obj1 = { value: 5, name: 'Vasya', age: 25 };

const [T, M] = mas1;
const { age, what } = obj1;

console.log('T', T);
console.log('M', M);

console.log('age', age);
console.log('what', what);