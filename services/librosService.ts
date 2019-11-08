interface ILibrosService{

    /**
     * Peticion GET para obtener todos los libros
     * @return angular.IPromise<Array<ILibro>>
     */
    getLibros(): angular.IPromise<Array<Libro>>;

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
    crear(libro: Libro): angular.IPromise<boolean>;

    /**
     * Modifica un libro existente
     * @param id identificador del libro a modificar
     * @param libro nuevos datos a modificar
     * @return Devuelve true o false
     */
    modificar(id: number, libro : Libro): angular.IPromise<boolean>;
}

class LibrosService implements ILibrosService{

    private http: ng.IHttpService;
    public ENDPOINT: string;

    constructor($http){
        console.log("LibrosService constructor");
        this.http = $http;
        this.ENDPOINT = "http://localhost:3000/libros/";
    }

    public getLibros(): angular.IPromise<any> {
        let url = this.ENDPOINT;
        console.log('GET ' + url);
        return this.http.get(url).then( res => res.data);
    }

    public delete(id: number): angular.IPromise<any> {
        let url = this.ENDPOINT + id;
        console.log('DELETE ' + url);
        return this.http.delete(url).then( res => res.data);
    }

    public crear(libro: Libro): angular.IPromise<any> {
        let url = this.ENDPOINT;
        let l = libro.convertirJson();
        console.log('POST ' + url);

        return this.http.post(url, l).then( res => res.data);
    }

    public modificar(id: number, libro: Libro): angular.IPromise<any> {
        let url = this.ENDPOINT + id;
        let l = libro.convertirJson();
        console.log('PUT ' + url);

        return this.http.put(url, l).then( res => res.data);
    }
}