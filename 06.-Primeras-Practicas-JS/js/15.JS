// METODOS PARA ARRAYS

const numeros = [10, 20, 30, 40, 50];

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];  // Antigua forma de declarar Arrays


// numeros[5] = 60;   Forma no tan usual de agregar, se puede modificar un elemento ya existente
numeros.push(60);  // Agrega elementos al final del arreglo
numeros.unshift(45, 35); // Agrega elementos al inicio de un arreglo

meses.pop();  // Elimina el ultimo elemento de un array
meses.shift(); // Elimina el primer elemento de un array

meses.splice(2, 1); // Elimina el elemento que le indicamos. El primer valor (2) es el lugar del indez, y el segundo valor (1) la cantidad de elementos a borrar a partir de ahi


const nuevoMeses = [...meses, 'Junio']; // Crea nuevo Array sin modificar el viejo, y agrega en este caso 'Junio'

console.table(numeros);

console.table(meses);

console.table(nuevoMeses);