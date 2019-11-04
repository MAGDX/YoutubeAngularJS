var ContratosController = (function () {
    function ContratosController($scope, contratosJson) {
        this.$scope = $scope;
        this.contratosJson = contratosJson;
        console.log("Constructor ContratosController");
        this.$scope.vm = this;
        this.$scope.vm.titulo = "Programacion Funcional";
        this.$scope.vm.contratos = this.contratosJson;
    }
    ContratosController.$inject = ["$scope", "contratosJson"];
    return ContratosController;
}());
//# sourceMappingURL=ContratosController.js.map