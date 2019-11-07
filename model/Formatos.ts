class Formatos {

    // Atributos
    private _pdf: boolean;
    private _epub: boolean;
    private _dbt: boolean;
    private _tpz: boolean;
    private _mobi: boolean;

    // Constructor
    constructor() {
        this._pdf = false;
        this._epub = false;
        this._dbt = false;
        this._tpz = false;
        this._mobi = false;
    }

    /**
     * Getter pdf
     * @return {boolean}
     */
	public get pdf(): boolean {
		return this._pdf;
	}

    /**
     * Getter epub
     * @return {boolean}
     */
	public get epub(): boolean {
		return this._epub;
	}

    /**
     * Getter dbt
     * @return {boolean}
     */
	public get dbt(): boolean {
		return this._dbt;
	}

    /**
     * Getter tpz
     * @return {boolean}
     */
	public get tpz(): boolean {
		return this._tpz;
	}

    /**
     * Getter mobi
     * @return {boolean}
     */
	public get mobi(): boolean {
		return this._mobi;
	}

    /**
     * Setter pdf
     * @param {boolean} value
     */
	public set pdf(value: boolean) {
		this._pdf = value;
	}

    /**
     * Setter epub
     * @param {boolean} value
     */
	public set epub(value: boolean) {
		this._epub = value;
	}

    /**
     * Setter dbt
     * @param {boolean} value
     */
	public set dbt(value: boolean) {
		this._dbt = value;
	}

    /**
     * Setter tpz
     * @param {boolean} value
     */
	public set tpz(value: boolean) {
		this._tpz = value;
	}

    /**
     * Setter mobi
     * @param {boolean} value
     */
	public set mobi(value: boolean) {
		this._mobi = value;
	}
}
