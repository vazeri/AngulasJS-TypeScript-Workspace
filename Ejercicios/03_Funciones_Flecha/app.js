//Estas 2 funciones son identicas
var miFuncion = function (a) {
    return a;
};
//Recibe el parametro y retorna a
var miFuncionF = function (a) { return a; };
console.log(miFuncion("Función Normal"));
console.log(miFuncionF("Función Flecha"));
//---
//Ejemplos enviando más de un argumento
//Funcion normal
var miFuncion2 = function (a, b) {
    return a + b;
};
//Funcion Flecha
var miFuncion2F = function (a, b) { return a + b; };
//---
//Funcion normal
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//Funcion Flecha
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//---
//Funcion normal
var hulk = {
    nombre: "Hulk",
    smash: function () {
        console.log(this.nombre + " smash!!!");
    }
};
hulk.smash();
