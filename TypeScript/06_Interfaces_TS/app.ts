//
// function enviarMision(xmen:{nombre:any}){
//   console.log("Enviando a: " + xmen.nombre);
// }
//
// let wolverine ={
//   nombre: "Wolverine",
//   poder: "Regeneración"};
//
//   enviarMision(wolverine);

//Se capitaliza la primera palabra de toda la frase o var
interface Xmen {
      nombre:string,
      poder:string
}
// si quieres validaciones y restricciones básicas puedes usar las interfaces

function enviarMision(xmen:Xmen){
  console.log("Enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen:Xmen){
  console.log("Enviando al cuartel: " + xmen.nombre);
}

let wolverine = {
  nombre: "Wolverine",
  poder: "Regeneración"};

  enviarMision(wolverine);
  enviarCuartel(wolverine);
