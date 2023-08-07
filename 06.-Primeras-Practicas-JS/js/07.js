// ORDEN DE LAS OPERACIONES

let resultado;

resultado = 20 + 30 *2; // Primero multiplica. Resultado 80
resultado = (20 + 30) *2; // Prioridad el parentesis. Resultado 100
resultado = (100 + 200 + 300) * 1.25; // Ejemplo para agregarle un 25%

// Incremento +1

let puntaje = 10;
puntaje++; // Devuelve 11

// Decremento 

puntaje = 15;
puntaje--; // Devuelve 14

// Incremento o Decremento por mas de 1

puntaje = 25;
puntaje +=10 // Devuelve 35

puntaje = 25;
puntaje-= 12; // Devuelve 13

console.log(puntaje);