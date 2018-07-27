"use strict";
var Parcial;
(function (Parcial) {
    var Materia = /** @class */ (function () {
        function Materia(nombre, profesor, horario) {
            this.nombre = nombre;
            this.profesor = profesor;
            this.horario = horario;
        }
        Materia.prototype.getNombre = function () {
            return this.nombre;
        };
        Materia.prototype.getProfesor = function () {
            return this.profesor;
        };
        Materia.prototype.getHorario = function () {
            return this.horario;
        };
        Materia.prototype.setNombre = function (nombre) {
            this.nombre = nombre;
        };
        return Materia;
    }());
    Parcial.Materia = Materia;
})(Parcial || (Parcial = {}));
//# sourceMappingURL=Materia.js.map