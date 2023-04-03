# RPG Game Part 2

Hero RPG Game: Part 2
You will base your game on version 1 of the game and make mods to the game.

## Characters
1. Make the hero generate double damage points during an attack with a probability of 20%
2. Make a new character called `Medic` that can sometimes recuperate 2 health points after being attacked with a probability of 20%
3. Make a character called `Shadow` who has only 1 starting health but will only take damage about once out of every ten times he is attacked.
4. Make a `Zombie` character that doesn't die even if his health is below zero
5. Come up with at least two other characters with their individual characteristics, and implement them.
6. Give each enemy a bounty. For example, the prize for defeating the `Goblin` is 5 coins, for the Wizard it is 6 coins.

## Items
1. Make a `SuperTonic` item to the store, it will restore the hero back to 10 health points.
2. Add an `Armor` item to the store. Buying an armor will add 2 armor points to the hero - you will add "armor" as a new attribute to hero. Every time the hero is attacked, the amount of hit points dealt to him will be reduced by the value of the armor attribute.
3. Add an `Evade` item to the store. Buying an "evade" will add 2 evade points to the hero - another new attribute on the Hero object. The more evade he has, the more probable that he will evade an enemy attack unscathed. For example: 2 evade points: 10% probably of avoiding attack, 4 evade points: 15% probability of avoiding attack. It should never be possible to reach 100% evasion though.
4. Come up with at least two other items with their unique characteristics and implement them. You can add more attributes to the hero or the characters.

## Bonus
1. Allow items to be used on the battle field. The hero can carry the items with him, and you have the option of choosing to use a tonic at any turn in a battle.
2. Make a `Swap` item, which when used on a battle field, will swap the power values of the two characters for one turn.
3. There is a bug in the store that allows the hero to buy items even if he has no coins. Fix this bug.