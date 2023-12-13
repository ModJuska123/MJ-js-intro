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
const jonoKMI = maseJonoKg[0] / (ugisJonoM[0] * ugisJonoM[0]);
const markoKMI = maseMarkoKg[0] / (ugisMarkoM[0] * ugisMarkoM[0]);

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

// // Example usage: Write a function that calculates the original product 
// price, without VAT.
// Example:
// If a product price is 200.00 and VAT is 15%, then the final product price 
// (with VAT) is: 200.00 + 15% = 230.00
// Thus, if your function receives 230.00 as input, it should return 200.00
// Notes:
// VAT is always 15% for the purposes of this Kata. Round the result to 2 
// decimal places.
// If null value given then return -1


function excludingVatPrice(priceWithVat) {
  // Check if the input is null or not a number
  if (priceWithVat === null || isNaN(priceWithVat)) {
    return -1;
  }

  // Calculate the original price without VAT (testuoti)
  const originalPrice = priceWithVat / 1.15; // 1 + 0.15 (15% VAT)
  
  // Round the result to 2 decimal places
  const roundedPrice = originalPrice.toFixed(2);

  return roundedPrice;
}

// Example usage:
const priceWithVat = 230.111;
const originalPrice = excludingVatPrice(priceWithVat);
console.log(originalPrice); // Outputs 200.00

// Git ex1
excludingVatPrice = p => p === null ? -1 : +(p / 1.15).toFixed(2);

console.clear();

// Is the string uppercase? Task Create a method to see whether the string 
// is ALL CAPS. Examples (input -> output)
// "c" -> False
// "C" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not 
// contain any lowercase letter so any string containing no letters at all is 
// trivially considered to be in ALL CAPS.
// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript 


// const stringPrototype = 'Hello';
// function strinToBoolean(){
//   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXVZ';
//   for (let i = 0; i < characters.length; i++) {
//     characters = characters[i];
//  if(stringPrototype.includes(characters[i])) {console.log('true')} else {console.log(false)};
//     console.log(characters[i]);
    
//   }
// }
// console.log(`Is a string yes`)
const str5 = "MIKE";
function isUpperCase(str5) {
  return str5 === str5.toUpperCase();
}
console.log(isUpperCase(str5));
/// man veikia, CW meta klaidas

// https://www.codewars.com/kata/515e188a311df01cba000003/solutions/javascript 

function getPlanetName(id){
  switch(id){
    case 1:
      return 'Mercury'
    case 2:
      return 'Venus'
    case 3:
      return 'Earth'
    case 4:
      return 'Mars'
    case 5:
      return 'Jupiter'
    case 6:
      return 'Saturn'
    case 7:
      return 'Uranus'
    case 8:
      return 'Neptune'
  }

}
console.log(getPlanetName(8));

// https://www.codewars.com/kata/515e188a311df01cba000003/solutions/javascript

function getPlanetName(i){
  return (['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'])[i-1];
}
console.log(getPlanetName(2))

console.log('----------------');


function resetLeagueStandings(standings) {
  // Get the team that finished first last season
  const firstLastSeason = standings[1];

  // Create an array of team names (excluding the first team)
  const teamNames = Object.values(standings).slice(1);

  // Sort the team names alphabetically
  teamNames.sort();

  // Create a new object with the updated standings
  const PremierLeagueStandings = { 1: firstLastSeason };

  for (let i = 0; i < teamNames.length; i++) {
    PremierLeagueStandings[i + 2] = teamNames[i];
  }

  return PremierLeagueStandings;
}

// Example input
const previousStandings = {
  1: 'Leeds United',
  2: 'Liverpool',
  3: 'Manchester City',
  4: 'Coventry',
  5: 'Arsenal'
};

// Reset the league standings
const PremierLeagueStandings = resetLeagueStandings(previousStandings);

// Output the new standings
console.log(PremierLeagueStandings);

console.log('------------------');
// to square root:
//Write a method, that will get an integer array 
// as parameter and will process every number from this 
// array.

// Return a new array with processing every number 
// of the input-array like this:

// If the number has an integer square root, 
// take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only 
// positive numbers, and will never be empty or null.
//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

// const array = [4, 3];
// let square = [];
// function squareOrSquareRoot(array) {
//   for (let i = 0; i < array.length; i++) {
//     square = square + array[i];
//     return square;
//     }
//     }
//   console.log(square);
  
console.clear();

// Task str to num: 
// https://www.codewars.com/kata/544675c6f971f7399a000e79/solutions/javascript
//S1:
var stringToNumber = function(str){
return Number(str);
}
console.log(stringToNumber('123'));

//S2:
var stringToNumber = function(str){
  return parseInt(str);
} 
console.log(stringToNumber('321'));

