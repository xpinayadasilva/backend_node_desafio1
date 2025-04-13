const { registrar, leer } = require("./operaciones");

const [operacion, nombre, edad, animal, color, enfermedad] =
  process.argv.slice(2);

if (operacion.toLowerCase() === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion.toLowerCase() === "leer") {
    leer();
} else {
    console.log(`No existe el tipo de operacion "${operacion}" solicitado.`
  );
}