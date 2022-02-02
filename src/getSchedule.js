const data = require('../data/zoo_data');

const { species, hours } = data;
const days = Object.keys(hours);
const closedDay = {
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
};
// Procurar os animais:
  // Criar uma arrow function que cria um array que filtra o Objeto species que vai achar os animais disponíveis em um determinado dia da semana
const arrayAnimals = (scheduleTarget) => {
  const animals = species.filter((day) => day.availability
    .includes(scheduleTarget)).map((animal) => animal.name);
  return animals;
};
// .
const Days = (dia) => {
  const diaEscolhido = {};
  const { open, close } = hours[dia]; // Puxa as chaves "open" e "close" de um dia da semana passado por parâmetro
  if (dia === 'Monday') {
    return {
      Monday: closedDay,
    };
  }
  diaEscolhido[dia] = { // Cria um objeto de objetos, cujo nome da chave principal é o parâmetro dado na função;
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: arrayAnimals(dia),
  };

  return diaEscolhido;
};
const allDays = () => {
  const week = {};
  days.forEach((day) => {
    const { open, close } = data.hours[day];

    if (day === 'Monday') {
      week[day] = closedDay;
    } else {
      const animalsAvaliable = species.filter((animal) => animal.availability.includes(day))
        .map((animal) => animal.name);
      week[day] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: animalsAvaliable,
      };
    }
  });
  return week;
};

function getSchedule(scheduleTarget) {
  const specie = species.find((animal) => animal.name === scheduleTarget);
  if (days.includes(scheduleTarget) === true) return Days(scheduleTarget);
  if (!scheduleTarget || !specie) return allDays();
  return specie.availability;
}

module.exports = getSchedule;
