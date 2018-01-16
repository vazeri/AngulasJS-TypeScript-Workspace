//Decorador, una simple funcion cualquiera

function consola( constructor:Function ){
  console.log(constructor);
}

@consola //Al estar adjunto, envia como parametro el constructor a fuerza
class Villano{

constructor(public nombre:string ){

}
}
//ok
