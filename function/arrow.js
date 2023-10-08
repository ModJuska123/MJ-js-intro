console.clear();

// Function declaration


const n1 = 3;
const n2 = 5;
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`)

// Kintamajam priskiriama anonimine funkcija

const skirtumas = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`)

// Arrow (rodykline) funkcija

const sandauga = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);


// Arrow (rodykline) funkcija
// jeigu logikos bloke yra tik viena procedura, galima nerasyti 'return ir {}'

const dalmuo = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${dalmuo(n1, n2)}`);

// Arrow (rodykline) funkcija
// jeigu parametru bloke yra tik vienas parametras, galima nerasyti ()

const kvadratu = a => a ** 2;
console.log(`${n1} ** 2 = ${kvadratu(n1)}`);
console.log(`${n2} ** 2 = ${kvadratu(n2)}`);



