const data = require('../data/zoo_data');

const { employees } = data;
const array = [];
employees.forEach((element) => element.managers.map((gerente) => array.push(gerente)));

function isManager(id) {
  return array.some((managers) => (managers === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((element) => element.managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
    // const employs = employees.find((element) => element.id === managerId).responsibleFor;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
