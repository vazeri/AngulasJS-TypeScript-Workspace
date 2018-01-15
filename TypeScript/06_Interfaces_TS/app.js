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
// si quieres validaciones y restricciones básicas puedes usar las interfaces
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
