//Export permite el comportamiento de libreria externa
export class Xmen{
  nombre:string;
  clave:string;

  constructor(nombre:string, clave:string){
    this.nombre = nombre;
    this.clave = clave;
  }

    imprimir(){
      console.log(`${this.nombre} - ${this.clave}`);
    };
}
//Esta clase no se exporta
class Hija {}
