// 10. Partials y Currying


const multi = (a,b,c) => a * b * c;

// Curring es dividir  una función que toma más de un parametro, en argumentos de forma parcial...

// Podriamos agregar un Currying de la siguiente forma...
const parcial = (a) => (b,c) => multi(a,b,c);

// ¿Cómo utilizar parcial?
const primerNumero = parcial(5);//primer Argumento

const result = primerNumero(4,3); // segundo y tercer Argumento

console.log(result);
console.log(multi(5,4,3));

// Otro ejemplo de Currying y parcial
// Podriamos dividir más esta función... a que sea un argumento en cada ocasion...
const sum = (a,b,c) => a * b * c;

const Partials = a => b => c => sum(a,b,c);

// Notar que es mucho código pero ver más abajo
const primerA = Partials(5);//primer Argumento
const primerB = primerA(4);//segundo Argumento
const final =   primerB(3); // tercer Argumento

console.log(final);

// llamar aplicando Currying Partials diviendo la función
// en pequeñas partes
const resultadoParcial = Partials(5)(4)(3);