// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
//Tikrina ra baigtinis skicius

/*
console.log(isFinite(6));
console.log(isFinite(3.14));
console.log(isFinite(-5));
console.log(isFinite(-3.14));
console.log(isFinite(0));
console.log(isFinite(99999999999990));

console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));

const a = NaN;

if (isFinite(a)) {
    console.log('Taip');
} else {
    console.log('Ne');
}


//tikrina ar yra yra de6imtainis skaicius
const b = 7;

if (isFinite(b) && Number.isInteger(b)) {
    console.log('Sveikasis skaicius');
} else if (isFinite(b) && !Number.isInteger(b)) {
    console.log('Desimtainis skaicius');
} else {
    console.log('Ne normalus skaicius: NaN arba Infinity');
}

if (isFinite(b)) {
    if (Number.isInteger(b)) {
        console.log('Sveikasis skaicius');
    } else {
        console.log('Desimtainis skaicius');
    }
} else {
    console.log('Ne normalus skaicius: NaN arba Infinity');
}


//parseInt atpazinti skaicius sveikius.

console.log(parseInt(false));
console.log(parseInt([]));
console.log(parseInt(''));
console.log(parseInt('penki'));
console.log(parseInt('123'));
console.log(parseInt('asd123'));
console.log(parseInt('123asd'));
console.log(parseInt('123asd456'));
console.log(parseInt('123.456'));
console.log(parseInt('Infinity'));
console.log(parseInt('123kkk'));



// parseFloat atpazinti skaicius desimtainius.

console.log(parseFloat(''));
console.log(parseFloat('789'));
console.log(parseFloat('789.101'));
console.log(parseFloat('-789'));
console.log(parseFloat('-789.101'));
console.log(parseFloat('Infinity'));
console.log(parseFloat('-789.101asd'));
console.log(parseFloat('asd-789.101asd'));
console.log(parseFloat('-asd789.101asd'));
console.log(parseFloat('25.888kkk'));



//Tikrina at yra ne skaicius
console.log(isNaN(5));
console.log(isNaN(3.14));
console.log(isNaN(Infinity));
console.log(isNaN(NaN));



//duoda tieks skaiciu po kablelio, kieks prasoma
const kaina = 3.14;
console.log(kaina, '3.14');
console.log(kaina.toFixed());
console.log(kaina.toFixed(0));
console.log(kaina.toFixed(1));
console.log(kaina.toFixed(2));
console.log(kaina.toFixed(3));
console.log(kaina.toFixed(4));
console.log(kaina.toFixed(5));

// parseInt / parseFloat atpazinti skaicius sveikius / desimtainius.
const keistasSkaicius = 0.1 + 0.2;
console.log(keistasSkaicius);

const keistasSkaicius2 = keistasSkaicius.toFixed(10);
console.log(keistasSkaicius2);

const keistasSkaicius3 = parseInt(keistasSkaicius2);
console.log(keistasSkaicius3);

const keistasSkaicius4 = parseFloat(keistasSkaicius2);
console.log(keistasSkaicius4);

const keistasSkaicius5 = +'1.23';
console.log(keistasSkaicius5);

const keistasSkaicius6 = +keistasSkaicius2;
console.log(keistasSkaicius6);

//to Fixed - duoda skaicius po kablelio, kiek prasomas

const c = 6.999999999999999;
console.log(c);
console.log(c.toFixed(5));

const d = 5.6789;
console.log(d.toFixed(6));
console.log(d.toFixed(5));
console.log(d.toFixed(4));
console.log(d.toFixed(3));

const e = 5.6784;
console.log(e.toFixed(6));
console.log(e.toFixed(5));
console.log(e.toFixed(4));
console.log(e.toFixed(3));

console.clear();
*/
//Auksciau Rimanto pavyzdziai, nuo cia mano 
//isFinite(num|NaN)
console.log(isFinite(10));

// Number.isFinite(num|NaN)
console.log(Number.isInteger(-10.5));

//Number.pareseInt('')
console.log(Number.parseInt('10kkk'));

//Number.pareseFloat('')
console.log(Number.parseFloat('10.1KKK'));

//Number.isNaN('')
console.log(isNaN('10'));

//.toFixed('')
const kaina = 3.14;
console.log(kaina.toFixed(1));

// .slice -> iskerpa simbolius nurodytus sklaistuose

const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers61 = numbers6.splice(0, 4);
console.log(numbers6);

// .splice -> trina dali iraso, pagal nurodyta skaisiu indekso, tada iraso naujas


const numbers8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers81 =numbers8.splice(6, 2, 111);
console.log(numbers8);

