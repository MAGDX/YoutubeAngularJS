var LibrosService = (function () {
    function LibrosService($http) {
        console.log("LibrosService constructor");
        this.http = $http;
        this.ENDPOINT = "http://localhost:3000/libros/";
    }
    LibrosService.prototype.getLibros = function () {
        var url = this.ENDPOINT;
        console.log('GET ' + url);
        return this.http.get(url).then(function (res) { return res.data; });
    };
    LibrosService.prototype.delete = function (id) {
        var url = this.ENDPOINT + id;
        console.log('DELETE ' + url);
        return this.http.delete(url).then(function (res) { return res.data; });
    };
    LibrosService.prototype.crear = function (libro) {
        var url = this.ENDPOINT;
        console.log('POST ' + url);
        return this.http.post(url, libro).then(function (res) { return res.data; });
    };
    LibrosService.prototype.modificar = function (id, libro) {
        var url = this.ENDPOINT + id;
        console.log('PUT ' + url);
        return this.http.put(url, libro).then(function (res) { return res.data; });
    };
    return LibrosService;
}());
//# sourceMappingURL=librosService.js.map