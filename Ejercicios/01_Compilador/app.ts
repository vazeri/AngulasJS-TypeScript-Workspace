//Nombre debe ser una variable tipo string (texto)
function saludar( nombre:string ){
  console.log( "Hola" + nombre.toUpperCase() );
}

//Objeto con propiedades de la variable
var erick = {
  nombre: "Goat"
};

saludar(erick.nombre);
