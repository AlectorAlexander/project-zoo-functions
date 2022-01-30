const data = require('../data/zoo_data');

const { species } = data;

// Referência: A pergunta do Daniel Daher - Tumar 11, no Slack, me ajudou a completar esse requisito.
function countAnimals(animal) {
  if (animal) {
    const noSex = species.find((element) => element.name === animal.specie).residents;
    if (!animal.sex) {
      return noSex.length;
    } return noSex.filter((sex) => sex.sex === animal.sex).length;
  }
  const result = {};
  species.forEach((beast) => {
    result[beast.name] = beast.residents.length;
  });
  return result;
}
module.exports = countAnimals;
