// Manto uzduotys:
// 1 Užduotis
// Markas ir Johnas bando palyginti savo KMI (kūno masės indeksą), kuris yra
// apskaičiuojamas pagal formulę:
// KMI = masė / ūgis ** 2 = masė / (ūgis * ūgis) (masė kg ir aukštis metrais).
// Jūsų užduotys:
// 1. Išsaugokite Marko ir Jono masę ir ūgį kintamaisiais
// 2. Apskaičiuokite abiejų jų KMI naudodami formulę 
// 3. Sukurkite true false kintamąjį „markHigherBMI“ su informacija apie ar Marko KMI didesnis nei Jono.

// Bandymo duomenys:
// § 1 duomenys: sveria 78 kg ir yra 1,69 m ūgio. Jonas sveria 92 kg ir yra 1,95 ūgio
// m aukščio.
// § 2 duomenys: sveria 95 kg ir yra 1,88 m ūgio. Jonas sveria 85 kg ir yra 1,76 ūgio
// m aukščio.

const jonoUgis = 1.95; 
const jonoSvoris = 92;
const markoSvoris = 78;
const markoUgis = 1.69;

const kmi = (ugis, svoris) => (svoris / (ugis * ugis)).toFixed(1);
const jonoKMI1 = kmi(jonoUgis, jonoSvoris);
const markoKMI1 = kmi(markoUgis, markoSvoris);

console.log(kmi(jonoUgis, jonoSvoris));
console.log(kmi(markoUgis, markoSvoris));

const palyginimas = markoKMI1 > jonoKMI1 ? 
console.log(`„markHigherBMI - true`) : 
console.log(`„markHigherBMI - false`);

// Friday chalenge 2:

// Evenas nori sukurti labai paprastą arbatpinigių skaičiuotuvą, kai jis 
// eina valgyti į restoraną. Jo šalyje įprasta duoti 15 % arbatpinigių, 
// jei sąskaitos vertė yra nuo 50 iki 300. Jei vertė skiriasi, arbatpinigiai
//  yra 20%.
// Jūsų užduotys:
// Apskaičiuokite arbatpinigių, priklausomai nuo sąskaitos vertės. 
// Sukurkite kintamąjį pavadinimu „Tip“.
// Neleidžiama naudoti if/else teiginio  (Jei jums taip lengviau, galite
// pradėti nuo if/else teiginio, tada pabandykite jį konvertuoti į ternery
// operator!)
// Į konsole atspausdinkite eilutę, kurioje yra sąskaitos vertė, 
// arbatpinigiai ir galutinė vertė (sąskaita + arbatpinigiai). 
// Pavyzdys: „Sąskaita buvo 275, arbatpinigiai 41,25, o bendra vertė 316,25"
// Bandymo duomenys:
// § 1 duomenys: patikrinkite sąskaitos reikšmes 275, 40 ir 430
console.clear();

// // duota arbatpinigiu verte nuo sumos:
// const tipsMin = 15;
// const tipsMax = 20;
// // duotos saskaitu sumos:
// const arr = [275, 40, 430];
// let acountWithTips = 0;
// // randu galutine saskaita su arbatpinigiais, ivertinus mok4tina suma:

// function calaculation(arr) {for(let i = 0; i < arr.length; i++) 
//     {acountWithTips = arr[i] < 50 || arr[i] > 300 ?
//     (arr[i] * (tipsMax/100)) + arr[i] : (arr[i] * (tipsMin/100)) + arr[i];}
//     }
// // randu arbatpiniriu dalį nuo sumos:
// const tips = (acountWithTips - arr[i]) / arr[i] * 100;
// console.log(`${arr[i]}, ${tips.toFixed(0)}, ${acountWithTips.toFixed(0)}`);

console.clear();
// bill amount [];
const bill = [275, 40, 430];
// getting tips persentage + tips amount + full amount with tips
for (let i = 0; i < bill.length; i++) {const tipPercentage = (bill[i] >= 50 && bill[i] <= 300) ? 15 : 20;
const tip = (bill[i] * tipPercentage) / 100; 
const total = bill[i] + tip;
// printing final results in one sentence:
console.log(`Sąskaita buvo ${bill[i]}, arbatpinigiai ${tip}, o bendra vertė ${total}`);
}
console.clear();

// 2023-10-13 d. Manto uzduotys:
// 1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir 
// pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.

