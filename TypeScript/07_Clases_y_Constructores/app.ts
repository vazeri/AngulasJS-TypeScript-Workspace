//Clase, objeto con propiedades heredables
class Avenger {
  nombre:string = "Antman";
  equipo:string = undefined;
  nombreReal:string = undefined;

  puedePelear: false;
  peleasGanadas: 0;

  constructor( nombre:string, equipo:string, nombreReal:string ){
    console.log("Se ejecuto el constructor");
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
}
//Constructor: funcion que sea ejecuta al crear una nueva instancia
let antman:Avenger = new Avenger("Antman", "TeamCap", "Scott Perez");

console.log(antman);
