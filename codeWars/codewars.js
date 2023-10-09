// CW#1
function even_or_odd(n) {
  if(n % 2 === 0)
  {return `Even`} else 
  {return `Odd`}
};
console.log(even_or_odd(1));
console.log(even_or_odd(2));

console.clear();
// It's pretty straightforward. Your goal is to 
// create a function that removes the first and 
// last characters of a string. You're given one 
// parameter, the original string. You don't have 
// to worry with strings with less than two 
// characters.


function removeChar(str){
  const word = str.slice(1,-1); 
  return word};
  console.log(removeChar('Jurasic Park'));

  // I'm new to coding and now I want to get the 
  // sum of two arrays... Actually the sum of all 
  // their elements. I'll appreciate for your help.



// The code provided is supposed replace all the dots . 
// in the specified String str with dashes -
// But it's not working properly.
// Task Fix the bug so we can all go home early.
// Notes String str will never be null.

function replaceDots(str){
  const replacement = str.replaceAll('.', '-'); 
  return replacement;
} 
console.log(replaceDots('st.replace'));

// Get ASCII value of a character.

function getASCII(index) {
 const indexASCII = index.charCodeAt();
 return indexASCII;
}
console.log(getASCII('d'));

// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.
// function testEven(n) {

function testEven(n) {
  if(n % 2 === 0)
  {return `true`} else 
  {return `false`};
}
console.log(testEven(0));
console.log(testEven(1));


// Your task is to write a function that takes a String and 
// returns an Array/list with the length of each word added to each element .
// Note: String will have at least one element; words will 
// always be separated by a space.

function addLength(str2) {
const words = str2.split(" ");
return words.map(str2 => `${str2} ${str2.length}`);}
console.log(addLength('Hello World'));


// Create a function that always returns true for every item in a given list. 
// However, if an element is the word "flick", switch to always returning the opposite 
// boolean value.
console.log('-------')


const test = ["codewars", "flick", "code", "wars", "flick", "meh", "flick", "asd", "asd"];
function flickSwitch(arr){
  let flick = true;
  let out = [];
  for(let i = 0; i < arr.length; i++)
  {
      if(arr[i] == "flick")
          flick = !flick;
      out.push(flick);
  }
  return out;
}

let a = flickSwitch(test);
console.log(a);
// !!! Nesigavo, prasiau pagalbos!!!


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

// 1 bandymas
const maseJonoKg = [92, 85];
const ugisJonoM = [1.95, 1.76];
const maseMarkoKg = [78, 95];
const ugisMarkoM = [1.69, 1.88];
const jonoKMI = maseJonoKg[0] / ugisJonoM[0] * ugisJonoM[0];
const markoKMI = maseMarkoKg[0] / ugisMarkoM[0] * ugisMarkoM[0];

const jonoKMI2 = maseJonoKg[1] / ugisJonoM[1] * ugisJonoM[1];
const markoKMI2 = maseMarkoKg[1] / ugisMarkoM[1] * ugisMarkoM[1];

const markHigherBMI = markoKMI > jonoKMI;
const markHigherBMI2 = markoKMI2 > jonoKMI2;

console.log(`BD1: Marko KMI didesnis nei Jono - ${markHigherBMI} ${markoKMI} vs ${jonoKMI}`);
console.log(`BD2: Marko KMI didesnis nei Jono - ${markHigherBMI2} ${markoKMI2} vs ${jonoKMI2}`);


//  2 Užduotis

// Naudokite KMI pavyzdį iš 1 iššūkio ir kodą, kurį jau parašėte, ir pagerinti jį.
// Jūsų užduotys:
// 1. Išspausdinkite gražią išvestį į konsole ar terminalą, nurodydami, kas turi didesnį KMI. Žinutė
// yra arba "Marko KMI didesnis nei Jono!" arba "Jono KMI yra didesnis nei Marko!"
// 2. Naudokite Template literals, kad įtrauktumėte KMI reikšmes į išvestis. Pavyzdys: „Marko
// KMI (28,3) yra didesnis nei Jono (23,9)!


