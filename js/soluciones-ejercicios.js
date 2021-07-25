
/* Seccion 1 */
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

/* Seccion 2 */
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

let btn8 = () => {
    let texto1 = prompt("Ingrese el texto: ");
    let patron = prompt("Indique el patron a eliminar: ");
    let textoEnArreglo = '';

    (!texto1) ? console.warn("No ingreso el texto principal..")
    : (!patron) ? console.warn('No ingreso el patron de busqueda')
    : textoEnArreglo = texto1.split(patron).join("");
    
    console.log(textoEnArreglo);
    
}

/* Seccion 3 */
let btn9 = () => {
    // console.log((Math.random(501, 600) * 1000).toFixed(0));
    // console.log(((Math.random() * (601 - 501)) * 10).toFixed(0));
    console.log(Math.floor(Math.random() * (600 - 501)) + 501);
}

let btn10 = () => {
    let numOriginal = prompt("Ingrese un numero:");
    let numCapicua = numOriginal.split("").reverse().join("");
    if(parseInt(numOriginal) !== parseInt(numCapicua)) { 
        console.log(`El numero ${numOriginal} no es capicua..`);
    } else {
        console.log(`El numero ${numOriginal} si es capicua..`);
    }
}

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

/* Seccion 4 */
let btn12 = () => {
    let numeroUsuario = parseInt(prompt("Ingrese un numero:"));
    let divisor = 2;

    if(!numeroUsuario) {
        console.warn('Opcion invalida..');
    } else if(isNaN(numeroUsuario)) {
        console.warn('Debe ingresar un numero..');
    } else {
        while (numeroUsuario !== divisor) {
            if(numeroUsuario % divisor === 0) {
                console.log(`El numero ${numeroUsuario} no es primo`);
                break;
            } else {
                divisor++;
                if(divisor === numeroUsuario) {
                    console.log(`El numero ${numeroUsuario} si es primo`);
                    break;
                }
            }
        }
    }
}

let btn13 = () => {
    let numeroEvaluado = parseInt(prompt("Ingrese un numero:"));
    (numeroEvaluado % 2 === 0) ? console.log(`El numero ${numeroEvaluado} es par..`) : console.log(`El numero ${numeroEvaluado} es impar..`)
}

let btn14 = () => {
    let gradosCelsius, gradosFahrenheit = 0;
    let temperatura = confirm("Convertir Celsius a Fahrenheit?");
    if(temperatura) {
        gradosCelsius = parseFloat(prompt("Ingrese un valor Celsius:"));
        gradosFahrenheit = (gradosCelsius * 1.8) + 32;
        console.log(`${gradosCelsius}°C son ${gradosFahrenheit.toFixed(1)}°F`)
    } else {
        gradosFahrenheit = parseFloat(prompt("Ingrese un valor Fahrenheit:"));
        gradosCelsius = (gradosFahrenheit - 32) / 1.8;
        console.log(`${gradosFahrenheit}°F son ${gradosCelsius.toFixed(1)}°C`);
    }
}

/* Seccion 5 */
let btn15 = () => {
    const binarioDecimal = (numero) => {
        let numeroEnArrayBinario = numero.split(''), acumuladorDecimal = 0;

        for (let i = 0; i < numeroEnArrayBinario.length; i++) numeroEnArrayBinario[i] = +numeroEnArrayBinario[i];

        numeroEnArrayBinario.reverse();

        for (let i = 0; i < numeroEnArrayBinario.length; i++) acumuladorDecimal += numeroEnArrayBinario[i] * (2 ** i);

        console.log(`Resultado: ${numero}(2) = ${acumuladorDecimal}(10)`);
    }
    
    const decimalBinario = (numero) => {
        let divisionEntera = parseInt(numero);
        let acumuladorDivision = 0, condicion = true, arrayResiduo = [];

        do {
            if(Math.round((divisionEntera / 2)) === 0) {
                condicion = false;
                break;
            } else {
                arrayResiduo.push(divisionEntera.toFixed(0) % 2);
                divisionEntera = Math.floor(divisionEntera / 2);
            }
        } while (condicion);

        acumuladorDivision = parseInt(arrayResiduo.reverse().join(''));
        console.log(`Resultado: ${numero}(10) = ${acumuladorDivision}(2)`);
    }

    let opcionUsuario = confirm("¿Desea convertir numero entero a binario?");
    if(opcionUsuario === true) {
        let numeroOrigen = prompt("Ingrese un numero entero:");
        (!numeroOrigen) ? console.warn('Opcion incorrecta..') : (isNaN(numeroOrigen)) ? console.warn('Debe ingresar valores numericos..') : decimalBinario(numeroOrigen);
        /*
            Tambien se puede hacer ejecutando:
            return console.info(`${numeroOrigen}(10) = ${numeroOrigen.toString(2)}(2)`);
        */
    } else {
        let numeroOrigen = prompt("Ingrese un numero binario:");
        (!numeroOrigen) ? console.warn('Opcion incorrecta..') : binarioDecimal(numeroOrigen);
        /*
            Tambien se puede hacer ejecutando:
            return console.info(`${numeroOrigen}(2) = ${parseInt(numeroOrigen, 2)}(10)`);
        */
    }
}

