# JS45.JavaScriptFuncional
JS 45. Functional JavaScript - Qué es, Ventajas y Como Escribirlo
*// 45. Functional JavaScript - Qué es, Ventajas y Como Escribirlo
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
* 3. Funciones como Argumentos
* 4. Separar los Datos de las funciones
* 5. .map es muy utilizado en Functional JS
* 6. Menos cantidad de código en tus Funciones
*  7. Pure Functions. Funciones Puras

// Son funciones que retornan un dato, pero no modifican
// los valores de las variables, es decir, si hay un let
* 8. Funciones que Retornan funciones
* 9. Closures

// En JavaScript los Closures son creados cada vez que una función se crea.

// Pero un closure es una forma de acceder a una función o valor, desde el exterior...

// Los Closures van acompañados por el Scope
* 10. Partials y Currying
* Curring es dividir  una función que toma más de un parametro, en argumentos de forma parcial
11. Composition. Alternativa a las clases
*Se utiliza cuando tienes funciones que se pueden compartir entre objetos
// Ver que Cliente y Empleado tiene como dif. empresa y puesto

// Se escribe una función que puedo utilizar en dif objetos.
// Y se lo asigno para que puedas utilizarlas.
// En vez de crear una clase y heredar. Composition va creando funciones
// que yo voy armando y defino; que funciones son necesarias para cada objeto
