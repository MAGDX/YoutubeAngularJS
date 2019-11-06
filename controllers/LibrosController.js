var LibrosController = (function () {
    function LibrosController($scope, librosService) {
        var _this = this;
        this.$scope = $scope;
        this.librosService = librosService;
        console.log("Constructor LibrosController");
        this.$scope.vm = this;
        this.$scope.vm.libros = [];
        this.listar = function () {
            _this.librosService.getLibros().then(function (libros) {
                _this.$scope.vm.libros = libros;
                console.debug($scope.vm.libros);
            }, function (errorResponse) {
                console.warn('respuesta servicio en controlador %o', errorResponse);
                _this.$scope.vm.mensaje = "Servicio Rest parado o incorrecto " + errorResponse.status;
            });
        };
        this.listar();
        this.editarLibro = function (l) {
            _this.$scope.vm.libro = angular.copy(l);
        };
        this.guardarLibro = function () {
            var lib = _this.$scope.vm.libro;
            console.debug('submitado formulario %o', lib);
            if (lib.id) {
                librosService.modificar(lib.id, lib).then(function (data) {
                    console.info("libro editado %o", data);
                    _this.$scope.vm.mensaje = "Libro Modificado";
                    _this.$scope.vm.listar();
                }, function (res) {
                    console.warn("No se puedo editar %o", res);
                    _this.$scope.vm.mensaje = "ERROR modificando";
                });
            }
            else {
                librosService.crear(lib).then(function (data) {
                    console.info("libro nuevo %o", data);
                    _this.$scope.vm.libros.push(data);
                    _this.$scope.vm.libro = undefined;
                    _this.$scope.vm.mensaje = "Libro Nuevo Creado";
                }, function (res) {
                    console.warn("No se puedo crear libro %o", res);
                    _this.$scope.vm.mensaje = "ERROR creando Libro";
                });
            }
        };
        this.borrarLibro = function (idLibro) {
            console.debug('click boton borrar %o', idLibro);
            this.librosService.borrarLibro(idLibro).then(function (res) {
                return true;
            }, function (res) {
                return false;
            });
        };
        this.reset = function () {
            return this.$scope.vm.libro = {
                "digital": false
            };
        };
        this.reset();
    }
    LibrosController.$inject = ["$scope", "librosService"];
    return LibrosController;
}());
//# sourceMappingURL=LibrosController.js.map