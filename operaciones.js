const fs = require('fs');

const citasJson = () => JSON.parse(fs.readFileSync('citas.json', 'utf8'));

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const citas = citasJson();
  citas.push({ nombre, edad, animal, color, enfermedad });
  fs.writeFileSync('citas.json', JSON.stringify(citas));
  console.log(`La cita de ${nombre} ha sido registrada`);
};

const leer = () => {
  const citas = citasJson();
  if (citas.length === 0) {
    console.log('No hay citas registradas.');
  } else {
    citas.forEach(({ nombre, edad, animal, color, enfermedad }, index) => {
      console.log(`\n ${index + 1}. Cita Registrada
    ------------------------------
    Nombre del animal: ${nombre}
    Edad: ${edad}
    Tipo de animal: ${animal}
    Color del animal: ${color}
    Enfermedad: ${enfermedad}`);
    });
  }
};

module.exports = { registrar, leer };