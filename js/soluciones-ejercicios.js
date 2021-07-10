
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

// Solucion de ejercicio 5
let btn5 = () => {
    let textoOriginal = prompt("Ingrese texto:");
    if(textoOriginal === '') {
        console.warn('No ingreso ningun texto..');
    } else if(!textoOriginal) {
        console.warn('Opcion invalida: Cancelar');
    } else if(!isNaN(textoOriginal)) {
        console.warn('Ingreso un valor numerico. Debe ingresar texto alfabetico..');
    } else {
        let arregloTexto = [...textoOriginal];
        let textoFinal = '';
        arregloTexto.reverse();
        for (let i = 0; i < arregloTexto.length; i++) {
            textoFinal += arregloTexto[i];
        }
        console.log(textoFinal);
    }
}

// Solucion de ejercicio 6
let btn6 = () => {
    let txtInicial = prompt('Ingrese el texto:');
    let palabraConteo = prompt('Ingrese la palabra a contar:');
    
    if(txtInicial === null && palabraConteo === null) {
        console.warn('No ingreso ningun texto..');
    } else if(!isNaN(txtInicial) && !isNaN(palabraConteo)) {
        console.warn('El texto ingresado es un numero');
    } else if(!txtInicial) {
        console.warn('Falta el primer texto texto..');
    } else if(!palabraConteo) {
        console.warn('Falta el segundo texto..');
    } else if(!isNaN(txtInicial)) {
        console.warn('El primer texto no debe ser numero..');
    } else if(!isNaN(palabraConteo)) {
        console.warn('El segundo texto no debe ser numero..');
    } else {
        let txtSeparador = ' ';
        let arrayPalabras = txtInicial.split(txtSeparador);
        // console.log(arrayPalabras);
        let contador = 0;
    
        for (let i = 0; i < arrayPalabras.length; i++) {
            if(arrayPalabras[i] === palabraConteo) { contador += 1; }
        }
        console.log(`La palabra '${palabraConteo}' aparece ${contador} veces.`);
    }
}

// Solucion de ejercicio 7
let btn7 = () => {
    function invierteTexto(texto) {
        const arregloTextual = [...texto];
        const textoVolteado = arregloTextual.reverse();
        let textoReunido = '';
        for (let i = 0; i < textoVolteado.length; i++) {
            textoReunido += textoVolteado[i];
        }
        return textoReunido;
    }

    let originalText = prompt('Ingrese el texto:');

    if(originalText === '') {
        console.warn('No ingreso ningun texto..');
    } else if(!originalText) {
        console.warn('Opcion invalida: Cancelar');
    } else if(!isNaN(originalText)) {
        console.warn('Ingreso un valor numerico. Debe ingresar texto alfabetico..');
    } else {
        let textoFinal = invierteTexto(originalText);
        if(originalText !== textoFinal) {
            console.log('La palabra no es palindrome..');
        } else {
            console.log('La palabra si es palindrome..');
        }
    }
}

// Solucion de ejercicio 8
let btn8 = () => {
    let texto1 = prompt("Ingrese el texto: ");
    let patron = prompt("Indique el patron a eliminar: ");
    let textoEnArreglo = '';

    (!texto1) ? console.warn("No ingreso el texto principal..")
    : (!patron) ? console.warn('No ingreso el patron de busqueda')
    : textoEnArreglo = texto1.split(patron).join("");
    
    console.log(textoEnArreglo);
    
}

// Solucion de ejercicio 9
let btn9 = () => {
    // console.log((Math.random(501, 600) * 1000).toFixed(0));
    // console.log(((Math.random() * (601 - 501)) * 10).toFixed(0));
    console.log(Math.floor(Math.random() * (600 - 501)) + 501);
}

// Solucion de ejercicio 10
let btn10 = () => {
    let numOriginal = prompt("Ingrese un numero:");
    let numCapicua = numOriginal.split("").reverse().join("");
    if(parseInt(numOriginal) !== parseInt(numCapicua)) { 
        console.log(`El numero ${numOriginal} no es capicua..`);
    } else {
        console.log(`El numero ${numOriginal} si es capicua..`);
    }
}

// Solucion de ejercicio 11
let btn11 = () => {
    let numeroInicial = parseInt(prompt("Calcular numero Factorial de:"));
    let numeroFactorial = 1;
    
    if(numeroInicial === 0) {
        console.log("El factorial de 0 es 1..");
    } else if(!numeroInicial) {
        console.warn("Debe ingresar un valor numerico..");
    } else if(numeroInicial < 0) {
        console.error("Debe ingresar un numero entero positivo..");
    } else {
        for (let i = 0; i <= (numeroInicial - 1); i++) {
            numeroFactorial *= (i + 1);
            console.log(numeroFactorial);
        }
    }
}

// Solucion de ejercicio 12
let btn12 = () => {}

// Solucion de ejercicio 13
let btn13 = () => {}

// Solucion de ejercicio 14
let btn14 = () => {}
