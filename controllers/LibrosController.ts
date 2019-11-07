interface ILibrosController extends ng.IScope {
    vm: LibrosController;
}

class LibrosController implements ng.IController {

    // Atributos
    public libros: Array < Libro > ;
    public libro: Libro;
    public libroEliminar: Libro;
    public mensaje: string;

    // Funciones
    public listar: any;
    public editarLibro: any;
    public guardarLibro: any;
    public borrarLibro: any;
    public reset: any;

    public static $inject = ["$scope", "librosService"];

    // Constructor
    constructor(private $scope: ILibrosController, private librosService: LibrosService) {
        console.log("Constructor LibrosController");
        this.$scope.vm = this;
        this.$scope.vm.libro = new Libro();
        this.$scope.vm.libros = [];

        this.listar = () =>{
            this.librosService.getLibros().then(libros => {
                this.$scope.vm.libros = libros.map(e =>{
                    let l = new Libro();
                    l.id = e.id;
                    l.titulo = e._titulo;
                    l.isbn = e._isbn;
                    l.nPaginas = e._nPaginas;
                    l.autor = e._autor;
                    l.digital = e._digital;
                    l.formatos.pdf = e._formatos._pdf;
                    l.formatos.epub = e._formatos._epub;
                    l.formatos.dbt = e._formatos._dbt;
                    l.formatos.tpz = e._formatos._tpz;
                    l.formatos.mobi = e._formatos._mobi;
                    return l;
                });
                console.debug($scope.vm.libros);
            }, errorResponse => {
                console.warn('respuesta servicio en controlador %o', errorResponse);
                this.$scope.vm.mensaje = `Servicio Rest parado o incorrecto ${errorResponse.status}`;
            })
        };

        this.listar();

        // Funciones
        this.editarLibro = (l: Libro) => {
            this.$scope.vm.libro = angular.copy(l);
        }

        this.guardarLibro = () => {
            const lib = this.$scope.vm.libro;
            console.debug('submitado formulario %o', lib);

            // TODO controlar que si Digital = true, se seleccione algun formato
            /*if( lib.digital && lib.formatos && lib.formatos.length){
                
                return false;
            }*/

            if (lib.id) { // modificar
                librosService.modificar(lib.id, lib).then(
                    data => {
                        console.info("libro editado %o", data);
                        //this.$scope.vm.libros.splice(this.$scope.vm.libros.indexOf(this.$scope.vm.libros.find(lib.id)),1,data);
                        this.$scope.vm.listar();
                        this.$scope.vm.mensaje = "Libro Modificado";
                    },
                    res => {
                        console.warn("No se puedo editar %o", res);
                        this.$scope.vm.mensaje = "Error modificando";
                    }
                );
            } else { // insertar nuevo
                librosService.crear(lib).then(
                    data => {
                        console.info("libro nuevo %o", data);
                        // let l = new Libro();
                        // l.rellenar(data);
                        // this.$scope.vm.libros.push(l);
                        this.$scope.vm.listar();
                        this.$scope.vm.libro = new Libro();
                        this.$scope.vm.mensaje = "Libro Nuevo Creado";
                    },
                    res => {
                        console.warn("No se puedo crear libro %o", res);
                        this.$scope.vm.mensaje = "Error creando libro";
                    }
                );
            }
        };

        this.borrarLibro = function () {
            console.debug('click boton borrar %o', this.$scope.vm.libroEliminar.id);
            this.librosService.delete(this.$scope.vm.libroEliminar.id).then(res => {
                this.$scope.vm.mensaje = "Libro eliminado";
                this.$scope.vm.libros.splice(this.$scope.vm.libros.indexOf(this.$scope.vm.libroEliminar),1);
                this.$scope.vm.libro = new Libro();
            }, res => {
                this.$scope.vm.mensaje = "Error eliminando libro";
            })
        }

        this.reset = function () {
            return this.$scope.vm.libro = new Libro();
        }
    }
}