// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

console.clear();

console.log(isFinite(5));
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

console.clear();

//...
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
console.clear();

//...

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

console.clear();

//...

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

console.clear();

//...

console.log(isNaN(5));
console.log(isNaN(3.14));
console.log(isNaN(Infinity));
console.log(isNaN(NaN));
