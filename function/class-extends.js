console.clear();

class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'Miau Au Cypt Cham';
    }

    setColor(newColor) {
        this.color = newColor;
    }

    sayHi() {
        return `${this.name}: ${this.sound}, as esu ${this.color} spalvos!`;
    }
}

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Au Au';
    }

    repeatTwice() {
        return 'repeat in progress...';
    }
}

class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Miau Miau';
    }
}

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Cham Cham';
    }
}

const rex = new Dog('Rex', 'juodos');
// console.log(rex.sayHi());
// console.log(rex.repeatTwice());
// console.log(rex.setColor('black'));
// console.log(rex.sayHi());

const garfildas = new Cat('Garfildas', 'oranzines');
// console.log(garfildas.sayHi());

const tom = new Hamster('Tom', 'juodos');
console.log(tom.sayHi());

console.log('------------------');
// to square root:
//Write a method, that will get an integer array 
// as parameter and will process every number from this 
// array.

// Return a new array with processing every number 
// of the input-array like this:

// If the number has an integer square root, 
// take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only 
// positive numbers, and will never be empty or null.
//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

function squareOrSquareRoot(array) {
    return array;  
    // console.log(array);
  }

