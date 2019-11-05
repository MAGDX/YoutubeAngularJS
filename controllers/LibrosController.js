var LibrosController = (function () {
    function LibrosController($scope, librosService) {
        var _this = this;
        this.$scope = $scope;
        this.librosService = librosService;
        this.libro = {};
        console.log("Constructor LibrosController");
        this.$scope.vm = this;
        this.$scope.vm.libros = [];
        this.librosService.getLibros().then(function (libros) { return _this.$scope.vm.libros = libros; });
    }
    LibrosController.prototype.editarLibro = function (l) {
    };
    LibrosController.$inject = ["$scope", "librosService"];
    return LibrosController;
}());
//# sourceMappingURL=LibrosController.js.map