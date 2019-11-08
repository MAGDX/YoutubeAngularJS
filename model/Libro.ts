class Libro {

    // Atributos
    private _id: number;
    private _titulo: string;
    private _isbn: string;
    private _nPaginas: number;
    private _autor: string;
    private _digital: boolean;
    private _formatos: Formatos;

    // Constructor
    constructor() {
        this._id = 0;
        this._titulo = "";
        this._isbn = "";
        this._nPaginas = 0;
        this._autor = "";
        this._digital = false;
        this._formatos = new Formatos();
    }

    public rellenar(json: any): Libro {
        let libro = new Libro();

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
    }

    public convertirJson(): any {
        let libroJson = {
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
        }

        return libroJson;
    }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
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