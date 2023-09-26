/*
FUNCTION - funkcija
() - parametru blokas
{} - logikos blokas
{return 5} - grąžina 5
Iškvieciamos - "Funkcijos"
*/

//.....
console.clear();

function tuscia() {
//tuscias logikos blokas
}

const a = tuscia();
console.log(a);
console.log(tuscia());

function tuscia2() {
return undefined    }
console.log(a);
console.log(tuscia2());

function duokPenkis () {
return 5; //graziname 5
};
console.log(duokPenkis());

// 1) uzd: #########################

const userName1 = 'Jonas';
const userAge1 = 99;

// isspausdinti teksta:
// Jonas turejo 9 jubiliejus
const eser1Jubiliejai = (userAge1 - userAge1 % 10) / 10;
const user1Str = `${userName1} turejo ${eser1Jubiliejai} jubiliejus`
console.log(user1Str);

// Maryte turejo 8 jubiliejus
const userName2 = 'Maryte';
const userAge2 = 88;

const eser2Jubiliejai = (userAge2 - userAge2 % 10) / 10;
const user2Str = `${userName2} turejo ${eser2Jubiliejai} jubiliejus`
console.log(user2Str);


console.clear();

// 2) sprendimas


function jubiliejai(username, age) {
    const count = (age - age % 10) /  10;
    return `${username} turejo ${count} jubiliejus/ai`;

}
console.log(jubiliejai('Jonas', 99));
console.log(jubiliejai('Maryte', 88));
console.log(jubiliejai('Petras', 55));
console.log(jubiliejai('Ona', 44));



// Uzdavinys: name: pazymiu vidurkis yra vidurkis;

function studentAverage(name, marks) {
    let i = 0
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];

    const average = totalSum / marks.length;
return `${name}: pazymiu vidurkis yra ${average}`;

}
console.log(studentAverage('Jonas', [10, 2, 8, 4, 6]));
console.log(studentAverage('Maryte', [10, 2, 8, 4, 6]));
console.log(studentAverage('Petras', [10, 2, 8, 4, 6]));
console.log(studentAverage('Ona', [10, 2, 8, 4, 6]));
