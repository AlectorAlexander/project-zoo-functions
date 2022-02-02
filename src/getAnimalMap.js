const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options) {
  const search = (location) => species.filter((name) => name.location === location);
  const animalSpecies = (loc) => search(loc).map((animal) => animal.name);
  //  const animalName = (loc) => search(loc).map((animal) => animal.residents[0].name);
  return animalSpecies('NE');
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