//S3:
stringToNumber=s=>+s
console.log(stringToNumber('441'));

//S4:
let stringToNumber1 = function(str) {
  return parseInt(str)
}
console.log(stringToNumber1('553'));

// true fals is strin a number
//https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript

const s = '12.1 1       12';
function isDigit(s) {
  return Number.isInteger(parseInt(s))
}
console.log(s);
console.log(isDigit(s));

const isInt = (s) => parseInt(s) % 1 === 0? true : false;

//multiply 

const multiply = (a, b) => a * b;

//return oposite

const opposite = number => -number;
console.log(opposite (-10));

//oposite
function oposite(s) {
  return s.split("").reverse().join("");
}
  
  console.log(oposite("saule"));

// bool to word
function boolToWord( bool ){
  if(bool == true) {return 'Yes'} if (bool == false) {return 'No'}
  }
  console.log(boolToWord(false));

  //return summ of positive

//   sum = positiveSum.reduce(function (r, a) {
//     return a > 0 ? r + a : r;
// }, 0);


  const str122 = (x) => x.split(' ').join('');
  console.log(str122("hs ss       gf  "));


  function booleanToString(b){
    if(b==true){return String('true')} if(b!==true){return String('false')}
  }
  console.log(booleanToString(false));

  // mathematics+-*/

  function basicMathOperations(operator, value1, value2) {
    switch (operator) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        // Check for division by zero
        if (value2 !== 0) {
          return value1 / value2;
        } else {
          return "Cannot divide by zero";
        }
      default:
        return "Invalid operator";
    }
  }
  console.log(basicMathOperations('+', 12, 12));

  //hrs to miliseconsd
  function past(h, m, s) {
  const convertHours = h * 60 * 60 * 1000;
  const convertMinutes = m * 60 * 1000;
  const convertSeconds = s * 1000;
  return convertHours + convertMinutes + convertSeconds;
}
console.log(past(2, 30, 30));

function past(h, m, s){
  return s*1000 + m*60000 + h*3600000
 }
 console.log(past(2, 30, 30));

 //classmades + paper
const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0; 
 console.log(paperwork (-1, 20));

//century year
let arr = [2, 0, -2];
function invertValue(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      result.push(arr[i]);
    } else {
      result.push(arr[i] * -1);
    }
  }
  return result;
}
console.log(invertValue(arr));


// Name to initials
let name = "Pe";
let surn = "per";
function abbrevName(name, surn) {
  let x = name.charAt(0).toUpperCase();
  let y = surn.charAt(0).toUpperCase();
  return x + '.' + y;
}
console.log(abbrevName(name, surn));

function convertToInitials(name) {
  const words = name.split(' ');
  console.log(words);
  if (words.length !== 2) {
    return "Invalid input. Please provide exactly two words separated by a space.";
  }
  const initials = words.map(word => word.charAt(0).toUpperCase());
  const result = initials.join('.');
  return result;
}
console.log(convertToInitials("mo Mol"));

function abbrevName(name){
  return name[0].toUpperCase() + "." + name[name.indexOf(" ")+1].toUpperCase();}

  function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }

  function greet() {
    const hello = "hello";
    const world = "world";
    const punctuation = "!";
  
    return `${hello} ${world}${punctuation}`;
  }
  
console.log(greet());

//sum array
// Sum Numbers

// let sum22 = [12, 12, 5];
// let counter22 = 0;
// sum22.forEach(num22 => isNumeric(num22) ? counter22++ : 0);
// console.log(counter22);

//square n sum
const numb = [10, 2, 2];
function squareSum(numb){
  let resultSq = 0;
  numb.forEach((item) => {resultSq += item * item});
  return resultSq;
}
console.log(squareSum(numb));

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

// smalest arr integ

class SmallestIntegerFinder {
  findSmallestInt(args) {
    
  }
}

//counting sheeps
const sheeps = [true, false, true, true,true,true,true,true,true,true,true,true, Infinity];
function countSheeps(sheeps) {
  let nummerOfSheeps = 0;
  sheeps.forEach((sheep) => {sheep == true ? nummerOfSheeps++ : null}); 
  return nummerOfSheeps;
}
 console.log(countSheeps(sheeps));

 function countSheeps(sheeps) {
  return sheeps.filter(Boolean);
}
console.log(countSheeps(sheeps));

function countSheeps(sheeps) {
  var array = sheeps.reduce((a,b)=>a + (b===true?1:0),0)
  return array;
}
console.log(countSheeps(sheeps));

//hydrated
const time = 3;
function litres(time) {
  return Math.floor(time * 0.5);
}
console.log(litres(time));

// beginer-lost

