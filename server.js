let superheroes = require('superheroes');
superheroes.all;

//console.log(superheroes.all);

let randomHero = superheroes.random();
console.log(randomHero);

superheroes.all.forEach(hero =>{
    console.log(hero);
});