const vardas = 'Tom';
const pavarde = 'Cruise';
const trumpesnisZodis = vardas.length < pavarde.length ? vardas: pavarde;
console.log(`Trumpesnis zodis yra: ${trumpesnisZodis}`)

// 2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus 
// ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus 
// paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius 
// atspausdintų tokį sakinį :
// "Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

const vardas1 = 'Jonas';
const pavarde1 = 'Jonaitis';
const gimimoMetai = 1985;
const metaiDabar = 2023;
console.log(`Aš esu ${vardas1} ${pavarde1}. Man yra ${metaiDabar - gimimoMetai} metai(ų)`);

// 3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir 
// pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, 
// sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį 
// atspausdinti.

const vardas2 = 'Tom';
const pavarde2 = 'Cruise';
const stringas = vardas2.slice(-3) + pavarde2.slice(-3);
console.log(`Stringas is vardo ir pavardes yra: "${stringas}"`);

// 4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. 
// Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  
// Rezultatą atspausdinti.

let stringas1 = '“Once upon a time in hollywood”';
stringas1 = stringas1.replaceAll('O', '*').replaceAll('o', '*');
console.log(stringas1);

// 5. Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes 
// nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.

const pirmas = Math.floor(Math.random() * (3 - 0) + 0);
const antras = Math.floor(Math.random() * (3 - 0) + 0);
const tercias = Math.floor(Math.random() * (3 - 0) + 0);
const ketvirtas = Math.floor(Math.random() * (3 - 0) + 0);

console.log(pirmas);
console.log(antras);
console.log(tercias);
console.log(ketvirtas);

const nuliuSkaicius = (pirmas === 0 ? 1 : 0) + (antras === 0 ? 1 : 0) + (tercias === 0 ? 1 : 0) + (ketvirtas === 0 ? 1 : 0);
const vienetuSkaicius = (pirmas === 1 ? 1 : 0) + (antras === 1 ? 1 : 0) + (tercias === 1 ? 1 : 0) + (ketvirtas === 1 ? 1 : 0);
const dvejetuSkaicius = (pirmas === 2 ? 1 : 0) + (antras === 2 ? 1 : 0) + (tercias === 2 ? 1 : 0) + (ketvirtas === 2 ? 1 : 0);

console.log(`skaiciuokle: 0 = ${nuliuSkaicius}, 1 = ${vienetuSkaicius}, 2 = ${dvejetuSkaicius}`);

console.log('--------');

// 6. Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du 
// kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes 
// nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą 
// jį suapvalinę iki 2 skaičių po kablelio.

const a = Math.floor(Math.random() * (4 - 0) + 0);
const b = Math.floor(Math.random() * (4 - 0) + 0);
console.log(a);
console.log(b);
const c = a > b ? (a / b) : (b / a);

console.log(c.toFixed(2));
console.log('---------');

// 7. Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite 
// atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę 
// reikšmę.

const a1 = Math.floor(Math.random() * (25 - 0) + 0);
const b1 = Math.floor(Math.random() * (25 - 0) + 0);
const c1 = Math.floor(Math.random() * (25 - 0) + 0);
const arr1 = [a1, b1, c1];
console.log(arr1);
const max = Math.max(...arr1); 
const min = Math.min(...arr1); 

for (let i = 0; i < arr1.length; i++) {
    const currentNumber = arr1[i];
    if(currentNumber != min && currentNumber[i] != max) {return arr1[i]};
    console.log(`Vidurine reiksme: ${arr1[i]}`);
    }
    // Nesigavo ?????



// 8. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą 
// ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, 
// sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

// const autoriausVardas = 'Sandra';
// const autoriausPavarde = 'Bullock';
// const strindasJungtinis = autoriausVardas + autoriausPavarde;
// console.log(autoriausVardas);

const vardas12 = 'Chuck';
const pavarde12 = 'Norris';

const fullname = vardas12 + pavarde12;
console.log(fullname);

console.log('---------');

// 9 Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų 
// raidžių. Stringo ilgis 3 simboliai. Ats://https://www.youtube.com/watch?v=jww3V2fSQyg

createRandomString(3)
function createRandomString(stringlength){
    let randomString = '';
    const characters = 'abcdefghijklmnopqrstuvwxwz';
    for(let i = 0; i < stringlength; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return console.log(randomString);
    }

  console.log('labas');