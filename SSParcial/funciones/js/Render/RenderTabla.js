"use strict";
var Parcial;
(function (Parcial) {
    var RenderTabla = /** @class */ (function () {
        function RenderTabla(lista) {
            this.listaADesplegar = lista;
        }
        //Pensar en como resolverlo dinamicco para aplicarle los filtros
        RenderTabla.prototype.cargarTabla = function () {
            //recibo la lista, logica y muestro las columnas segun la logca
            for (var _i = 0, _a = this.listaADesplegar; _i < _a.length; _i++) {
                var item = _a[_i];
            }
        };
        RenderTabla.prototype.cargarColumna = function (idElement, element) {
            var columna = "<td id= " + idElement + ">" + element + "</td>";
            return columna;
        };
        return RenderTabla;
    }());
    Parcial.RenderTabla = RenderTabla;
})(Parcial || (Parcial = {}));
//# sourceMappingURL=RenderTabla.js.map