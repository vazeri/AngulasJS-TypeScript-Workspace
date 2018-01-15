//Clase, objeto con propiedades heredables
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Antman";
        this.equipo = undefined;
        this.nombreReal = undefined;
        console.log("Se ejecuto el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
//Constructor: funcion que sea ejecuta al crear una nueva instancia
var antman = new Avenger("Antman", "TeamCap", "Scott Perez");
console.log(antman);
