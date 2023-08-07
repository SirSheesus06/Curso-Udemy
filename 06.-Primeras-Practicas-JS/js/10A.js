// MODIFICACION DE OBJETOS

const producto = {
    nombreProducto : 'Monitor de 20"',
    precio : 300,
    disponible : true,
};

// Agregar una nueva propiedad

producto.imagen = 'imagen.jpg'; // Se agrega como propiedad

// Elimina una propiedad de un producto

delete producto.precio;

console.log(producto);