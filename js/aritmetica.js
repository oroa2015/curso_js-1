
/* export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
} */

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

// En este objeto se pueden incluir ambas funciones
export const aritmetica = {
    sumar, restar
};
