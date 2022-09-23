class Trainer {
    constructor(name) {
        this.name = name;
        this.age = 18;
        this.pokemon = ["Blaziken", "Infernape", "Medicham", "Machoke"];
        this.friends = {
            hoenn: ["May", "Max"],
            Kanto: ["Brock", "Misty"]
        }
    }
    talk() {
        console.log("Blaziken i choose you!")
    }
}

const trainer = new Trainer("Maynard E.");
console.log(trainer);
console.log(`Result of dot notation:`);
console.log(trainer.name);
console.log(`Result of square bracket notation:`);
console.log(trainer["pokemon"]);
console.log(`Result of talk method`);
trainer.talk();

class Pokemon {
    constructor(name, level, health, attack) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.attack = attack;
    }
    tackle(target) {
        target.health = target.health - this.attack;
        console.log(`${this.name} tackled ${target.name}`);
        console.log(`${this.name} health is now reduced to ${target.health}`)
        if (target.health <= 0) {
            console.log(`${target.name} fainted`)
        }
    }
}

const blaziken = new Pokemon("Blaziken", 12, 24, 12);
const geodude = new Pokemon("Geodude", 8, 16, 8);
const mewtwo = new Pokemon("Mewtwo", 100, 200, 100);

console.log(blaziken);
console.log(geodude);
console.log(mewtwo);

geodude.tackle(blaziken);
mewtwo.tackle(geodude);

console.log(geodude);