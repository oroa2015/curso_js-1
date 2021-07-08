
// Solucion de ejercicio 1
let btn1 = () => {
    try {
        let cadenaCarac = prompt("Ingrese texto:");
        let arregloTexto = [...cadenaCarac];
        console.log(cadenaCarac);
        console.log(arregloTexto.length);
    } catch (error) {
        console.log('Ocurrio este error -> ' + error);
    }
}

// Solucion de ejercicio 2
let btn2 = () => {
    try {
        let texto = prompt("Ingrese el texto: ");
        let arreglo = Array(texto.split(" ", 1));
        texto = arreglo[0];
        console.log(texto.toString());
    } catch (error) {
        console.log('Ocurrio este error -> ' + error);
    }
}

// Solucion de ejercicio 3
let btn3 = () => {
    try {
        let texto1 = prompt("Ingrese el texto a dividir: ");
        let separador = prompt("Escriba el parametro separador: ");
        let texto2 = Array(texto1.split(separador));
        console.log(texto2);
    } catch (error) {
        console.log('Ocurrio este error -> ' + error);
    }
}

// Solucion de ejercicio 4
let btn4 = () => {
    try {
        let textoPpal = prompt("Ingrese el texto: ");
        let repeticiones = prompt("Cantidad de repeticiones: ");
        let textoFinal = '';
        for (let i = 0; i <= parseInt(repeticiones)-1; i++) {
            textoFinal += textoPpal + ' ';
        }
        console.log(textoFinal);
    } catch (error) {
        console.log('Ocurrio este error -> ' + error);
    }
}