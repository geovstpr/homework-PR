console.log('Hello word')
console.log('Bienbenidos al curso de Playwright con Youzu-Kun')
// los 2 slash son para hacer comentarios
// sriven para orientar o comunicar algo en el codigo

/**
 *   estos son para mutilineas 
 * 
 */

// Variables
const variableQueNoCambia = 'Valor de variable que no cambia'
console.log(variableQueNoCambia)
// nose puede reasignar un valor a una const o constante
// variableQueNoCambia = 'nuevo valor' ===> MAL!!!

let variableQueSePuedeReagsignar = 'valor de variable que se puede cambiar'
console.log('Primer valor=>', variableQueSePuedeReagsignar)
variableQueSePuedeReagsignar = 'he cambiado el valor tio!!!'
console.log('Segundo valor=>',variableQueSePuedeReagsignar)

// Las variables VAR se consideran una mala practica en Javascript
var variableVar = 'valor var'; // NO USAR!!!
console.log('variable VAR', variableVar)

// TIPOS NATIVOS DE VARIABLES
// undefined
const newVariableUndefined = undefined
console.log('Variable indefinida=>',newVariableUndefined)
// number
const num = 45
console.log('num=>',num)
console.log('num typeof=>', typeof num)
console.log(45 + ' test')
// string
const chainOfCharacters = 'Porshe'
console.log('chainOfCharacters=>', chainOfCharacters)
console.log('chainOfCharacters typeof=>', typeof chainOfCharacters)
//booleam
const bool = true
console.log('bool=>', bool)
console.log('bool type=>', typeof bool)
// object
const obj = {}
console.log('obj=>', obj)
console.log('obj type=>', typeof obj)

const cars = {
    porshe: 'Safari',
    nissan: 'Silvia',
    lambo: 'Countach',
    total: 90,
    present: true,
}

console.log('Cars=>', cars)
console.log('Cars total=>', cars.total)

// Arrays
const arrayOfName = ['Porshe', 'Nissan', 'Holden']
const arrayOfName2 = [9, 'Nissan', true]
const arrayOfName3 = [
    1,
    cars,
]
console.log('arrayOfName3=>', arrayOfName3)

// condicionales
console.log('*************')
// Conditional if
if(2+2 === 4) {
    console.log('Resultado Correcto')
} else {
    console.log('Resultado Incorrecto')
}
// Conditional Switch
const fruta = 'Banano'
switch(fruta) {
    case 'Banano':
    console.log('Banano')
    break;
    case 'Sandia':
    console.log('Sandia')
    break;
    default:
    console.log('Valor invalido de fruta')
}

// functions
// permitir encapsular la logica
function printHello() {
    console.log('Print Hello')
}
printHello();