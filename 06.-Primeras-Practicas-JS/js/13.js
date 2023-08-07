// UNIR OBJETOS

const producto = {
    nombreProducto : 'monitor de 20 pulgadas',
    precio : 300 ,
    disponibilidad : true
};

const medidas = {
    peso : '1 kg',
    medida : '1 m'
} ;


const nuevoProducto = { ...producto, ...medidas};



console.log(nuevoProducto);