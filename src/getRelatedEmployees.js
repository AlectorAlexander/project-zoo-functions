const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };

const algo = data.employees;
// const filtro = (manager) => algo.filter([manager]);
algo.forEach((employers, current) => console.log(employers));
