// DECLARACION DE UNA FUNCION

function sumar() {
    console.log(10 + 10);    // Se crea la funcion
};

sumar();   // Se llama a ejecutar a la funcion


// EXPRESION DE LA FUNCION

const sumar2 = function() {
    console.log(3 +3);
}

sumar2();


// IIFE

(function() {
    console.log('Esto es una función');
})();  // Esto hace la funcion se llame asi misma y sea ejecutada