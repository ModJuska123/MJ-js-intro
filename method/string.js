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
