// PROTOTYPE 
function Producto(nombre, precio, dispon) {
    this.nombre = nombre;
    this.precio = precio;
    this.dispon = dispon;
};

// Prototype nos permite crear funciones que se utilizan en objetos especificos

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`
};

function Cliente(nombre, apellido, nacion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacion = nacion;
};

Cliente.prototype.formatearCliente = function() {
    return `El señor/a ${this.nombre} de apellido ${this.apellido} es ${this.nacion}`
};



const cliente = new Cliente('Juan', 'Vivas','Argentino');
const producto2 = new Producto('Monitor de 24"', 500, false);
const producto3 = new Producto('Notebook', 1000, false); 
const producto4 = new Producto('Iphone', 1200, true); 
const producto5 = new Producto('Airpods', 200, true); 


console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(cliente.formatearCliente());


// TODA ESTA FORMA DE CREAR FUNCIONES ESPECIFICAS PARA OBJETOS ES LA MANERA ANTERIOR QUE SE CREEN LAS CLASES
