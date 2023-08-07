// HERENCIA

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    };
    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`
    };
};

class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    };
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    };
}

const libro = new Libro('JavaScript, La Revolucion', 120, '654684968465496874');
const producto = new Producto('Monitor de 20"', 120);
const producto2 = new Producto('Notebook Lenovo', 350);

console.log(libro.formatearProducto());
console.log(producto.formatearProducto());