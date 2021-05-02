// 4. Separar los Datos de las funciones
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
// Si quisieramos obtener todos los productos que tienen un precio mayor a 400 tendriamos que hacer lo siguiente..

const resultado = carrito.filter( producto => {
    return producto.precio > 400;
});
console.log(resultado);

// Higher Order functions es un termino muy común con la programación funcional.

// Un Higher order function es una función que toma o retorna una función como argumento. y basicamente la mayoria de Array Methods son HOF

const mayor400 = producto => {// esto es una función
    return producto.precio > 400;
}

//.filter es una función que toma una función o retorna
// una función como argumento 
const mostrarDato = carrito.filter(mayor400);
console.log(mostrarDato);
})();