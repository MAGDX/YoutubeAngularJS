class Libro {

    // Atributos
    private _titulo: string;
    private _isbn: string;
    private _id: number;
    private _nPaginas: number;
    private _autor: string;
    private _digital: boolean;
    private _formatos: Formatos;

    // Constructor
    constructor() {
        this._titulo = "";
        this._isbn = "";
        this._id = 0;
        this._nPaginas = 0;
        this._autor = "";
        this._digital = false;
        this._formatos = new Formatos();
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
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
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
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
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
	public get formatos(): any {
		return this._formatos;
	}

    /**
     * Setter formatos
     * @param {any} value
     */
	public set formatos(value: any) {
		this._formatos = value;
	}
}