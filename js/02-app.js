// 3. Funciones como Argumentos
const suma = (numero1, numero2) => numero1 + numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;

const sumarOMultiplicar = fn => fn(10, 20);

// Pasar Función como Argumento
console.log( sumarOMultiplicar(suma));
console.log( sumarOMultiplicar(multiplicar));