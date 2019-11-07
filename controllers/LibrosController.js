var LibrosController = (function () {
    function LibrosController($scope, librosService) {
        var _this = this;
        this.$scope = $scope;
        this.librosService = librosService;
        console.log("Constructor LibrosController");
        this.$scope.vm = this;
        this.$scope.vm.libro = new Libro();
        this.$scope.vm.libros = [];
        this.listar = function () {
            _this.librosService.getLibros().then(function (libros) {
                _this.$scope.vm.libros = libros.map(function (e) {
                    var l = new Libro();
                    l.id = e.id;
                    l.titulo = e._titulo;
                    l.isbn = e._isbn;
                    l.nPaginas = e._nPaginas;
                    l.autor = e._autor;
                    l.digital = e._digital;
                    l.formatos.pdf = e._formatos._pdf;
                    l.formatos.epub = e._formatos._epub;
                    l.formatos.dbt = e._formatos._dbt;
                    l.formatos.tpz = e._formatos._tpz;
                    l.formatos.mobi = e._formatos._mobi;
                    return l;
                });
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
            if (lib.digital && lib.formatos && lib.formatos.length) {
                return false;
            }
            if (lib.id) {
                librosService.modificar(lib.id, lib).then(function (data) {
                    console.info("libro editado %o", data);
                    _this.$scope.vm.mensaje = "Libro Modificado";
                    _this.$scope.vm.listar();
                }, function (res) {
                    console.warn("No se puedo editar %o", res);
                    _this.$scope.vm.mensaje = "Error modificando";
                });
            }
            else {
                librosService.crear(lib).then(function (data) {
                    console.info("libro nuevo %o", data);
                    _this.$scope.vm.listar();
                    _this.$scope.vm.libro = undefined;
                    _this.$scope.vm.mensaje = "Libro Nuevo Creado";
                }, function (res) {
                    console.warn("No se puedo crear libro %o", res);
                    _this.$scope.vm.mensaje = "Error creando libro";
                });
            }
        };
        this.borrarLibro = function () {
            var _this = this;
            console.debug('click boton borrar %o', this.$scope.vm.libroEliminar.id);
            this.librosService.delete(this.$scope.vm.libroEliminar.id).then(function (res) {
                _this.$scope.vm.mensaje = "Libro eliminado";
                _this.$scope.vm.libros.splice(_this.$scope.vm.libros.indexOf(_this.$scope.vm.libroEliminar), 1);
            }, function (res) {
                _this.$scope.vm.mensaje = "Error eliminando libro";
            });
        };
        this.reset = function () {
            return this.$scope.vm.libro = new Libro();
        };
    }
    LibrosController.$inject = ["$scope", "librosService"];
    return LibrosController;
}());
//# sourceMappingURL=LibrosController.js.map