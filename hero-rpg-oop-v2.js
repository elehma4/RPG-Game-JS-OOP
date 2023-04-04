// Hero RPG Game: Part 2

const prompt = require('prompt-sync')({sigint: true});

class Character{
constructor(health, ATKPower){
    this.health = health;
    this.ATKPower = ATKPower;
    this.isConfused = false;
}

lifeStatus(){
    return `${this.name} has ${this.health} \u2764  health`
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
//* ----------------------------------------------------------------------------------------------
//? ITEMS FOR GAME:
//*            +7hp                       -50% accuracy for 1 turn (enemy)
let items = ['Cooked Trout\uD83D\uDC1F', 'Confuse Spell \u2697\uFE0F']
//* ----------------------------------------------------------------------------------------------
//? PROMPT MENU:
console.log(`${heroStats} ${enemyStats}

What do you want to do?
1. fight ${enemy.name}
2. eat ${items[0]} or use ${items[1]}
3. do nothing
4. flee
>`)
let rawInput = prompt()
//* ----------------------------------------------------------------------------------------------
if (rawInput == "1"){
if (this.name == "Princess Addy\uD83D\uDC51" && enemy.name == "Zombie Pirate \u2620 "){
console.log(`${this.name} uses a special potion from the kingdom: ${weapons[2]}`);
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
} // end of rawInput 1 (fight)
//* ----------------------------------------------------------------------------------------------
else if (rawInput == "2"){
    console.log(`Would you like to eat ${items[0]} (1) or use a ${items[1]} (2)`);
    let choice1or2 = prompt()
    if(choice1or2 == "1"){
        this.health += 7;
        console.log(`${this.name} eats the ${items[0]} and restores 7 \u2764  health`);
        console.log(`${this.lifeStatus()}`);
    } else if (choice1or2 == "2"){
        console.log(`${this.name} uses a ${items[1]}  on ${enemy.name} and decreased their accuracy by 50%`);
        enemy.isConfused = true;
    } 
    if(enemy.isConfused) {
        console.log(`${enemy.name} is confused.\uD83D\uDE35`);
        // hero attacks goblin
        enemy.health -= this.ATKPower
        console.log(`You do ${this.ATKPower} \u2694\uFE0F  damage to ${enemy.name}.`)
        if (enemy.health <= 0){
        console.log(`${enemy.name} is dead.`)
        }
    } 
} // end of rawInput 2 (items)
//* ----------------------------------------------------------------------------------------------
else if (rawInput == "3"){

} // end of rawInput 3 (do nothing)
else if (rawInput == "4"){
    console.log(`${this.name} quickly puts on ${armor[2]}`);
    console.log(`Good luck catching me ${enemy.name}.`);
    return;
} // end of rawInput 4 (flee)
else{
    console.log(`Invalid input ${rawInput}`);
}
//* ----------------------------------------------------------------------------------------------
if (enemy.health > 0 && enemy.isConfused == false){
    // Goblin attacks hero
    this.health -= enemy.ATKPower
    console.log(`${enemy.name} does ${enemy.ATKPower} \u2694\uFE0F  damage to you.`)
    if (this.health <= 0){
        console.log("You are dead.")
    }
} else if (enemy.health > 0 && enemy.isConfused == true){
    const randomNumber50 = Math.floor(Math.random() * 100);
        if (randomNumber50 < 50){
            console.log(`${enemy.name} missed their attack.`);
        } else if (randomNumber50 >= 50){
            console.log(`${enemy.name} hits their attack despite being confused.`);
            this.health -= enemy.ATKPower;
            console.log(`${enemy.name} does ${enemy.ATKPower} \u2694\uFE0F  damage to you.`);
            if(this.health <= 0){
                console.log("You are dead.");
            }
        }
} enemy.isConfused = false; // isConfused is reset after 1 turn
console.log('-------------------------------------------');
if(enemy.health > 0 && this.health > 0){
console.log('\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25 NEXT TURN \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25');
}
// end of enemy if statement
}// end of while statement
console.log('\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25 GAME OVER \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25');
}// end of attack method
}// end of Character class
//* ----------------------------------------------------------------------------------------------

