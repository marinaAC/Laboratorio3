"use strict";
var Parcial;
(function (Parcial) {
    var Datos = /** @class */ (function () {
        function Datos(obj) {
            this.objJson = obj;
        }
        Datos.prototype.getObjJson = function () {
            return this.objJson;
        };
        Datos.prototype.setObjJson = function (obj) {
            this.objJson = obj;
        };
        Datos.prototype.encodeJsonAlumno = function (alumno) {
            var aux = {
                nombre: alumno.getNombre(),
                apellido: alumno.getAepllido(),
                nota: alumno.getNota().toString(),
                nombreProf: alumno.getMateria().getNombre(),
                apellidoProf: alumno.getMateria().getProfesor(),
                horarioMateria: alumno.getMateria().getHorario()
            };
            return aux;
        };
        Datos.prototype.decodeJsonAlumno = function (json) {
            var aux = new Parcial.Alumno(json.nombre, json.apellido, Number(json.nota), new Parcial.Materia(json.nombreProf, json.apellidoProf, json.horarioMateria));
            return aux;
        };
        Datos.prototype.guardarLocalStorageOneElement = function (objJson, tipoDato) {
            var dataLocalStorage = this.getLocalStorage(tipoDato);
            var retorno = false;
            if (dataLocalStorage == null) {
                var listDato = [];
                listDato.push(objJson);
                localStorage.setItem(tipoDato, JSON.stringify(listDato));
                retorno = true;
            }
            else {
                dataLocalStorage.push(objJson);
                localStorage.setItem(tipoDato, JSON.stringify(dataLocalStorage));
                retorno = true;
            }
            return retorno;
        };
        Datos.prototype.getLocalStorage = function (name) {
            var itemsLocal = localStorage.getItem(name);
            if (itemsLocal != null) {
                this.objJson = JSON.parse(itemsLocal);
            }
            return this.objJson;
        };
        return Datos;
    }());
    Parcial.Datos = Datos;
})(Parcial || (Parcial = {}));
//# sourceMappingURL=Datos.js.map