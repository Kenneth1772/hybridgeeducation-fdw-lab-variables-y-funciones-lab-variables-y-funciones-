let x,y;
x = 5;
y = 4;// Ejercicio 3: Suma de Dos Números
// Declara una función llamada "sumar" que acepte dos parámetros (a y b) y retorne su suma

//Escribe tu función aquí
function sumar(x, y) {
    return x + y;
}
console.log(sumar(x,y));
// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    sumar
};
