var Libro = (function () {
    function Libro() {
        this._titulo = "";
        this._isbn = "";
        this._nPaginas = 0;
        this._autor = "";
        this._digital = false;
        this._formatos = new Formatos();
    }
    Libro.prototype.rellenar = function (json) {
        var libro = new Libro();
        if (json.id) {
            libro.id = json.id;
        }
        libro.titulo = json.titulo;
        libro.isbn = json.isbn;
        libro.nPaginas = json.nPaginas;
        libro.autor = json.autor;
        libro.digital = json.digital;
        libro.formatos.pdf = json.formatos.pdf;
        libro.formatos.epub = json.formatos.epub;
        libro.formatos.dbt = json.formatos.dbt;
        libro.formatos.tpz = json.formatos.tpz;
        libro.formatos.mobi = json.formatos.mobi;
        return libro;
    };
    Libro.prototype.convertirJson = function () {
        var libroJson = {
            "titulo": this.titulo,
            "isbn": this.isbn,
            "nPaginas": this.nPaginas,
            "autor": this.autor,
            "digital": this.digital,
            "formatos": {
                "pdf": this.formatos.pdf,
                "epub": this.formatos.epub,
                "dbt": this.formatos.dbt,
                "tpz": this.formatos.tpz,
                "mobi": this.formatos.mobi
            }
        };
        return libroJson;
    };
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