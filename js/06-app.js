// 7. Pure Functions. Funciones Puras

// Son funciones que retornan un dato, pero no modifican
// los valores de las variables, es decir, si hay un let
// global o función global no va a modificar ese valor
// sino que retorna un dato nuevo

// Con una entrada de dato (Parametro) deben retornar la 
// misma cantidad de datos que recibe la entrada


// Usualmente el resultado deberá ser una nueva variable, 
// ya con el nuevo valor.


const numero1 = 20;// no modifica un valor original
// cantidad de parametros es lo que debe de retornar
const duplicar = numeroq => numeroq * 2; 

const resultado = duplicar(numero1);

console.log(resultado);
console.log(numero1);
// ---------------------------------------------
const nombre = 'Juan';
const trabajo = 'Web Developer';

const formatearNombre = (arg1, arg2) => `${arg1} - ${arg2}`;

const mostrarNombre = formatearNombre;

console.log(mostrarNombre(nombre, trabajo));