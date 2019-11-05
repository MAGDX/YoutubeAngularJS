interface ILibrosService{

    /**
     * Peticion GET para obtener todos los libros
     * @return angular.IPromise<Array<ILibro>>
     */
    getLibros(): angular.IPromise<Array<ILibro>>;

    /**
     * Obtiene los datos de un libro
     * @param id identificador del libro cuyos datos deseamos obtener
     * @return Devuelve el libro deseado
     */
    getLibroDetalle(id: number): angular.IPromise<ILibro>;

    /**
     * Borra un libro
     * @param id identificador del libro a borrar
     * @return Devuelve true o false
     */
    delete(id: number): angular.IPromise<boolean>;

    /**
     * Crea un libro
     * @param libro Datos del libro a crear
     * @return Devuelve true o false
     */
    crearLibro(libro: ILibro): angular.IPromise<boolean>;

    /**
     * Modifica un libro existente
     * @param id identificador del libro a modificar
     * @param libro nuevos datos a modificar
     * @return Devuelve true o false
     */
    modificar(id: number, libro : ILibro): angular.IPromise<boolean>;
}

class LibrosService implements ILibrosService{

    private http: ng.IHttpService;
    public ENDPOINT: string;

    constructor($http){
        console.log("LibrosService constructor");
        this.http = $http;
        this.ENDPOINT = "http://localhost:3000/libros";
    }

    public getLibros(): any {
        let url = this.ENDPOINT;
        console.log('GET ' + url);
        return this.http.get(url).then( res => res.data);
    }

    public getLibroDetalle(id: number): angular.IPromise<ILibro> {
        throw new Error("Method not implemented.");
    }

    public delete(id: number): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }

    public crearLibro(libro: ILibro): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }

    public modificar(id: number, libro: ILibro): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }
}