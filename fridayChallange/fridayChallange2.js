console.clear();
    // 10 27 užduotys
    // 1. Sukurkite funkciją kuri priimtų parametrą "name". Jos tikslas atspausdinti naršyklėje tekstą 
    // "Labas," ir šalia jo perduotą vardą. Pvz "Labas, Elena".
    
console.log('1. -------------');


function helloName(name) {
 
    return `Labas ${name}`;
};
console.log(helloName('Elena'));
console.log(helloName('Onute'));
console.log(helloName('Petrai'));
console.log(helloName('Chuck'));
console.log(helloName('Jonai'));

    // 2. Sukurkite funkciją  kuri priimtų vieną parametrą (tekstą) ir grąžintų atsakymą kiek simbolių 
    // yra tame tekste. Iš funkcijos gautą rezultatą atvaizduokite naršyklėje.

console.log('2. -------------');

function numberOfSymbols(str) {  
    let symbolCalaculator = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] != 0) {symbolCalaculator += 1; 
        };
    }
    return `Number of symbols in the text "${str}" is ${symbolCalaculator}.`;
}
console.log(numberOfSymbols('Labas rytas, Lietuva!'));

    // 3. Sukurkite funkciją kuri priimtų du parametrus "name" ir "last_name". Funkcija turi grąžinti 
    // vieną stringą, kuriame būtų vardas ir pavardė prasidedantys didžiosiomis raidėmis.

console.log('3. -------------');

function nameSurname(name2, surname2) {
    const checkCapitalName = name2.slice(0, 1) == name2.slice(0, 1).toUpperCase() && surname2.slice(0, 1) == surname2.slice(0, 1).toUpperCase() ? `${name2} ${surname2}` : 'Vardas ir pavarde turi buti didziosionis!';
    return checkCapitalName;
}
console.log(nameSurname('Giedre', 'Giedrutiene'));


    // 4. Parašykite funkciją kuri sugeneruotų 3 random skaičius nuo 0 iki 5 ir atspausdintų konsolėje 
    // vienoje eilutėje atskirtus kableliais. Po paskutinio skaičiaus kablelio neturi būti.






    
    // Parašykite funkciją kuri priimtų tris parametrus "from" ir "to" ir "limit". Patikrinkite ar 
    // šie perduodami parametrai yra skaičiai ir pagal juos sugeneruokite masyvą, kurio ilgį nusako 
    // "limit" parametras, o reikšmės from ir to nurodo atsitiktinį skaičių šiuose rėžiuose.
    // Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir grąžintų reikšmę (perduodami 
    //     du parametrai: skaičius ir laipsnis)
    // Parašykite funkciją, kurios parametras būtų tekstas, kuris yra įterpiamas į h1 tagą. 
    // Rezultatą atvaizduokite naršyklėje.
    // Parašykite funkciją su dviem parametrais. Pirmasis yra tekstas, įterpiamas į h tagą, o 
    // antrasis tago numeris (1-6). Rašydami šią funkciją remkitės antrame uždavinyje 
    // parašyta funkcija.
    // Aprašykite funkciją kuri priimtų vieną parametrą "number" bei patikrintų ar duotas 
    // skaičius yra pirminis. Atgal grąžinkite teigiamą arba neigiamą (boolean) atsakymą.
    // https://lt.wikipedia.org/wiki/Pirminis_skai%C4%8Dius
    // Sugeneruokite 100 elementų masyvą kurio reikšmės atsitiktiniai skaičiai 
    // nuo 997 iki 15991. 
    // Pasinaudodami devintoje užduotyje aprašyta funkcija masyve palikite tik 
    // pirminius skaičius, kurie yra didesni nei 5000;
    