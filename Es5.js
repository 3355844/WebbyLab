function Animal(name) {
    this.name = name;
}

Animal.prototype.getName = function () {
    return this.name;
};

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Animal.prototype;

Dog.prototype.bark = function () {
    return 'Dog ' + this.name + ' is barking';
};

var dog = new Dog('Aban');
console.log(dog.getName() === 'Aban');
console.log(dog.bark() === 'Dog Aban is barking');