let btn16 = () => {
    let montoInicial = parseFloat(prompt('Ingrese el monto:')).toFixed(2);
    let descuento = parseInt(prompt('Ingrese el descuento:'));
    let montoDescuento, montoFinal = 0;
    descuento /= 100;

    if(isNaN(montoInicial) || isNaN(descuento) || !montoInicial || !descuento ) {
        console.warn('Ingrese valores numericos para realizar el calculo.');
    } else if(montoInicial < 0 || descuento < 0) {
        console.warn('Ingrese numeros mayores a cero para realizar el calculo.');
    } else {
        montoFinal = montoInicial - (montoInicial * descuento);
        console.log(`Monto inicial: $${montoInicial}, descuento: ${descuento * 100}%, Monto final: $${montoFinal.toFixed(2)}`);
    }
}

let btn17 = () => {
    let fechaInicial = prompt('Ingrese fecha (aaaa/mm/dd):');

    if(fechaInicial === undefined) {
        console.warn('No ingreso una fecha.');
    } else if(!fechaInicial instanceof Date) {
        console.warn('No es una fecha valida.');
    } else if(!fechaInicial) {
        console.warn('No ingreso una fecha valida..');
    } else {
        let anioUsuario = fechaInicial.split(',');

        let fechaConsulta = new Date(fechaInicial);
        
        let aniosEnMS = 1000 * 3600 * 24 * 365;
        
        let diferenciaFechas = new Date().getTime() - fechaConsulta.getTime();
        
        let calculoFecha = Math.floor(diferenciaFechas / aniosEnMS);

        return (Math.sign(calculoFecha) === -1)
        ? console.info(`Faltan ${Math.abs(calculoFecha)} años para el ${anioUsuario[0]}`)
        : (Math.sign(calculoFecha) === 1)
        ? console.info(`Han pasado ${Math.abs(calculoFecha)} años, desde el ${anioUsuario[0]}`)
        : console.info(`Estamos en el año actual: ${anioUsuario[0]}`);
        
    }
}

/* Seccion 6 */
let btn18 = () => {
    let textoUsuario = prompt('Ingrese texto:');
    if(textoUsuario !== null) {
        let arrayDeTexto = textoUsuario.split('');
        const regExpVoca = /[aeiouáéíóú]/ig;
        const regExpCons = /[bcdfghjklmnñpqrstvwxyz]/ig;
        let arrayMatchVoca = textoUsuario.match(regExpVoca);
        let arrayMatchCons = textoUsuario.match(regExpCons);
    
        if(!textoUsuario || textoUsuario === undefined) {
            console.warn('Texto invalido.');
        } else if(!isNaN(textoUsuario)) {
            console.warn('Debe ingresar solo texto.');
        } else {
    
            arrayMatchVoca = arrayMatchVoca.join();
            arrayMatchVoca = arrayMatchVoca.replace(/,/g, "");

            arrayMatchCons = arrayMatchCons.join();
            arrayMatchCons = arrayMatchCons.replace(/,/g, "");

            console.log(`Texto: ${textoUsuario}`);
            console.log(`Vocales: ${arrayMatchVoca.length}, Consonantes: ${arrayMatchCons.length}.`);
        }
    }
}

let btn19 = () => {
    let nombreUsuario = prompt('Ingrese un nombre:');
    if(nombreUsuario !== null) {
        let regExpNombre = /^[a-zA-Záéíóúñ\s]+$/ig;
        
        (nombreUsuario === ' ' || nombreUsuario === undefined || regExpNombre.test(nombreUsuario))
        ? console.info('Nombre valido! 👍') :  console.warn('Nombre invalido 👎');
    }
}

let btn20 = () => {
    let emailUsuario = prompt('Ingrese email:');
    let regExpEmail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
    if(!emailUsuario || emailUsuario === undefined) {
        console.warn('Email invalido.');
    } else if(!isNaN(emailUsuario)) {
        console.warn('Debe ingresar solo texto para el email.');
    } else {
        (regExpEmail.test(emailUsuario))
        ? console.info(`${emailUsuario} -> Email valido 📨`)
        : console.warn(`${emailUsuario} -> Email invalido..`);
    }
}

/* Seccion 7 */
let btn21 = () => {}

let btn22 = () => {}

let btn23 = () => {}

/* Seccion 8 */
let btn24 = () => {}

let btn25 = () => {}

let btn26 = () => {}

/* Seccion 9 */
let btn27 = () => {}

let btn28 = () => {}

let btn29 = () => {}

/* Seccion 10 */
let btn30 = () => {}

let btn31 = () => {}

let btn32 = () => {}
