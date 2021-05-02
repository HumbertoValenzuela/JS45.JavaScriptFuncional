// 11. Composition
// Alternativa a las clases



// Se utiliza cuando tienes funciones que se pueden compartir entre objetos
// Ver que Cliente y Empleado tiene como dif. empresa y puesto

// Se escribe una función que puedo utilizar en dif objetos.
// Y se lo asigno para que puedas utilizarlas.
// En vez de crear una clase y heredar. Composition va creando funciones
// que yo voy armando y defino; que funciones son necesarias para cada objeto

// Creando función que se utilizará en Cliente y Empleado
// Y que muestra un nombre
// Definiendo las funciones
const obtenerNombre = info => ({ //notar la sintaxis ({})
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})

const guardarEmail = info => ({ //notar la sintaxis ({})
    agregarEmail(email){ // Almacena en el objeto el valor
        console.log(`Guardando email: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = info => ({ //notar la sintaxis ({})
    mostrarEmail(){
        console.log(`Correo: ${info.email}`);
    }
})

const obtenerEmpresa = info => ({ //notar la sintaxis ({})
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
})

const obtenerPuesto = info => ({ //notar la sintaxis ({})
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
})

// Objeto Cliente
// Asignando las funciones
function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }
    // La forma de describir la función y agregarlas a mis objetos
    // Object.assign toma una función y la copia hacia dentro del objeto info
    return Object.assign(
        info,
        obtenerNombre(info),//info para tener la referencia de los datos de la memoria de ese objeto
        guardarEmail(info),// asignando la función con object.assign
        // pero no utilizaremos el valor guardarEmail sino que la función que esta dentro, es decir,  agregarEmail
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}

// Objeto Empleado
function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
        // Poder del Composition, porque algunas funciones las definimos
        // si comparten funciones. Pero algunas otras no son necesarias en este tipo de objeto
    )
}

// Supongamos crear una función para obtener un nombre


// Crear objeto
const cliente = Cliente('Hum', null, 'Empresa');

// Para obtener el nombre usando Object.assign
cliente.mostrarNombre();
cliente.agregarEmail('Cliente@cliente.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('-------------------------------');
const empleado = Empleado('Lambert', null, 'Programador');
// Al tener Composition listo podemos ocupar la función obtenerNombre para el objeto Empresa
empleado.mostrarNombre();
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();

// En vez de tener Clases y heredar.
// Se crea muchas funciones y se asignan según lo necesario