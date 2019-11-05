interface ILibrosController extends ng.IScope {
    vm: LibrosController;
}

class LibrosController implements ng.IController {
    
    public libros: Array < ILibro > ;
    public libro = {
        
    }

    public static $inject = ["$scope", "librosService"];

    // Constructor
    constructor(private $scope: ILibrosController, private librosService: LibrosService) {
        console.log("Constructor LibrosController");
        this.$scope.vm = this;
        this.$scope.vm.libros = [];

        this.librosService.getLibros().then( libros => this.$scope.vm.libros = libros);
    }

    // Funciones
    public editarLibro(l: ILibro){

    }

}