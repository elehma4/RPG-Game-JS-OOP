// testing probability of 20%
const randomNumber20 = Math.floor(Math.random() * 100); // generates a random number between 0 and 99
//* for atk damage and medic
if(randomNumber20 < 20){ // returns true if randomNumber is less than 20
    // console.log('this should happen 20% of the time');
}

const randomNumber10 = Math.floor(Math.random() * 100); // for the shade character

if(randomNumber10 < 10){
    // console.log('this should happen 10% of the time');
}

const randomNumber50 = Math.floor(Math.random() * 100)
if(randomNumber50 < 50){
    console.log('this should happen 50% of the time');
}


//? ITEMS FOR GAME:
//*            +7hp            -10% accuracy (enemy)
let items = ['Cooked Trout \uD83D\uDC1F', 'Confuse Spell \u2697\uFE0F ']
//*               50% protection  |   30% protection
let armor = ['Rune Full Body Armor \uD83D\uDEE1\uFE0F', 'Graceful Cloak\uD83E\uDDB8', 'Agility Boots\uD83E\uDD7E']
//*              ATKPower +2 | -1 hp every other turn to enemy |  speed to flee
let weapons = ['Dragon Scimitar \uD83D\uDDE1\uFE0F \uD83D\uDD25', 'Poisin Dagger \uD83D\uDDE1\uFE0F \uD83E\uDE78', 'Mortality Elixir \uD83E\uDDEA']
//*           eat = +7 hp   |   decreases enemy accuracy by 10%

console.log(items);
console.log(armor);
console.log(weapons);
console.log(`Princess Addy\uD83D\uDC51`);
console.log("Elf Wizard Arianwyn\uD83E\uDDDD\u200D");
console.log('Shade\uD83C\uDF0C');
console.log("Wizard Lucien\uD83E\uDDD9\u200D");
console.log("uses Water Wave\uD83C\uDF0A");
console.log(`uses Soul Split\u27B0`);
console.log('Dragon Claws\uD83D\uDC09\uD83D\uDD25');
console.log(`You collect 700 Coins\uD83D\uDCB0`);
console.log('Hero Elohim\uD83D\uDC32');