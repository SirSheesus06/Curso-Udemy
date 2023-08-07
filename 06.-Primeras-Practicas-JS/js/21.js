// METODOS DE PROPIEDAD

const reproductor = {
    reproducir : function(id) {                           // Crear objeto con funciones
        console.log(`Reproduciendo cancion ID : ${id}`)
    },

    pausar : function() {
        console.log(`Pausando reproductor...`)
    },

    crearPlaylist : function(nombre) {
        console.log(`Creando la playlist ${nombre}`)
    },

    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`)
    },    
};

reproductor.borrarCancion = function(id) {
    console.log(`Eliminiando cancion ID : ${id}`)        // Agregar una propiedad del objeto
};                                                       // por fuera de el

reproductor.reproducir(3875);                            // Llamando a la funcion y dandole parametros
reproductor.pausar();
reproductor.borrarCancion(22);
reproductor.crearPlaylist(`Punk Rock`);
reproductor.reproducirPlaylist(`Punk Rock`);
