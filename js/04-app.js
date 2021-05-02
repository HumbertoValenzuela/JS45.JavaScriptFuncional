// 5. .map es muy utilizado en Functional JS
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

// .map crea un nuevo arreglo
const obtenerNombres = product => {
    return product.nombre;
}

const obtenResult = carrito.map(obtenerNombres);
console.log(obtenResult);
})();
