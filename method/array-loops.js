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









// .map() metodas grazina nauja masyva per funkcija

// const marks1 = [10, 2, 8, 5];

// const doubleMarkMap4 = marks1.map(n => n * 2);

// console.log(doubleMarkMap4);
// console.log('labas');


