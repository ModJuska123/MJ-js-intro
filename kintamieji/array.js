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




