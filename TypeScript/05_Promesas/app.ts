//ejecuta pasos en secuencia, cambia si se responde con resolve o reject
let promesa = new Promise( function(resolve, reject){

setTimeout(() =>{
  console.log("Promesa Terminada");

  //resolve();
  reject();

}, 1500 )

})

console.log("Paso 1");

promesa.then( function(){
  console.log("Ejecutarme cuando se termine bien");
},
  function(){
    console.error("Ejecutar si todo sale mal");
  }
)


console.log("Paso 2");
