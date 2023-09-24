//console.clear  
const amzius = 50;
console.log ('zmogus, kurio amzius', amzius);

const txt1 = "tekstas 1";
console.log(txt1);

const txt2 = "tekstas 2";
console.log(txt2);

console.clear();

// vienguba kabute (') ->\ pries simboli reiskia, kad bus simbolis spausdinamas
const kabute1 = "vienguba kabute (').";
console.log(kabute1);

// vienguba ir dviguba kabutes
const kabute2 = "vienguba kabute (') ir dvigubos kabutes (\")";
console.log(kabute2);

const back = "\\";
console.log(back);

// \n - new line, \r - return
const formatuotastekstas = "Labas \n\rrytas, \n\rLietuva!";
console.log(formatuotastekstas);

const lrl = "Labas\n\r\
rytas,\n\r\
Lietuva!";
console.log(lrl);

const lrlbacktik = `Labas 
rytas, 
Lietuva!`;
console.log(lrlbacktik);

console.clear();

const vardas = 'Chuck';
console.log(vardas, '=', vardas.length, 'raides');

const pavarde = 'Noris';

const pilnasvardas  = 'Chuck Noris';
console.log(pilnasvardas, pilnasvardas.length);

const fullname = vardas + ' ' + pavarde;
console.log(fullname);

//Labas tytas Lietuva!
const labas = 'Labas';
const rytas = 'rytas';
const lietuva = 'Lietuva';
const lrl2 = labas + ' ' + rytas + ',' + ' ' + lietuva + '!';
console.log(lrl2);

//Labas rytas Lietuva!
const lrl3 = `${labas} ${rytas}, ${lietuva}!`;
console.log(lrl3);

