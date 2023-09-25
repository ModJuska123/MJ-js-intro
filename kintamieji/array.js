console.clear();
/*
array - sarasas / masyvas/ kolekcija / listas /arejas


*/

const tuscias = [];
console.log(tuscias);


        // index: 0  1  2  3  4
const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai, 'sudaro', pazymiai.length, 'skaiciai');

const studentai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentai);

const pirmaspazymys = pazymiai[0];
console.log(pirmaspazymys);

const antaraspazymys = pazymiai[1];
console.log(antaraspazymys);

const paskutinispazymys = pazymiai[pazymiai.length-1]
console.log(paskutinispazymys);

const pazymiopozicija = pazymiai.length-1;
const paskutinispazymys1 = pazymiai[pazymiopozicija];
console.log(paskutinispazymys1);
console.clear();
/*
ND: 
uzd. 1. 
Masyvas pazymiu.
suskaiciuoti pazymiu vidurki ir isvesti, kaip 
sakini: "studento pazymiu vidurkis yra 7."
1.1. susigalvoti pazymiu masyva



uzd. 2. 
Masyvas vietovardziu.
suformuoti sakini: mano aplankytos vietos: 
"Vieta1, vieta2, Vieta3, Vieta4."


*/
//uzd. 1. sprendimas:
const sp = [8,7,7,6];
const spv = (sp[0] + sp[1] + sp[2] + sp[3])/4;
const studento = 'Studento';
const pazymiu = 'pazymiu';
const vidurkis = 'vidurkis';
const yra = 'yra';
const pilnastekstas = `"${studento} ${pazymiu} ${vidurkis} ${yra} ${spv}."`;
console.log(pilnastekstas);

//uzd. 2. sprendimas:
const av = ['Trakai', 'Palanga', 'Kernave', 'Klaipeda'];
const mano = 'Mano';
const aplankytos = 'aplankytos';
const vietos = 'vietos';
const pilnastekstas1 = `"${mano} ${aplankytos} ${vietos}: ${av[0]}, ${av[1]}, ${av[2]}, ${av[3]}."`;
console.log(pilnastekstas1);


//1 uzdavinio sprendimas klaseje:

const marks = [10,2,8,4,6];
let markssum = 0;
markssum += marks[0];
markssum += marks[1];
markssum += marks[2];
markssum += marks[3];
markssum += marks[4];
const marksAverage = markssum / marks.length;
const studentmarks = `Studento pazymiu vidurkis yra ${marksAverage}.`;
console.log(studentmarks);

//2 uzdavinio sprendimas klaseje:

const places = ['Siaures asigalis', 'Menulis', 'Pusiaujas'];
let placesstr = '';
placesstr += places[0];
placesstr += ', ';
placesstr += places[1];
placesstr += ', ';
placesstr += places[2];
const placessentence = `Mano aplankytos vietos: ${placesstr}.`;
console.log(placessentence);

console.clear();

// +++;

let a = 5;
let x = 7;
x = x + (++a);
console.log(x);

const colors = ['geltona', 'zalia', 'raudona'];
console.log(colors);

colors[1] = 777;
console.log(colors);
console.log('-------------');

const name = 'Chuck';
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log('-------------');
// pakeisti constantos negalima, isskyrus pakeitus i let.



