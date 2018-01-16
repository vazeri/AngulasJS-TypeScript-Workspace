"use strict";
exports.__esModule = true;
//Export permite el comportamiento de libreria externa
var Xmen = /** @class */ (function () {
    function Xmen(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    Xmen.prototype.imprimir = function () {
        console.log(this.nombre + " - " + this.clave);
    };
    ;
    return Xmen;
}());
exports.Xmen = Xmen;
//Esta clase no se exporta
var Hija = /** @class */ (function () {
    function Hija() {
    }
    return Hija;
}());
