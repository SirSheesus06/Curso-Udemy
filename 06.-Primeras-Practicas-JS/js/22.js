// ARROW FUNCTIONS

const sumar2 = (n1, n2) => {
    console.log(n1 + n2);
}

sumar2(5, 10);


const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);  // Sintaxis simplificada.

aprendiendo(`JavaScript`);


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

meses.forEach(mes => console.log(mes));

meses.forEach( mes => {
    if (mes== 'Marzo') {
        console.log('Marzo está disponible!!!')
    }
});

// SOME

resultado = carrito.some( producto => producto.nombre === 'Celular');



// REDUCE

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


// FILTER 

resultado = carrito.filter( producto => producto.precio > 400);

console.log(resultado);

