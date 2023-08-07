// this

const reservacion = {
    nombre : 'Juan',
    apellido : 'Vivas',
    total: 3000,
    pagado: false,
    informacion : function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    } //   This hace referencia a los elementos del objeto en el que se encuentra
    // Si se intenta usar this con un arrow function, dara undefined ya que => hace referencia a la ventana 
    //global
}

reservacion.informacion();