// const { animal } = require('faker/lib/locales/en');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, Fage) {
  const { species } = data;
  const animais = species.find(({ name }) => name === animal);
  return animais.residents.every(({ age }) => age >= Fage);
}
const actual = getAnimalsOlderThan('otters', 7);
console.log(actual);
module.exports = getAnimalsOlderThan;
