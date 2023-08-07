// PROMISE

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado');    // El promise se cumple
    } else {
        reject('Usuario Denegado');     // El promise no se cumple
    };
});

usuarioAutenticado
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error))

// Existen 3 valores posibles para un promise.
// Fulfilled: Que ya se cumplio el promise
// Pending: No se cumplio ni se rechazo, esta pendiente
// Rejected: No se cumplio el promise.