// 6. Menos cantidad de código en tus Funciones

// En la programación funcional también se busca tener código más corto que lo que sería una función más larga...

// La mayor parte de programación funcional son cosas que ya hemos visto, como Currying, Promises, Composition, entre otros, pero recuerda, en la programación funcional, las funciones son valores.
(function(){

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

const obtenerNombres = producto => producto.nombre;
const resultado = carrito.map(obtenerNombres);
console.log(resultado);

})();