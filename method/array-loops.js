console.clear();
// su metodu: .map(...)

const marks = [20, 4, 16, 8];
function doubleOrNothing2(number) {
    return number * 2;
}
const doubleMarkMap2 = marks.map(doubleOrNothing2);
console.log('MAP', doubleMarkMap2);

 // .map - su rodykline funkcija:

const doubleMarkMap3 = marks.map(n => n * 2);
console.log('MAP2', doubleMarkMap3);

const badMarks = [10, 12, 2, NaN, 3.14, 'Blogas pazymys', 3, 5, 8];
function arSkaicius(number) {
    if (typeof number === 'string') {
        return false
    };
    if (isNaN(number)) {
        return false
    };
    if (number % 1 !== 0) {
        return false
    };
    return true;
    
};
const goodMarksOnly = badMarks.filter(arSkaicius);
console.log(goodMarksOnly);

// .map() su filtrais ir rodykline funkcija
console.log('.map() su filtrais su rodykline funkcija-------');
const goodMarksOnly2 = badMarks
    .filter(n => typeof n === 'number')
    .filter(n => isFinite(n))
    .filter(n => n > 0)
    .filter(n => n < 11)
    .filter(n =>Number.isInteger(n));

    console.log(goodMarksOnly2);

// .map() su filtrais ir rodykline funkcija (sutrumpinus koda):

const goodMarksOnly4 = badMarks
    .filter(n => Number.isInteger(n) && isFinite(n) && n > 0 && n < 11 && Number.isInteger(n))
console.log(goodMarksOnly4);

// darbas su stringais
// .sort(...) mutuoja esama masyva

const stringList = ['a', 'B', 'A', 'b', 'C', 'd', 'c', 'ab', 'AB', 'Labas'];
console.log(stringList);

stringList.sort();
console.log(stringList)

marks.sort((a, b)=>a-b);
console.log(marks);

// darbas us masyvais ir objektais juose:
// 1. surikiuoju visus pagal amziu
console.log('darbas us masyvais ir objektais juose---------');
const family = [
    {name: 'Maryte', age: 99}, 
    {name: 'Jonas', age: 100}, 
    {name: 'Ona', age: 20}, 
    {name: 'Petras', age: 88}, 
    {name: 'Maryte', age: 87}, 
    {name: 'Maryte', age: 60}, 
];

family.sort((a, b) => a.age - b.age);
console.log(family);

// 2. istraukiu pagal amziu vardus
const names = [];

for (const user of family) {
    names.push(user.name)
}
console.log(names);

// 3. iskeliu is masyvo i stringa

const familyString = names.join(',') + '.';
console.log(familyString);

// pazymiu suma
const pazymiai = [10, 2, 8, 4, 3];

let pazymiuSuma = 0;

for (pazymys of pazymiai) {
    pazymiuSuma =+pazymys;
}
const vidurkis = pazymiuSuma / pazymiai.length;

console.log(vidurkis);

function redFunc(total, number) {
    return total + number;
}
const reduceSuma = pazymiai.reduce(redFunc);
console.log(reduceSuma);
