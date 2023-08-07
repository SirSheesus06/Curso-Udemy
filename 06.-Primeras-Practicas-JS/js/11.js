// DESTRUCTURING DE OBJETOS

const producto = {
    nombreProducto : 'Monitor de 20"',
    precio : 300,
    disponible : true,
};

// Forma Anterior
const precioProducto = producto.precio;  // Se le asignara el valor de la propiedad "precio"
const nombreProducto = producto.nombreProducto; // se le asigna el valor de "nombreProducto"

// Destructuring

// const {precio} = producto;       // En esta forma, extrae la variable y la asigna a "precio" en una sola
// const {disponible} = producto;   // linea de codigo, por lo tanto es mas practica.

// se puede simplificar las 2 lineas de arriba en una sola, asi:

const {precio, disponible} = producto;

//console.log(precioProducto);
//console.log(nombreProducto);

console.log(precio);
console.log(disponible);