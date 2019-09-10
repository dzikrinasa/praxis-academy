function Vehicle(make, model, color) {
        this.make = make,
        this.model = model,
        this.color = color,
        this.getName = function () {
            return this.make + " " + this.model;
        }
}

let car = new Vehicle("Toyota", "Corolla", "Black");
let car2 = new Vehicle("Honda", "Civic", "White");




function Hiro(name, level) {
    this.name = name;
    this.level = level;
}

// Adding a method to the constructor
Hiro.prototype.greet = function() {
    return `${this.name} says hello.`;
}

// Creating a new constructor from the parent
function Fighter(name, level, spell) {
    // Chain constructor with call
    Hiro.call(this, name, level);

    this.spell = spell;
}
