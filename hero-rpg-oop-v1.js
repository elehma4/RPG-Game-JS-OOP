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
// hero attacks goblin
enemy.health -= this.ATKPower
console.log(`
You do ${this.ATKPower} \u2694\uFE0F  damage to ${enemy.name}.`)
if (enemy.health <= 0){
    console.log(`${enemy.name} is dead.`)
}
}// end of rawInput 1
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
let Grubfoot = new Goblin("Grubfoot the Goblin", 6, 1)
let ZombiePirate = new Zombie("Zombie Pirate", infinity, 1)


//* HERO ATTACK OPTIONS:

//? Hero attacks Goblin:
// Elohim.attack(Grubfoot)

//? Hero attacks Zombie:
Elohim.attack(ZombiePirate)

