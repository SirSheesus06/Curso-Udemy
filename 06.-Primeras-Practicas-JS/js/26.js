// forEach

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

carrito.forEach(producto => console.log(producto));  // Imprime cada objeto del array
// Para mostrar cada elemento en consola es mejor este metodo

// Map

const arreglo1 = carrito.map(producto => producto.precio);

console.log(arreglo1)

// Este  metodo crea un nuevo arreglo, pero no modifica el original


const arr = [13, 24, 35, 46, 57];

const arr1 = arr.map(suma => suma + 10);

console.log(arr1);   // Prueba para resolver ejercicio de sololearn