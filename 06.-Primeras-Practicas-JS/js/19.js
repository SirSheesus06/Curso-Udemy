
function sumar(numero1, numero2) { // al iniciar la funcion son parametros
    console.log(numero1 + numero2);
};
sumar(10, 10); // al estar en la llamada son agumentos o valores reales
sumar(17, 5);
sumar(10, 56);
sumar(12, 3);
sumar(15, 3);


function sumar2(n1 = 0, n2 = 0) { // Al pasar el valor por default, si falta alguno de los valores le asigna 0
    console.log(n1 + n2);
};
sumar2(10,4);