console.log(`Jono KMI (${jonoKMI}) yra didesnis nei Marko (${markoKMI})!`);
console.log(`Marko KMI (${markoKMI2}) didesnis nei Jono (${jonoKMI})!`);

// 3 užduotis
// Yra dvi gimnastikos komandos – delfinai ir koalos. Jie varžosi viena prieš kitą 3 kartus. 
// Nugalėtojas, surinkęs didžiausią balų vidurkį, laimi trofėjų!
// Jūsų užduotys:
//  Apskaičiuokite kiekvienos komandos taškų vidurkį, naudodami toliau pateiktus testo duomenis
//             2. Palyginkite komandos balų vidurkį, kad nustatytumėte konkurso nugalėtoją.
// ir atsispausdinkite į konsolę. Nepamirškite, kad gali būti lygios, todėl išbandykite tai
// taip pat (lygiosios reiškia, kad jie turi tą patį vidutinį balą)
//                3.  bonus užduotis: įtraukite reikalavimą turėti mažiausiai 100 balų. 
// Pagal šią taisyklę
// komanda laimi tik tuo atveju, jei ji turi didesnį balą nei kita komanda, ir tuo pačiu
// surinkti ne mažiau kaip 100 taškų. 
//                4. bonus užduotis  Minimalus rezultatas taip pat taikomas lygiosioms! Taigi lygiosios įvyksta tik tada, kai abi komandos turi vienodą rezultatą ir abi turi didesnį arba lygų 100 balų
// taškų. Priešingu atveju jokia komanda nelaimės trofėjaus

// Bandymo duomenys:
// § 1 duomenys: delfinai surinko 96, 108 ir 89 balus. Koalos balai 88, 91 ir 110
// § Duomenų bonus užduočiai 1: delfinų balai 97, 112 ir 101. Koalos balai 109, 95 ir 123
// § 2 duomenų bonus užduočiai: delfinų balai 97, 112 ir 101. Koalos balai 109, 95 ir 106

const min = 100;

const delfTaskai = [96, 108, 89, 97, 112, 101, 97, 112, 101];
let delfTaskuSuma = 0;
for(i = 0; i < 9; i++) {
  delfTaskuSuma += delfTaskai[i];
}
let delfTaskuVidurkis = delfTaskuSuma / 9;
delfTaskuVidurkis = Number.parseInt(delfTaskuVidurkis);

const koalTaskai = [88, 91, 110, 109, 95, 123, 109, 95, 106];
let koalTaskuSuma = 0;
for(i = 0; i < 9; i++) {
  koalTaskuSuma += koalTaskai[i];
}
let koalTaskuVidurkis = koalTaskuSuma / 9;
koalTaskuVidurkis = Number.parseInt(koalTaskuVidurkis);

if((koalTaskuVidurkis < min && delfTaskuVidurkis < min) || koalTaskuVidurkis == delfTaskuVidurkis) {
  console.log(`lygiosios`)
} else if(koalTaskuVidurkis >= min && koalTaskuVidurkis > delfTaskuVidurkis) {
    console.log(`Lamejo koalos ${koalTaskuVidurkis}-${delfTaskuVidurkis}`)
  } else if(delfTaskuVidurkis >= min && delfTaskuVidurkis > koalTaskuVidurkis)
{console.log(`Lamejo delfinai ${delfTaskuVidurkis}-${koalTaskuVidurkis}`)}


console.clear();

// Write a function that accepts an integer n and a string s as parameters, 
// and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

let str = 'hello';  
const num = 5;
function repeatStr (n, s) {
  return `${num}, ${str} ${str.repeat(num-1)}`;
}
console.log(repeatStr(num, str));

// V2 is interneto:

const repeatStr2 = (n, s) => s["repeat"](n); //CW veikia, bet man ne.

const repeatStr3 = (n, s) => s["repeat"](n);
console.log(repeatStr3(3, "Hello"));
console.log(repeatStr3(5, "abc"));

// .a.a..a


function breakCamelCase(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
          if (char === char.toUpperCase()) {
            result += ' ' + char;
    } else {
            result += char;
    }
  }
    return result;
}
console.log(breakCamelCase('breakCamelCase'));