// ESTRUCTURAS DE CONTROL

const puntaje = 190;
    if(puntaje === 100) {             // El comparador "===" es mas estricto compara si es el mismo tipo de dato
        console.log('El puntaje es 100');
    } else {
        console.log('No es igual');     
    }; 

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log('El Usuario puede pagar');
} else {
    console.log('Saldo insuficiente');
};

const rol = 'EDITOR';

if (rol === 'ADMINISTRADOR') {
    console.log('Tienes acceso a todo el sistema');
} else if (rol === 'EDITOR') {
    console.log('Tienes acceso limitado');
} else {
    console.log('No tienes acceso');
};