const arrValue = [1, 2, 3];
function maps(arrValue) {
  let mapsDoubled = [];
  arrValue.forEach((arrNu) => {mapsDoubled.push(arrNu * 2)})
return mapsDoubled;
}

console.log(maps(arrValue));

// function maps(x){
//   return x.map(n => n * 2);
// };

// const maps=x=>x.map(x=>x+x);

// convert num

function digitize(number22) {
  return String(number22).split('').reverse().map(Number);
}
console.log(digitize(987654321));

// oposite attract

  function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
  }
  console.log(lovefunc(2, 4));

  //multiply ecen
  function simpleMultiplication(number33) {
    let result = 0;
    if(number33 % 2 == 0) {
      result = number33 * 8} if (number33 % 2 !== 0) {
        result = number33 * 9}
    return result;
}
console.log(simpleMultiplication(1));

//find a needle
const haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
function findNeedle(haystack) {
const found = haystack.indexOf("needle");
return `found the needle at position ${found}`;
}
console.log(findNeedle(haystack));

// average

const array44 = [1,2,3];
function findAverage(array44) {
  let total = 0;
  let average = 0;
  if (array44.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < array44.length; i++) {
      total += array44[i]
    }
    average = total / array44.length
    return average;
  }
}
console.log(findAverage(array44));

// function find_average(arr) {
//   return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
// }

// function find_average(array) {
//   return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
// }

// survive
function hero(bullets, dragons){
 if(bullets >= dragons * 2) {
  return true} else {
    return false;}
  }
  console.log( hero(4, 2));

  // coun sum
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
  // function countPositivesSumNegatives(input) {
  //   let sumOfNegatives = 0;
  //   let countOfPositives = 0;
  //   let result33 = [];
  //   input.reduce((a, b) => b > 0 ? countOfPositives++ : sumOfNegatives += a + b);
  //   result33 = result33.push(countOfPositives, sumOfNegatives);
  // }

  function countPositivesSumNegatives(input) {
    let pos = []
    let neg = []
    if (input === null || !input.length) return []
    else {
        input.map(num => {
            return num > 0 ? pos.push(num) : neg.push(num)
        })
    }
    let out1 = pos.length
    let out2 = neg.reduce((a, c) => a + c, 0)
    return [out1, out2]
  }

  console.log(countPositivesSumNegatives(input));

  // grow
  const x = [100, 2, 1, 1];
  const grow=x=> x.reduce((a,b) => a*b);
  console.log(grow(x));
  
  // function grow(x){
    // return x.reduce((a, b)=> a * b,1);
    // }

    // let element11 = [0];
    // function grow(x) {
    //   for (let i = 0; i < x.length; i++) {
    //     element11 = element11 * x[i];
    //   }
    //   return element11;
    //   }
    //   console.log(grow(x));


    // const grow=x=>eval(x.join("*"))

    //realy
    const classPoints = [9, 8, 10];
    const yourPoints = 10;
    function betterThanAverage(classPoints, yourPoints) {
      const averageOfClassPoints = classPoints.reduce((a, b) => a + b) / classPoints.length;
      if (averageOfClassPoints < yourPoints) {
    return true} else {
      return false
    };
    }
    console.log(betterThanAverage(classPoints, yourPoints));
    
    // function betterThanAverage(classPoints, yourPoints) {
    //   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
    // }

    //BMI
    function bmi(weight, height) {
      const bmiCalaculation = weight / (height * height);
      if(bmiCalaculation <= 18.5) {return  "Underweight"
    } if(bmiCalaculation <= 25) {
        return "Normal"
      } if(bmiCalaculation <= 30) {
          return "Overweight"
        } if(bmiCalaculation > 30) {
          return "Obese"};
    }
    console.log(bmi(94, 1.78));

    // const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
    //                                 bmi <= 25 ? "Normal" :
    //                                 bmi <= 30 ? "Overweight" : "Obese";

    // function bmi(weight, height) {
    //   var bmi  = weight/(height*height);  
    //    return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
    //   }

    // bmi = (w, h) => (w = w / h / h) > 30 ? 'Obese' : w > 25 ? 'Overweight' : w > 18.5 ? 'Normal' : 'Underweight';

    // fake bin
    
const str22 = '262355677834342';
const convert = (str22 = '') => {
   let res = '';
   for(let i = 0; i < str22.length; i++){
      const el = +str22[i];
      if(el < 5){
         res += 0;
      }else{
         res += 1;
      };
   };
   return res;
};
console.log(convert(str22));

function fakeBin(xmm) {
  return xmm.split('').map(n => n < 5 ? 0 : 1).join('');
}
console.log(convert('262355677834342'));

// fakeBin=x=>[...x].map(a=>+a<5?0:1).join('');

