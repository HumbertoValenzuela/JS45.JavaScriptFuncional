// 45. Functional JavaScript - Qué es, Ventajas y Como Escribirlo
// 1. Qué es Functional JS. javascript funcional
// Crear tu código utilizando funciones
// Las funciones deben tener una entrada y una salida de datos
// No se permite la modificación de los datos

// Conceptos claves de la programación funcional
// Inmutabilidad - Los datos no deben modificarse (utilizar const casi siempre)
// let cliente='hvg'; cliente='hola'; no se debe reasigna variable

// Separar Funciones de datos. Los Array Method se utilizan 
// muchas funciones que retornan un nuevo dato o array 
// methods, de esa forma tendremos funciones que entregan un
//  resultado nuevo pero nunca modfican los datos.

// First-class functions
// Es poder crear funciones que parezcan cualquier variable como lo
// es  function expression.

// Cuando un lenguaje puede asignar una función como si fuera
// un string, numero, booleano, Array o Object.
// Quiere decir que soporta First class Function
const suma = function(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = suma;//función suma
console.log(resultado(10, 20));
