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
    console.log('1. 3 yra daugiau uz 2'); //spausdina
}

if (5 < 2) {
    console.log('5 yra maziau uz 2'); //neisspausdina
}

if (true) {
    console.log('2. true'); //spausdina
}

if (false) {
    console.log('false'); //neisspausdina
}

// 2 sablono panaudojimas
  const a = 7;
  const b = 55;
  if(a > b) {
    console.log('3. A yra daugiau uz B');
  } else {
    console.log('3. B nera daugiau uz A');
  }

//   3 sablono panaudojimas

const day = 8;

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
 
const diena = 1;
if (diena === 1)
{console.log('Pirmadienis');
} 
    else {if (diena === 2) {console.log('Antradienis');}
        else {if (diena === 3) {console.log('Trečiadienis');}
            else {if (diena === 4) {console.log('Ketvirtadienis');}
                else {if (diena === 5) {console.log('Penktadienis');}
                    else {if (diena === 6) {console.log('Šeštadienis');}
                        else {if (diena === 7) {console.log('Sekmadienis');}
else {console.log('Tokia diena neegzistuoja');}
}
}
}
}
}
}

// U:
/*const parosMetas = 'diena';
const arLyja = false;

if (parosMetas === 'diena') {
    if(arLyja === true) {console.log('diena ir lyja');}
else {console.log('diena ir nelyja');}
} 
else {if(arLyja === "true") {console.log('naktis ir nelyja');
} else {console.log('naktis ir nelyja');}
}
*/

// U: V2
console.log('--------');

const parosMetas = 'naktis';
const arLyja = true; //true
const kadaSilta = 16;
const temp = 25;
const arAsSuStriuke = true;

if(parosMetas === 'diena' && arLyja === true && temp >= kadaSilta && arAsSuStriuke == true) {
console.log('1');
} else if(parosMetas === 'diena' && arLyja === true && temp >= kadaSilta && arAsSuStriuke == false) {
    console.log('2');
    } else if(parosMetas === 'diena' && arLyja === false && temp >= kadaSilta && arAsSuStriuke == true) {
        console.log('3');
    } else if(parosMetas === 'diena' && arLyja === true && temp < kadaSilta && arAsSuStriuke == true) {
        console.log('4');
    } else if(parosMetas === 'diena' && arLyja === true && temp < kadaSilta && arAsSuStriuke == true) {
        console.log('5');
    } else if(parosMetas === 'diena' && arLyja === true && temp < kadaSilta && arAsSuStriuke == true) {
        console.log('6');
    } else if(parosMetas === 'diena' && arLyja === false && temp < kadaSilta && arAsSuStriuke == true) {
        console.log('7');
    } else if(parosMetas === 'diena' && arLyja === false && temp < kadaSilta && arAsSuStriuke == fale) {
        console.log('8');
    } else if(parosMetas === 'naktis' && arLyja === true && temp >= kadaSilta && arAsSuStriuke == true) {
        console.log('9');
    } else if(parosMetas === 'naktis' && arLyja === true && temp >= kadaSilta && arAsSuStriuke == false) {
        console.log('10');
    } else if(parosMetas === 'naktis' && arLyja === false && temp < kadaSilta && arAsSuStriuke == true) {
        console.log('11');
    } else if(parosMetas === 'naktis' && arLyja === false && temp < kadaSilta && arAsSuStriuke == false) {
        console.log('12');
    } else if(parosMetas === 'naktis' && arLyja === true && temp >= kadaSilta && arAsSuStriuke == true) {
        console.log('13');
    } else if(parosMetas === 'naktis' && arLyja === true && temp >= kadaSilta && arAsSuStriuke == false) {
        console.log('14');
    } else if(parosMetas === 'naktis' && arLyja === false && temp < kadaSilta && arAsSuStriuke == true) {
        console.log('15');
    } else if(parosMetas === 'naktis' && arLyja === false && temp < kadaSilta && arAsSuStriuke == false) {
        console.log('16');
    } 

    console.clear()








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

