interface ILibrosController extends ng.IScope {
    vm: LibrosController;
}

class LibrosController implements ng.IController {

    // Atributos
    public libros: Array < ILibro > ;
    public libro: any;
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
        this.$scope.vm.libros = [];

        this.listar = () =>{
            this.librosService.getLibros().then(libros => {
                this.$scope.vm.libros = libros;
                console.debug($scope.vm.libros);
            }, errorResponse => {
                console.warn('respuesta servicio en controlador %o', errorResponse);
                this.$scope.vm.mensaje = `Servicio Rest parado o incorrecto ${errorResponse.status}`;
            })
        };

        this.listar();

        // Funciones
        this.editarLibro = (l: ILibro) => {
            this.$scope.vm.libro = angular.copy(l);
        }

        this.guardarLibro = () => {
            const lib = this.$scope.vm.libro;
            console.debug('submitado formulario %o', lib);

            if (lib.id) { // modificar
                librosService.modificar(lib.id, lib).then(
                    data => {
                        console.info("libro editado %o", data);
                        this.$scope.vm.mensaje = "Libro Modificado";
                        //TODO actulizar listado libros
                        //this.$scope.vm.libros.splice(this.$scope.vm.libros.indexOf(this.$scope.vm.libros.find(lib.id)),1,data);
                        this.$scope.vm.listar();
                    },
                    res => {
                        console.warn("No se puedo editar %o", res);
                        this.$scope.vm.mensaje = "ERROR modificando";
                    }
                );
            } else { // insertar nuevo
                librosService.crear(lib).then(
                    data => {
                        console.info("libro nuevo %o", data);
                        this.$scope.vm.libros.push(data);
                        this.$scope.vm.libro = undefined;
                        this.$scope.vm.mensaje = "Libro Nuevo Creado";
                    },
                    res => {
                        console.warn("No se puedo crear libro %o", res);
                        this.$scope.vm.mensaje = "ERROR creando Libro";
                    }
                );
            }
        };

        this.borrarLibro = function (idLibro: number) {
            console.debug('click boton borrar %o', idLibro);
            this.librosService.borrarLibro(idLibro).then(res => {
                return true;
            }, res => {
                return false;
            })
        }

        this.reset = function () {
            return this.$scope.vm.libro = {
                "digital": false
            };
        }

        this.reset();
    }
}