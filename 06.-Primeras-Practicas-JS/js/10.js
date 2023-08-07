// OBJETOS

const producto1 = 'Monitor de 20"'; // Variables declaradas individualmente
const precio1 = 300;
const disponibile1 = true;

const producto = {
    nombreProducto :'Monitor de 20"', // Variables declaradas todas juntas como objeto
    precio : 300,
    disponible : true,
} ;

console.log(producto);  // Acceso al objeto entero

console.log(producto.precio); // Acceso a una propiedad dentro del objeto
console.log(producto['disponible']); // Otra manera de acceder a una propiedad