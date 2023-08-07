// "use strict";  // Sirve para usar el modo estricto de JavaScript

// OBJETOS

const producto = {
    nombreProducto : 'monitor de 20"',
    precio : 300,
    disponible : true
};

Object.freeze(producto);  // .freeze para bloquear totalmente el objeto

// Object.seal(producto)     .seal para bloquearlo pero poder modificar las propiedades

// producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));  // Sirve para saber si un objeto esta freezado

console.log(producto);