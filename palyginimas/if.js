/*
IF - palyginimo sakinys/sąlyga
Kodo šablonai:
if () {}
if () {} else if () {}
if () {} else if () {} ... else{}

*/

console.clear();

// 1 sablono panaudojimas
if (4 > 2) {
    console.log('4 yra daugiau uz 2');
}

if (5 < 2) {
    console.log('5 yra maziau uz 2');
}

if (true) {
    console.log('true'); //spausdina
}

if (false) {
    console.log('false'); //neisspausdina
}

// 2 sablono panaudojimas
  const a = 7;
  const b = 12;

  if(true) {
console.log('A yra daugiau uz B');

  } else {
    console.log('B nera daugiau uz A');
  }

//   3 sablono panaudojimas

const day = 7;

if (day == 1) {
    console.log('Pirmadienis');
} else if (day % 7 == 2) {
    console.log('Antradienis');
} else if (day % 7 == 3) {
    console.log('Trečiadienis');
} else if (day % 7 == 4) {
    console.log('Ketvirtadienis');
} else if (day % 7 == 5) {
    console.log('Penktadienis');
} else if (day % 7 == 6) {
    console.log('Šeštadienis');
} else if (day % 7 == 0) {
    console.log('Sekmadienis');
} else {
    console.log('Tokia diena neegzistuoja');
}

//  Kodo nestinimas
 
/*const diena = 1;


// ND sukurkite funkciją 
// Sukurkite funkciją, kuri priima skaičių ir priklausomai, 
// ką sugebame nustatyti apie tą skaičiu išspausdiname atitinkamą sabloną.
// Kas uzdavinyje nenumatyta?

/* 
const number = 7;

if (number == 0 && number % 2 > 0) {
    console.log('Lyginis skaicius');
} else if (number % 7 == 2) {
    console.log('');
} else if (number % 7 == 3) {
    console.log('');
} else if (number % 7 == 4) {
    console.log('');
} else if (number % 7 == 5) {
    console.log('');
} else if (number % 7 == 6) {
    console.log('');
} else if (number % 7 == 0) {
    console.log('');
} else {
    console.log('Toks skaicius neapibreztas');}
    */
console.clear();