class Hero extends Character{
    constructor(name, health, ATKPower, armor, weapon){
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
class Wizard extends Character{
    constructor(name, health, magicPower){
        super(health);
        this.name = name;
        this.magicPower = magicPower;
    }
}
class Shades extends Character{
    constructor(name, health, ATKPower){
    super(health, ATKPower);
    this.name = name;
    }
}
//* ----------------------------------------------------------------------------------------------
// ARMOR:
//?               50% protection  |   30% protection
let armor = ['Rune Full Body Armor \uD83D\uDEE1\uFE0F', 'Graceful Cloak\uD83E\uDDB8', 'Agility Boots\uD83E\uDD7E']
//?              ATKPower +2 | -1 hp every other turn to enemy |  speed to flee
let weapons = ['Dragon Scimitar \uD83D\uDDE1\uFE0F \uD83D\uDD25', 'Poisin Dagger \uD83D\uDDE1\uFE0F \uD83E\uDE78', 'Mortality Elixir \uD83E\uDDEA']
//* ----------------------------------------------------------------------------------------------
// Hero Player Options:
let Elohim = new Hero("Hero Elohim", 20, 3, armor[0], weapons[0])
let PrincessAddy = new Hero("Princess Addy\uD83D\uDC51", 15, 3, armor[1], weapons[1])
let WizardArianwyn = new Wizard("Elf Wizard Arianwyn\uD83E\uDDDD\u200D", 30, 5) // Ally Wizard -> Uses fire wave 50% & water wave 50%
//* ----------------------------------------------------------------------------------------------
// Enemy Options:
let WizardLucien = new Wizard("Wizard Lucien", 13, 3) // Enemy Wizard -> Uses soul split which restores 1 health
let Grubfoot = new Goblin("Grubfoot the Goblin", 8, 2)
let Mudknuckles = new Goblin("Mudknuckles", 5, 5)
let infinity = Number(Infinity)
let ZombiePirate = new Zombie("Zombie Pirate \u2620 ", infinity, 1)
let Shade = new Shades("Shade\uD83C\uDF0C", 3, 1)

//* ----------------------------------------------------------------------------------------------

characterChoices = () => {
console.log(`\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25 WELCOME TO HEROSCAPE \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25

Choose Your Hero: 
1) ${Elohim.name}
2) ${PrincessAddy.name}
3) ${WizardArianwyn.name}`);
let yourHero = prompt()

if (yourHero == '1'){
    yourHero = Elohim;
} else if (yourHero == '2'){
    yourHero = PrincessAddy;
} else if (yourHero == '3'){
    yourHero = WizardArianwyn;
} else {return `${yourHero} is invalid`}

console.log(`Choose Your Enemy: 
1) ${Grubfoot.name}
2) ${Mudknuckles.name}
3) ${WizardLucien.name}
4) ${ZombiePirate.name}
5) ${Shade.name}`);
let yourEnemy = prompt()
    
if (yourEnemy == '1'){
    yourEnemy = Grubfoot;
} else if (yourEnemy == '2'){
    yourEnemy = Mudknuckles;
} else if (yourEnemy == '3'){
    yourEnemy = WizardLucien;
} else if (yourEnemy == '4'){
    yourEnemy = ZombiePirate;
} else if (yourEnemy == '5'){
    yourEnemy = Shade;
}
    console.log(`You've chosen ${yourHero.name} as your Hero and ${yourEnemy.name} as your Enemy!`);
    console.log('-------------------------------------------');
    yourHero.attack(yourEnemy)
};    
characterChoices()

// HERO ATTACK OPTIONS (fight):

//? Hero attacks Goblin:
// Elohim.attack(Grubfoot)
// Elohim.attack(Mudknuckles)
// PrincessAddy.attack(Mudknuckles)
// PrincessAddy.attack(Grubfoot)
// WizardArianwyn.attack(Grubfoot)
// WizardArianwyn.attack(Mudknuckles)

//? Hero attacks Zombie:
// Elohim.attack(ZombiePirate)
// PrincessAddy.attack(ZombiePirate)
// WizardArianwyn.attack(ZombiePirate)

//? Hero attacks Wizard:
// Elohim.attack(WizardLucien)
// PrincessAddy.attack(WizardLucien)
// WizardArianwyn.attack(WizardLucien)

//? Hero attacks Shade
// Elohim.attack(Shade)
// PrincessAddy.attack(Shade)
// WizardArianwyn.attack(Shade)