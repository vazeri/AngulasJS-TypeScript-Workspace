//Estas 2 funciones son identicas
let miFuncion = function( a ){
  return a;
}
//Recibe el parametro y retorna a
let miFuncionF = (a) => a;
console.log(miFuncion("Función Normal"));
console.log(miFuncionF("Función Flecha"));
//---
//Ejemplos enviando más de un argumento
//Funcion normal
let miFuncion2 = function( a:number, b:number ){
  return a + b;
}
//Funcion Flecha
let miFuncion2F = (a:number, b:number) => a + b;
//---
//Funcion normal
let miFuncion3 = function (nombre:string){
nombre = nombre.toUpperCase();
return nombre;
}
//Funcion Flecha
let miFuncion3F = (nombre:string ) => {
  nombre = nombre.toUpperCase();
  return nombre;
}
//---
//Funcion normal
let hulk = {
  nombre: "Hulk",
  smash(){
  console.log(this.nombre + " smash!!!");
  }
}
hulk.smash();
