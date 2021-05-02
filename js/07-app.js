// 8. Funciones que Retornan funciones

const obtenerCliente = () => () => console.log('humberto');

// 
const fn = obtenerCliente(); //asignar la función obtenerCliente

fn();// sería la otra parte de la función () => console.log('humberto');