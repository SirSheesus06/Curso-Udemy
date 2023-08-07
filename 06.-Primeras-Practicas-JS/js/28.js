// POO

// Object Literal

const producto = {
    nombre : 'Tablet',          // Nosotros le pasamos los valores a los elementos del objeto
    precio : 500
};

// Object Constructor

function Producto(nombre, precio, dispon) {
    this.nombre = nombre;
    this.precio = precio;
    this.dispon = dispon;
};

const producto2 = new Producto('Monitor de 24"', 500, false);
const producto3 = new Producto('Notebook', 1000, false); 
const producto4 = new Producto('Iphone', 1200, true); 
const producto5 = new Producto('Airpods', 200, true); 

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);