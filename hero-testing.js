// testing probability of 20%
const randomNumber = Math.floor(Math.random() * 100); // generates a random number between 0 and 99

if(randomNumber < 20){ // returns true if randomNumber is less than 20
    console.log('this should happen 20% of the time');
}