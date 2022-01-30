const data = require('../data/zoo_data');

const { species } = data;

// const animals = (specie, popularity, sex) => {
//   const speci = {
//     specie,
//     popularity,
//     sex,
//   };
//   return speci;
// };
// const animals2 = (specie, popularity, sex) => {
//   const speci = {
//     specie,
//   };
//   return speci;
// };
// const objetoCompleto = [];
// const objetoSpecie = [];
// species.forEach((nulo, anl) => {
//   const { name } = species[anl];
//   const { popularity } = species[anl];
//   const { sex } = species[anl].residents[0];
//   objetoCompleto.push(animals(name, popularity, sex));
//   objetoSpecie.push(animals2(name));
// });

function countAnimals(animal) {
  const value = Object.values(animal)[0];
  const recebe = [];
  species.find((Element) => recebe.push(Element.name === value));
  return recebe;
}
// Object.values(Element.name) === value
console.log(countAnimals({ specie: 'giraffes' }));
module.exports = countAnimals;
