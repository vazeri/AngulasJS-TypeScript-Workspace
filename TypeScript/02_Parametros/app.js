//Parametros opcionales, obligatorios y por defecto
function activar(
    //parametro obligatorio, necesario para trabajar
    quien, 
    //parametro obligatorio por fdefecto, necesario para trabajar
    objeto, 
    //parametro opcional (puede ser enviaodo o no)
    momento) {
    //parametro obligatorio por fdefecto, necesario para trabajar
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        //parametro obligatorio
        mensaje = " " + quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = " " + quien + " activo la " + objeto + " ";
    }
    console.log(mensaje);
}
//Borrar la cadena tarde cambia el resultado dodas las ccondiciones en L14
activar("Gordon", "batiseñal", "tarde");
