const data = require('../data/zoo_data');
// Referência: Queite  Castiglioni / Turmar 19 - Tribo A me ajudou no Zoom;

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (employeeName === undefined) {
    return {};
  }
  const verifyName = employees.find(({ firstName }) => firstName === employeeName);
  const verifyLastName = employees.find(({ lastName }) => lastName === employeeName);

  if (verifyName === undefined) {
    return verifyLastName;
  }
  return verifyName;
}
module.exports = getEmployeeByName;
