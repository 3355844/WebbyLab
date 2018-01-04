class Animal {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}


class Dog extends Animal {
    bark() {
        return 'Dog ' + this.name + ' is barking';
    }
}

let dog = new Dog('Aban');
console.log(dog.getName() === 'Aban');
console.log(dog.bark() === 'Dog Aban is barking');
