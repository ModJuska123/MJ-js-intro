// Manto uzduotys:
// 1 Užduotis
// Markas ir Johnas bando palyginti savo KMI (kūno masės indeksą), kuris yra
// apskaičiuojamas pagal formulę:
// KMI = masė / ūgis ** 2 = masė / (ūgis * ūgis) (masė kg ir aukštis metrais).
// Jūsų užduotys:
// 1. Išsaugokite Marko ir Jono masę ir ūgį kintamaisiais
// 2. Apskaičiuokite abiejų jų KMI naudodami formulę 
// 3. Sukurkite true false kintamąjį „markHigherBMI“ su informacija apie ar Marko KMI didesnis nei Jono.

// Bandymo duomenys:
// § 1 duomenys: sveria 78 kg ir yra 1,69 m ūgio. Jonas sveria 92 kg ir yra 1,95 ūgio
// m aukščio.
// § 2 duomenys: sveria 95 kg ir yra 1,88 m ūgio. Jonas sveria 85 kg ir yra 1,76 ūgio
// m aukščio.

const jonoUgis = 1.95; 
const jonoSvoris = 92;
const markoSvoris = 78;
const markoUgis = 1.69;

const kmi = (ugis, svoris) => (svoris / (ugis * ugis)).toFixed(1);
const jonoKMI1 = kmi(jonoUgis, jonoSvoris);
const markoKMI1 = kmi(markoUgis, markoSvoris);

console.log(kmi(jonoUgis, jonoSvoris));
console.log(kmi(markoUgis, markoSvoris));

const palyginimas = markoKMI1 > jonoKMI1 ? 
console.log(`„markHigherBMI - true`) : 
console.log(`„markHigherBMI - false`);

// Friday chalenge 2:

// Evenas nori sukurti labai paprastą arbatpinigių skaičiuotuvą, kai jis eina valgyti į 
// restoraną. Jo šalyje įprasta duoti 15 % arbatpinigių, jei sąskaitos vertė yra nuo 50 iki
// 300. 
// Jei vertė skiriasi, arbatpinigiai yra 20%.
// Jūsų užduotys:
// Apskaičiuokite arbatpinigių, priklausomai nuo sąskaitos vertės. Sukurkite kintamąjį pavadinimu „Tip“.
// Neleidžiama naudoti if/else teiginio  (Jei jums taip lengviau, galite
// pradėti nuo if/else teiginio, tada pabandykite jį konvertuoti į ternery
// operator!)
// Į konsole atspausdinkite eilutę, kurioje yra sąskaitos vertė, arbatpinigiai ir galutinė vertė
// (sąskaita + arbatpinigiai). Pavyzdys: „Sąskaita buvo 275, arbatpinigiai 41,25, o bendra vertė
// 316,25"
// Bandymo duomenys:
// § 1 duomenys: patikrinkite sąskaitos reikšmes 275, 40 ir 430


