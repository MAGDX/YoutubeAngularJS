var Libro = (function () {
    function Libro() {
        this._titulo = "";
        this._isbn = "";
        this._id = 0;
        this._nPaginas = 0;
        this._autor = "";
        this._digital = false;
        this._formatos = new Formatos();
    }
    Object.defineProperty(Libro.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (value) {
            this._titulo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "isbn", {
        get: function () {
            return this._isbn;
        },
        set: function (value) {
            this._isbn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "nPaginas", {
        get: function () {
            return this._nPaginas;
        },
        set: function (value) {
            this._nPaginas = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "autor", {
        get: function () {
            return this._autor;
        },
        set: function (value) {
            this._autor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "digital", {
        get: function () {
            return this._digital;
        },
        set: function (value) {
            this._digital = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "formatos", {
        get: function () {
            return this._formatos;
        },
        set: function (value) {
            this._formatos = value;
        },
        enumerable: true,
        configurable: true
    });
    return Libro;
}());
//# sourceMappingURL=Libro.js.map