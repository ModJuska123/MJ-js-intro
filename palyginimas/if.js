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

const day = 1;

if (day == 1) {
    console.log('Pirmadienis');
} else if (day == 2) {
    console.log('Antradienis');
} else if (day == 3) {
    console.log('Trečiadienis');
} else if (day == 4) {
    console.log('Ketvirtadienis');
} else if (day == 5) {
    console.log('Penktadienis');
} else if (day == 6) {
    console.log('Šeštadienis');
} else if (day == 7) {
    console.log('Sekmadienis');
} else {
    console.log('Tokia diena neegzistuoja');
}