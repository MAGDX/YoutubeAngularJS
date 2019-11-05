var LibrosService = (function () {
    function LibrosService($http) {
        console.log("LibrosService constructor");
        this.http = $http;
        this.ENDPOINT = "http://localhost:3000/libros";
    }
    LibrosService.prototype.getLibros = function () {
        var url = this.ENDPOINT;
        console.log('GET ' + url);
        return this.http.get(url).then(function (res) { return res.data; });
    };
    LibrosService.prototype.getLibroDetalle = function (id) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.crearLibro = function (libro) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.modificar = function (id, libro) {
        throw new Error("Method not implemented.");
    };
    return LibrosService;
}());
//# sourceMappingURL=librosService.js.map