"use strict";
exports.__esModule = true;
var Villanos = /** @class */ (function () {
    function Villanos(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    Villanos.prototype.imprimir = function () {
        console.log("El plan es: " + this.plan);
    };
    ;
    return Villanos;
}());
exports.Villanos = Villanos;
