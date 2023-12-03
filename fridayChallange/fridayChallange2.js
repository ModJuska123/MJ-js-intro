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

    console.log('4. -------------');

function randomNumbers() {
    const number1 = Math.floor(Math.random() * (6 - 0) + 0);
    const number2 = Math.floor(Math.random() * (6 - 0) + 0);
    const number3 = Math.floor(Math.random() * (6 - 0) + 0);
    return `${number1}, ${number2}, ${number3}`
}
console.log(randomNumbers());

    // 5. Parašykite funkciją kuri priimtų tris parametrus "from" ir "to" ir "limit". Patikrinkite ar 
    // šie perduodami parametrai yra skaičiai ir pagal juos sugeneruokite masyvą, kurio ilgį nusako 
    // "limit" parametras, o reikšmės from ir to nurodo atsitiktinį skaičių šiuose rėžiuose.

    console.log('5. -------------');


function createRandomArray(from, to, limit){
    let randomNumbersArray = '';
    const characters = '0123456789'.slice(from, to+1); 
    for(let i = 0; i < limit; i++) {
        randomNumbersArray += characters.charAt(Math.floor(Math.random() * characters.length));
    }   return [randomNumbersArray];
    }
    console.log(createRandomArray(0, 9, 50)); //patikrinti ar skaicius

    // 6. Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir grąžintų reikšmę (perduodami 
    //     du parametrai: skaičius ir laipsnis)

    console.log('6. -------------');

let finalValue = 0;
function multiplyByGrade(start, grade) {
   const valueOfMultiply = start ** grade;
    return `${start} ** ${grade} value ${valueOfMultiply}.`;
}
console.log(multiplyByGrade(5, 2));
console.log(multiplyByGrade(5, 3));
console.log(multiplyByGrade(5, 4));

    
    // 7. Parašykite funkciją, kurios parametras būtų tekstas, kuris yra įterpiamas į h1 tagą. 
    // Rezultatą atvaizduokite naršyklėje. 
    console.log('7. -------------');

    // negavau rezultato, dar nesimokem ir neradau internete.

    // 8. Parašykite funkciją su dviem parametrais. Pirmasis yra tekstas, įterpiamas į h tagą, o 
    // antrasis tago numeris (1-6). Rašydami šią funkciją remkitės antrame uždavinyje 
    // parašyta funkcija.
    console.log('8. -------------');

     // negavau rezultato, dar nesimokem ir neradau internete

    // 9. Aprašykite funkciją kuri priimtų vieną parametrą "number" bei patikrintų ar duotas 
    // skaičius yra pirminis. Atgal grąžinkite teigiamą arba neigiamą (boolean) atsakymą.
    // https://lt.wikipedia.org/wiki/Pirminis_skai%C4%8Dius
    
    console.log('9. -------------'); 
   
    let isPrime = true;
    function primeNumber(number)            //kai number = 1, meta klaida
    {for (let i = 2; i < number; i++) {if (number == 1 && number % i == 0) {isPrime = false; break} else {isPrime = true}};
    
    return isPrime;
    }
    console.log(primeNumber(2));
  
    // 10. Sugeneruokite 100 elementų masyvą kurio reikšmės atsitiktiniai skaičiai 
    // nuo 997 iki 15991.
    console.log('10. -------------');

    function getRandomArray(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;};

        const randomArray = [];
        
        for (let i = 0; i < 100; i++) {
            const randomNumber = getRandomArray(997, 15991);
            randomArray.push(randomNumber);
        }
        console.log(randomArray);
    
    // 11. Pasinaudodami devintoje užduotyje aprašyta funkcija masyve palikite tik 
    // pirminius skaičius, kurie yra didesni nei 5000;
    console.log('11. -------------');

    const arrayNew = [];
    for (let i = 0; i < 100; i++) {
        if (randomArray[i] > 5000) {arrayNew.push(randomArray[i])}
    }
    console.log(arrayNew);


   