const data = require('../data/zoo_data');
// Referência: Igor Leal - Turma 19 - Tribo A, me ajudou a fazer esse requisito através do Zoom;
function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return ids.map((element) => data.species.find((species) => species.id === element));
}

module.exports = getSpeciesByIds;
