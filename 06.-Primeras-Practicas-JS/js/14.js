// OBJETOS O ARRAYS

const numeros = [10, 20, 30, 40, 50];

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');  // Antigua forma de declarar Arrays

const arreglo = [ 'Enero' , 10 , true , null , { nombre : 'Juan' , ocupación : 'Tecnico'} , [ 1, 2, 3, 4, 5]];


console.log(numeros);  //Forma normal de ver los arreglos.

console.table(meses);  //Forma mas practica de verlo en la consola.

console.log(arreglo);


// ACCEDER A LOS VALORES DE UN ARREGLO

console.log(numeros[4]); // Imprime en consola el numero "50"

// PARA CONOCER LA LONGITUD DE UN ARRAY

console.log(meses.length); // Nos arrojara la cantidad de elementos que componen el array