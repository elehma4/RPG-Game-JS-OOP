//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);
  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/


const main = () => {

  let heroHealth = 3
  let heroPower = 5
  let goblinHealth = 6
  let goblinPower = 2


  while (goblinHealth > 0 && heroHealth > 0) {
      console.log(`You have ${heroHealth} health and ${heroPower} power.`)
      console.log(`The goblin has ${goblinHealth} health and ${goblinPower} power.`)
      console.log()
      console.log("What do you want to do?")
      console.log("1. fight goblin")
      console.log("2. do nothing")
      console.log("3. flee")
      console.log("> ")

      let rawInput = prompt()

      if (rawInput == "1"){
          //Hero attacks goblin
          goblinHealth -= heroPower
          console.log(`You do ${heroPower} damage to the goblin.`)
          if (goblinHealth <= 0){
              console.log("The goblin is dead.")
          }

      }
      else if (rawInput == "2"){
          
      }
      else if (rawInput == "3"){
          console.log("Goodbye.")
          break;  //break out of loop
          
      }
      else{
          console.log(`Invalid input ${rawInput}`)
      }//end of if statement

      if (goblinHealth > 0){
          // Goblin attacks hero
          heroHealth -= goblinPower
          console.log(`The goblin does ${goblinPower} damage to you.`)
          if (heroHealth <= 0){
              console.log("You are dead.")
          }
      }// end of if statement

  }// end of while loop
  
} //end of main

main() // runs the game by calling the main driving function