console.clear();

/*
.at() -> isveda indekso reiksme
charCodeAt() -> isveda simbolio Nr.
.concat(...) -> sujungia stringus
.includes() -> ar yra atsakyme reiksme (T/F)
.indexOf() -> isveda simboli pagal vieta
.repeat() -> pakartoja n kartu
.replace() ->keicia is x i y
.replaceAll() -> keicia visas reiksmes
.includes() -> iterpti

.slice( , ) -> atvaizduoja simbolius is texto nuo .. iki .., jei su minusu ima juos nuo galo
.split() -> atlieka zirkliu darba, isima simbolius is stringo ir gauna masyva
.startWith() -> grazina Boleana pagal nurodyta pradini simboli
.endsWith() -> grazina Boleana pagal nurodyta galini simboli
.toUpperCase() -> grazina texta Didziosiomis raidemis
.loverCase() -> grazina texta mazosiomis raidemis
.trim() -> grazina teksta be tarpu isvalant tarpus texto priekuje ir gale (ne zodziuos ar tarp)



*/
/*
console.log('Labas rytas'.includes('a')); // T/F
console.log('Labas rytas'.indexOf('labas', )); //nurodo indekso reisme, -1 - nera
console.log('Labas rytas'.indexOf('labas'));
*/
// ND naudoti tik IF ir FOR

const labas = 'labas';
let kiek = 0;
for(i = 0; i < labas.length; i++) {
if (labas[i] === 'a') {
kiek += 1} else {kiek += 0}
;
}
console.log(`${kiek} a zodyje: ${labas}`)

console.clear();

//-> .at() iskvietimas indekso

console.log('labas'[0], 'labas'.at(-1));
console.log('labas'[1], 'labas'.at(-2));
console.log('labas'[2], 'labas'.at(-3));
console.log('labas'[3], 'labas'.at(-4));
console.log('labas'[4], 'labas'.at(-5));

//-> ..charCodeAt() iskvietimas simbolio kodo

console.log('labas'.charCodeAt(0));

//-> ..concat() sujungia sringus be tarpo

const str1 = 'Hello';
const str2 = 'world';
console.log(str1.concat(' ', str2));

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
const startas = 'Abecele:';
const a4 = startas.concat(...abc);
console.log(a4);

//-> .includes() tikrina Boolean stringe yra simbolis

console.log('labas'.includes('k'));

//-> .indexOf() sujungia sringus be tarpo

console.log('labas'.indexOf('l'));

//-> .repeat() pakartoja reiksme n kartu

console.log('labas'.repeat('6'));


//-> .replace() pakeicia reiksme is a i b

console.log('labas'.replace('a', 'b'));

//-> .replaceAll() pakeicia visas reiksme is a i b

console.log('labas'.replaceAll('a', 'b'));

//-> .slice() atvaizduoja simbolius pagal nurodyt1 indexa

console.log('labas'.slice(0, 2));

//-> .split() sukarpo pagal skliaustuose nurodyta simboli

console.log('labas rytas suraitytas'.split(' '));

//-> ..startsWith() 
console.log('labas rytas suraitytas'.startsWith('r'));

//-> .split() 
console.log('labas rytas suraitytas'.endsWith('s'));


//-> .toUpperCase() i didziasias pakeisti raides
console.log('pasaka'.toUpperCase());

//-> .toLowerCase() i didziasias pakeisti raides
console.log('PASAKA'.toLowerCase());

//-> .trim() nukarpo tuscius sonus
console.log('   Labas    rytas     '.trim());


