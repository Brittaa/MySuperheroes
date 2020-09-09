let superheroes = require('superheroes');
superheroes.all;

//console.log(superheroes.all);

let randomHero = superheroes.random();
console.log(randomHero);

/*superheroes.all.forEach(hero =>{
    console.log(hero);
});/*
/*
TASK 1
1. get the names of all supervillains
2. get a random supervillains name
3.* make a random superhero flight a random supervillain
in the console.log()
*/

let supervillains = require('supervillains');
supervillains.all;

let randomVillain = supervillains.random();
console.log(randomVillain);

/*supervillains.all.forEach(villain =>{
    console.log(villain);
});*/

console.log(`Superhero ${randomHero} is fighting with supervillain ${randomVillain}.`);