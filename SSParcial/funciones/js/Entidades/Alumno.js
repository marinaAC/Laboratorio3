"use strict";
var Parcial;
(function (Parcial) {
    var Alumno = /** @class */ (function () {
        function Alumno(nombre, apellido, nota, materia) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.nota = nota;
            this.materia = materia;
        }
        Alumno.prototype.getNombre = function () {
            return this.nombre;
        };
        Alumno.prototype.getAepllido = function () {
            return this.apellido;
        };
        Alumno.prototype.getNota = function () {
            return this.nota;
        };
        Alumno.prototype.getMateria = function () {
            return this.materia;
        };
        return Alumno;
    }());
    Parcial.Alumno = Alumno;
})(Parcial || (Parcial = {}));
//# sourceMappingURL=Alumno.js.map