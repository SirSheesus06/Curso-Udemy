// ARRAY METHODS

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio : 300},
    {nombre: 'Television de 50 pulgadas', precio : 500},
    {nombre: 'Tablet', precio : 200},
    {nombre: 'Audifonos', precio : 150},
    {nombre: 'Teclado', precio : 50},
    {nombre: 'Celular', precio : 500},
    {nombre: 'Parlantes', precio : 300},
    {nombre: 'Notebook', precio : 800},
];

// FOREACH

meses.forEach(function(mes) {                // Se ejecuta una vez por cada elemento del arreglo
    console.log(mes)

});  // EJEMPLO

meses.forEach(function(mes) {
    if (mes== 'Marzo') {
        console.log('Marzo está disponible!!!')
    }
});

// INCLUDES 

let resultado = meses.includes('Enero');   // Ideal para objetos unidimensionales

// SOME

resultado = carrito.some(function(producto) {  // Ideal para arreglos de objetos 
    return producto.nombre === 'Celular';
});

// REDUCE

resultado = carrito.reduce(function(total, producto){   // Suma todos los precios de los productos
    return total + producto.precio
}, 0);

// FILTER 

resultado = carrito.filter(function(producto) {  // Sirve para filtrar elementos de un array de objetos
    return producto.precio > 400
});

console.log(resultado);