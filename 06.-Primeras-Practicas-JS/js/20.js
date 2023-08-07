// Ejemplo 1

function sumar(n1 , n2) {
    return n1 + n2;
};

const resultado = sumar( 5, 8);

console.log(resultado);

// Ejemplo 2

let total = 0

function agregarCarrito(precio) {
    return total += precio;
};

function calcularImpuesto(total) {
    return 1.15 * total;
};

total = agregarCarrito(200);
total = agregarCarrito(600);
total = agregarCarrito(400);
total = agregarCarrito(800);

console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de : $${totalAPagar}`);