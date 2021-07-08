
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