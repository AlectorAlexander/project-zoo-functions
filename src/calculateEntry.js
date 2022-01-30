const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const verify = (minAge, maxAge) => entrants.map((person) => person.age >= minAge
  && person.age <= maxAge);
  const Fchild = verify(0, 17).filter((conf) => conf === true).length;
  const Fadult = verify(18, 49).filter((conf) => conf === true).length;
  const Fsenior = verify(50, 200).filter((conf) => conf === true).length;

  const result = ((adult, child, senior) => ({
    adult,
    child,
    senior,
  }));
  return result(Fadult, Fchild, Fsenior);
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) {
    return 0;
  }
  const people = countEntrants(entrants);
  const { adult } = people;
  const { child } = people;
  const { senior } = people;
  const result = (adult * 49.99) + (senior * 24.99) + (child * 20.99);
  return result;
}

module.exports = { calculateEntry, countEntrants };
