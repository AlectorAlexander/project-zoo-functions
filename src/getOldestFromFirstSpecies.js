/* eslint-disable array-callback-return */
const data = require('../data/zoo_data');

const { employees } = data;
const getSpeciesByIds = (...ids) => ids.map((element) => data.species
  .find((species) => species.id === element));
// console.log(employees);
function getOldestFromFirstSpecies(id) {
  const ID = employees.find((element) => element.id === id).responsibleFor;
  const animal = getSpeciesByIds(...ID)[0].residents;
  const godBless = (acc, sorte) => {
    if (acc.age > sorte.age) return acc;
    return sorte;
  };
  const resultado = animal.reduce(godBless);
  return Object.values(resultado);
}

module.exports = getOldestFromFirstSpecies;
