
// Class-es JSe. Clases rezultatas yra objektas. 

class Dog {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    setAge(naujasAmzius) {                      //set age yra metodas
        if (typeof naujasAmzius !== 'number') {
            return 'Error: turi buti skaicius.';
        }

        this.age = naujasAmzius;
        return naujasAmzius;
    }

    hello() {
        return `Au au, as esu ${this.name}!`;
    }
}

const rex = new Dog('Rex', 'black', 5); //paduodamos reiksmes i klase
const brisius = new Dog('Brisius', 'white', 6); //paduodamos reiksmes i klase

console.log(rex.setAge(6)); 
console.log(rex);
console.log(brisius);
console.log(rex.hello());
console.log(brisius.hello());
console.log(rex.age);