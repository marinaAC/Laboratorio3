"use strict";
var Parcial;
(function (Parcial) {
    var Filtrado = /** @class */ (function () {
        function Filtrado() {
            this.listFilter = [];
        }
        Filtrado.prototype.filterElementJson = function (original, key) {
            var auxArray = original.filter(function (element) { return key; });
            return auxArray;
        };
        return Filtrado;
    }());
    Parcial.Filtrado = Filtrado;
})(Parcial || (Parcial = {}));
//# sourceMappingURL=Filtrado.js.map