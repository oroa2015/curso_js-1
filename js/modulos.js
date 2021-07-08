// Corresponde al archivo samplepage27.html

import saludar, {Saludar, PI, usuario, password} from "./constantes.js";
import {aritmetica} from "./aritmetica.js";

// Tambien se pueden importar los modulos asignandole alias
// import {aritmetica as calcs} from "./aritmetica.js";

console.log('Archivo modulos.js');

console.log(`Valor de PI: ${PI.toFixed(4)}`);

console.log(usuario, password);

console.log(aritmetica.sumar(3, 4));
// console.log(calcs.sumar(3, 4));

saludar();

let nuevoSaludo = new Saludar();
nuevoSaludo;