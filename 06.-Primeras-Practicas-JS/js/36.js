// FETCH API

async function obtenerEmpleados() {

    const archivo = 'js/empleados.json';
    // fetch(archivo)
    //     .then(resultado => resultado.json())
    //     .then( datos => {
    //         const {empleados} = datos; 

    //         console.log(empleados);

            // empleados.forEach( empleado => {
            //     console.log(empleado.id);
            //     console.log(empleado.nombre);
            //     console.log(empleado.puesto);

            //     document.querySelector('.prueba').textContent = empleado.nombre; // Lo imprime en HTML
            // })
        // })

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();