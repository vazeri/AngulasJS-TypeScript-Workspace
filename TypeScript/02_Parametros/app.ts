//Parametros opcionales, obligatorios y por defecto
function activar(
//parametro obligatorio, necesario para trabajar
                 quien:string,
 //parametro obligatorio por fdefecto, necesario para trabajar
                 objeto:string = "batiseñal",
//parametro opcional (puede ser enviaodo o no)
                 momento?:string
               ){
let mensaje:string;

if(momento){
  //parametro obligatorio
mensaje = ` ${ quien } activo la ${ objeto } en la ${momento}` ;
}else{
mensaje = ` ${ quien } activo la ${ objeto } ` ;
}

console.log(mensaje);
}
//Borrar la cadena tarde cambia el resultado dodas las ccondiciones en L14
activar("Gordon", "batiseñal", "tarde");
