/*
Duodamas vardas... ar bent tai jau galvojama...
Ka daryti?
- reikia nustatyti, ar dave varda, ar ne?
*/

// Jonas -> true
// Maryte -> true
// 12485 -> false
// labas -> false
// Labas -> true
// Azuolas -> true
// Egle -> true
/*
function looksLikeName(text) {
    // jeigu, pirma raide nera didzioji
    //      graziname: false
    if (text[0] !== text[0].toUpperCase()) {
        return 'Klaida: pirma raide privalo buti didzioji';
    }

    // jeigu, visi kiti simboliai, apart pirmo,
    // yra ne mazosios raides
    //      graziname: false
    const likusiosRaides = text.slice(1);
    if (likusiosRaides !== likusiosRaides.toLowerCase()) {
        return 'Klaida: visos likusios raides privalo buti mazosios';
    }

    // jeigu, yra simbolis 0, 1, 2 .... 9 (skaitmuo)
    //      graziname: false
    const neleistiniSimboliai = '0123456789_,.?!@#$%^&';
    for (let i = 0; i < neleistiniSimboliai.length; i++) {
        const simbolis = neleistiniSimboliai[i];
        if (text.includes(simbolis)) {
            return `Klaida: "${simbolis}" nera leistinas simbolis`;
        }
    }

    // jeigu, neradau kaip atmesti, kodel "text"
    // negaletu buti tinkamas vardas
    //      graziname: true

    return true;
}
*/
// Uzd. => Baltas sarasas


console.clear();

function isName(name){
    if (typeof name !== 'string') {return 'Klaida: netinkamas duomens tipas, privalo buti "string"'
}
const nameMinLength = 2;
if (name.length < nameMinLength) {
    return 'Klaida: per trumpas vardas, privalo buti bent du simboliai'}
    
const nameMaxLength = 19;
if (name.length > nameMaxLength) {
        return 'Klaida: per ilgas vardas, privalo buti ne daugiau 18 simboliu'}

if (name[0].toUpperCase() !== name[0]) {
return 'Klaida: pirma raide privalo buti didzioji'
}
const likusiosRaides = name.slice(1);
if (likusiosRaides !== likusiosRaides.toLowerCase()) {
return 'Klaida: antra ir tolimesnes vardo raides turi buti mazosios'
}
// turime leistinu simboliu sarasa

const abc = 'abcdefghijklmnopqastuvwxvz';

// einu per vardo raides
    //    pasiimu viena is vardo raidziu
    //    patikrinu ar taraide yra leistinu simboliu sarase
            // jei yra tesiam darba, 
            // jei ne radau klaida nutraukiam darba

for (i = 1; i < name.length; i++) {
const raide = name[i];
if (abc.includes(name[i])) {
}
else {return `Klaida: neleistinas simbolis varde ${raide}`}
}
return "ok;"
}
console.log(isName(12));
console.log(isName(NaN));
console.log(isName(Infinity));
console.log(isName('L'));
console.log(isName('JonaS'));
console.log(isName('Liiiiiiiiiiiiiiiiiiiiiii'));

console.log(isName('Jon/as'));
console.log(isName('Jonas'));


