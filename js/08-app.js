// 9. Closures

// En JavaScript los Closures son creados cada vez que una función se crea.

// Pero un closure es una forma de acceder a una función o valor, desde el exterior...

// Los Closures van acompañados por el Scope
const cliente = 'Humbert';//Var que esta fuera de la funcion. La función mostrarCliente no sabe que existe

function mostrarCliente() {
    const cliente = 'Rodolfo';
    console.log(cliente);
}

mostrarCliente();// muestra Rodolfo debido a que la variable esta en el scope
console.log(cliente); //Humbert

// Closures es hacer que const cliente = 'Rodolfo'; se pueda
// acceder por fuera 

// Creando un Closures de Ejemplo
const obtenerAuto = () => {
    const marca = 'Nissan';
    // Los Closures son creados cada vez que se crea una función
    function muestraMarca() {
        console.log(marca);
    }
    return muestraMarca;
}

const automovil = obtenerAuto();

automovil();// Closures es una forma de acceder a una 
// función o valor desde el exterior

// Ejemplo de uso
// En algúnos casos se intentará evitar variables globales
