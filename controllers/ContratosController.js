var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var ContratosController = (function () {
    function ContratosController($scope, contratosJson) {
        this.$scope = $scope;
        this.contratosJson = contratosJson;
        console.log("Constructor ContratosController");
        this.$scope.vm = this;
        this.$scope.vm.titulo = "Programacion Funcional";
        this.$scope.vm.contratos = this.contratosJson;
        this.$scope.vm.contratosMapeados = this.contratosJson.map(function (elem) {
            return {
                "id": elem.idColumn,
                "nombre": (elem.nombre) ? elem.nombre : "Sin Nombre",
                "nAcciones": (elem.ACCIONES) ? elem.ACCIONES.length : 0
            };
        });
        console.debug('Contratos mapeados %o', $scope.vm.contratosMapeados);
        this.$scope.vm.ejercicio1 = this.contratosJson.filter(function (elem) {
            return (!elem.ACCIONES || elem.ACCIONES.length == 0);
        });
        console.debug('Ejercicio 1 %o', $scope.vm.ejercicio1);
        this.$scope.vm.ejercicio2 = this.contratosJson.filter(function (elem) {
            return (elem.ACCIONES && elem.ACCIONES.length >= 1 && elem.ACCIONES.length <= 3);
        });
        console.debug('Ejercicio 2 %o', $scope.vm.ejercicio2);
        this.$scope.vm.ejercicio3 = this.contratosJson.filter(function (elem) {
            return (elem.ACCIONES && elem.ACCIONES.length > 3);
        });
        console.debug('Ejercicio 3 %o', $scope.vm.ejercicio3);
        this.$scope.vm.ejercicio4 = this.contratosJson.filter(function (elem) {
            return elem.ACCIONES && elem.ACCIONES.length > 0;
        }).find(function (elem) {
            return elem.ACCIONES.find(function (elem) { return elem.clave === "SITUACION"; });
        });
        console.debug('Ejercicio 4 %o', $scope.vm.ejercicio4);
        this.$scope.vm.ejercicio5 = this.contratosJson.reverse()
            .filter(function (elem) { return elem.ACCIONES && elem.ACCIONES.length > 0; })
            .find(function (elem) { return elem.ACCIONES.find(function (elem) { return elem.clave === "SITUACION"; }); });
        console.debug('Ejercicio 5 %o', $scope.vm.ejercicio5);
        var accionesDuplicadas = $scope.vm.contratos
            .filter(function (c) { return c.ACCIONES && c.ACCIONES.length > 0; })
            .map(function (c) { return c.ACCIONES; })
            .reduce(function (a, b) {
            return a.concat(b);
        })
            .map(function (x) { return x.titulo; });
        this.$scope.vm.ejercicio6 = __spread(new Set(accionesDuplicadas)).sort();
        console.debug('Ejercicio 6 %o', $scope.vm.ejercicio6);
    }
    ContratosController.$inject = ["$scope", "contratosJson"];
    return ContratosController;
}());
//# sourceMappingURL=ContratosController.js.map