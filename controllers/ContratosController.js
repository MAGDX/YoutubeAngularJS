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
        console.debug('Contratos mapeados %o', $scope.vm.ejercicio1);
        this.$scope.vm.ejercicio2 = this.contratosJson.filter(function (elem) {
            return (elem.ACCIONES && elem.ACCIONES.length >= 1 && elem.ACCIONES.length <= 3);
        });
        console.debug('Contratos mapeados %o', $scope.vm.ejercicio2);
        this.$scope.vm.ejercicio3 = this.contratosJson.filter(function (elem) {
            return (elem.ACCIONES && elem.ACCIONES.length > 3);
        });
        console.debug('Contratos mapeados %o', $scope.vm.ejercicio3);
        this.$scope.vm.ejercicio4 = this.contratosJson.filter(function (elem) {
            return (elem.ACCIONES && elem.ACCIONES.clave == 'SITUACION');
        });
        console.debug('Contratos mapeados %o', $scope.vm.ejercicio4);
    }
    ContratosController.$inject = ["$scope", "contratosJson"];
    return ContratosController;
}());
//# sourceMappingURL=ContratosController.js.map