"use strict";
var Parcial;
(function (Parcial) {
    var Tabla = /** @class */ (function () {
        function Tabla(lista) {
            this.listaADesplegar = lista;
        }
        //Pensar en como resolverlo dinamicco para aplicarle los filtros
        Tabla.prototype.cargarTabla = function () {
            //recibo la lista, logica y muestro las columnas segun la logca
            for (var _i = 0, _a = this.listaADesplegar; _i < _a.length; _i++) {
                var item = _a[_i];
            }
        };
        Tabla.prototype.cargarColumna = function (idElement, element) {
            var columna = "<td id= " + idElement + ">" + element + "</td>";
            return columna;
        };
        return Tabla;
    }());
    Parcial.Tabla = Tabla;
})(Parcial || (Parcial = {}));
//# sourceMappingURL=tabla.js.map