class Libro {

    // Atributos
    public id: number;
    private _titulo: string;
    private _isbn: string;
    private _nPaginas: number;
    private _autor: string;
    private _digital: boolean;
    private _formatos: Formatos;

    // Constructor
    constructor() {
        this._titulo = "";
        this._isbn = "";
        this._nPaginas = 0;
        this._autor = "";
        this._digital = false;
        this._formatos = new Formatos();
    }

    public rellenar(json: any): Libro {
        let l = new Libro();
        if(json.id){
            l.id = json.id;
        }

        l.titulo = json._titulo;
        l.isbn = json._isbn;
        l.nPaginas = json._nPaginas;
        l.autor = json._autor;
        l.digital = json._digital;
        l.formatos.pdf = json._formatos.pdf;
        l.formatos.epub = json._formatos.epub;
        l.formatos.dbt = json._formatos.dbt;
        l.formatos.tpz = json._formatos.tpz;
        l.formatos.mobi = json._formatos.mobi;
        
        return l;
    }

    /**
     * Getter titulo
     * @return {string}
     */
    public get titulo(): string {
        return this._titulo;
    }

    /**
     * Getter isbn
     * @return {string}
     */
    public get isbn(): string {
        return this._isbn;
    }

    /**
     * Getter nPaginas
     * @return {number}
     */
    public get nPaginas(): number {
        return this._nPaginas;
    }

    /**
     * Getter autor
     * @return {string}
     */
    public get autor(): string {
        return this._autor;
    }

    /**
     * Getter digital
     * @return {boolean}
     */
    public get digital(): boolean {
        return this._digital;
    }

    /**
     * Setter titulo
     * @param {string} value
     */
    public set titulo(value: string) {
        this._titulo = value;
    }

    /**
     * Setter isbn
     * @param {string} value
     */
    public set isbn(value: string) {
        this._isbn = value;
    }

    /**
     * Setter nPaginas
     * @param {number} value
     */
    public set nPaginas(value: number) {
        this._nPaginas = value;
    }

    /**
     * Setter autor
     * @param {string} value
     */
    public set autor(value: string) {
        this._autor = value;
    }

    /**
     * Setter digital
     * @param {boolean} value
     */
    public set digital(value: boolean) {
        this._digital = value;
    }

    /**
     * Getter formatos
     * @return {any}
     */
    public get formatos(): Formatos {
        return this._formatos;
    }

    /**
     * Setter formatos
     * @param {any} value
     */
    public set formatos(value: Formatos) {
        this._formatos = value;
    }
}