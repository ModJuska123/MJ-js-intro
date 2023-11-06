console.clear();
// su metodu: .map(...)

const marks = [20, 4, 16, 8];
function doubleOrNothing2(number) {
    return number * 2;
}
const doubleMarkMap2 = marks.map(doubleOrNothing2);
console.log('MAP', doubleMarkMap2);

 //su rodykline funkcija:

const doubleMarkMap3 = marks.map(n => n * 2);
console.log('MAP2', doubleMarkMap3);

const badMarks = [10, 12, 2, NaN, 3.14, 'Blogas pazymys'];
function arSkaicius(number) {
    if (typeof number === 'string') {return false}
    
};
const goodMarksOnly = badMarks.filter();
console.log(goodMarksOnly);



