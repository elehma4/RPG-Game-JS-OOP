// Hero RPG Game: Part 2
// You will base your game on version 1 of the game and make mods to the game.

//? ## Characters
//todo 1. Make the hero generate double damage points during an attack with a probability of 20%
//todo 2. Make a new character called `Medic` that can sometimes recuperate 2 health points after being attacked with a probability of 20%
//todo 3. Make a character called `Shadow` who has only 1 starting health but will only take damage about once out of every ten times he is attacked.
//todo 4. Make a `Zombie` character that doesn't die even if his health is below zero
//todo 5. Come up with at least two other characters with their individual characteristics, and implement them.
//todo 6. Give each enemy a bounty. For example, the prize for defeating the `Goblin` is 5 coins, for the Wizard it is 6 coins.

//? ## Items
//todo 1. Make a `SuperTonic` item to the store, it will restore the hero back to 10 health points.
//todo 2. Add an `Armor` item to the store. Buying an armor will add 2 armor points to the hero - you will add "armor" as a new attribute to hero. Every time the hero is attacked, the amount of hit points dealt to him will be reduced by the value of the armor attribute.
//todo 3. Add an `Evade` item to the store. Buying an "evade" will add 2 evade points to the hero - another new attribute on the Hero object. The more evade he has, the more probable that he will evade an enemy attack unscathed. For example: 2 evade points: 10% probably of avoiding attack, 4 evade points: 15% probability of avoiding attack. It should never be possible to reach 100% evasion though.
//todo 4. Come up with at least two other items with their unique characteristics and implement them. You can add more attributes to the hero or the characters.

const prompt = require('prompt-sync')({sigint: true});

class Character{

constructor(health, ATKPower){
    this.health = health;
    this.ATKPower = ATKPower;
}

lifeStatus(){
    console.log(`${this.name} has ${this.health} health`)
}

characterStats(){
return `
${this.name} has ${this.health} \u2764  health and ${this.ATKPower} \u2694\uFE0F  attack power.`;
}
    
attack(enemy){
//? Condition for game to keep going
while(this.health > 0 && enemy.health > 0){

let heroStats = this.characterStats();
let enemyStats = enemy.characterStats();
//* Menu:
console.log(`${heroStats} ${enemyStats}

What do you want to do?
1. fight ${enemy.name}
2. do nothing
3. flee
>`)
let rawInput = prompt()

if (rawInput == "1"){
if (this.name == "Princess Addy" && enemy.name == "Zombie Pirate \u2620 "){
console.log(`${this.name} uses a special potion from the kingdom: Mortality Elixir \u2697`);
enemy.health = 0
console.log(`*poof*`);
console.log(`The potion turns the ${enemy.name} to dust.`);
console.log(`${enemy.name} is dead.`)
return;
}
// hero attacks goblin
enemy.health -= this.ATKPower
console.log(`
You do ${this.ATKPower} \u2694\uFE0F  damage to ${enemy.name}.`)
if (enemy.health <= 0){
    console.log(`${enemy.name} is dead.`)
}

} // end of rawInput 1
else if (rawInput == "2"){

}
else if (rawInput == "3"){
    console.log(`Good luck catching me ${enemy.name}.`);
    return;
}
else{
    console.log(`Invalid input ${rawInput}`);
}
if (enemy.health > 0){
    // Goblin attacks hero
    this.health -= enemy.ATKPower
    console.log(`${enemy.name} does ${enemy.ATKPower} \u2694\uFE0F  damage to you.`)
    if (this.health <= 0){
        console.log("You are dead.")
    }
}// end of enemy if statement
}// end of while statement
}// end of attack method
}// end of Character class

class Hero extends Character{
    constructor(name, health, ATKPower){
        super(health, ATKPower)
        this.name = name;
    }
}
class Goblin extends Character{
    constructor(name, health, ATKPower){
        super(health, ATKPower)
        this.name = name;
    }
}
class Zombie extends Character{
    constructor(name, health, ATKPower){
        super(health, ATKPower)
        this.name = name;
    }
}
let infinity = Number(Infinity)

let Elohim = new Hero("Hero Elohim", 10, 2)
let PrincessAddy = new Hero("Princess Addy", 15, 3)
let Grubfoot = new Goblin("Grubfoot the Goblin", 6, 1)
let Mudknuckles = new Goblin("Mudknuckles", 5, 10)
let ZombiePirate = new Zombie("Zombie Pirate \u2620 ", infinity, 1)


//* HERO ATTACK OPTIONS:

//? Hero attacks Goblin:
// Elohim.attack(Grubfoot)
// PrincessAddy.attack(Mudknuckles)

//? Hero attacks Zombie:
// Elohim.attack(ZombiePirate)
PrincessAddy.attack(ZombiePirate)