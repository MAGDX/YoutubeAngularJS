var Formatos = (function () {
    function Formatos() {
        this._pdf = false;
        this._epub = false;
        this._dbt = false;
        this._tpz = false;
        this._mobi = false;
    }
    Object.defineProperty(Formatos.prototype, "pdf", {
        get: function () {
            return this._pdf;
        },
        set: function (value) {
            this._pdf = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Formatos.prototype, "epub", {
        get: function () {
            return this._epub;
        },
        set: function (value) {
            this._epub = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Formatos.prototype, "dbt", {
        get: function () {
            return this._dbt;
        },
        set: function (value) {
            this._dbt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Formatos.prototype, "tpz", {
        get: function () {
            return this._tpz;
        },
        set: function (value) {
            this._tpz = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Formatos.prototype, "mobi", {
        get: function () {
            return this._mobi;
        },
        set: function (value) {
            this._mobi = value;
        },
        enumerable: true,
        configurable: true
    });
    return Formatos;
}());
//# sourceMappingURL=Formatos.js.map