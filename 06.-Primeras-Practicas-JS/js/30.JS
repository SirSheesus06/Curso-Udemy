// CLASES 

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    };
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`
    };
};

const producto = new Producto('Monitor de 20"', 120);
const producto2 = new Producto('Notebook Lenovo', 350);

console.log(producto.formatearProducto());
console.log(producto2.formatearProducto());
