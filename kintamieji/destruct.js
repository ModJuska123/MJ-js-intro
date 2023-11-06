//destruct sintakse priskiria masyvo reiksmes m1, m2 ir kt.
const marks = [10, 2, 8, 4, 6];

const [m1, m2, m3, ...otherMs] = marks;
console.log(m1, m2, m3, otherMs);




// is objekto istraukimas
const user = {
name: 'Jonas',
age: 99,
isMarried: true,
children: [{
    name: 'Marytes',
    age: 88,
    isMarried: true,
}]}
const {isMarried, age, children} = user;
console.log(isMarried, age);
console.log(children);

//  objekto sukurimas

const zip = 123456;
const street = 'Gedimino g.'
const houseNr = 7;

const adresas = {zip, street, houseNr};
console.log(adresas);