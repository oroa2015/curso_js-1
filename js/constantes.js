
export const PI = Math.PI;
export let usuario = 'Steve';
export let password = 'qwerty';

// OJO!: Solo se puede crear una sola exportacion por defecto
export default function saludar() {
    console.log('Hola modulos ES6+');
}

// Asi se puede exportar por defecto una constante o variable
// let mensaje = "Estamos en 2021";
// export default mensaje;

// Las clases tambien se pueden exportar por defecto
export class Saludar {
    constructor() {
        console.log('Mensaje de saludo con clase...');
    }
}