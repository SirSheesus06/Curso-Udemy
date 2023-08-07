// Async / Await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes...');
    

    setTimeout( ()=> {
        resolve('Los clientes han sido descargados satisfactoriamente');
    }, 5000);
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos...');
    

    setTimeout( ()=> {
        resolve('Los pedidos han sido descargados satisfactoriamente');
    }, 3000);
    });
}

// Lo que hace async/await es ejecutar codigo mientras otro esta haciendo algo mas

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch(error) {
        console.log(error);
    }
};

app();
