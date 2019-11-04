interface IContratosController extends ng.IScope{
    vm: ContratosController;
}

class ContratosController implements ng.IController {
    public titulo: string;
    public contratos: any;

    public static $inject = ["$scope", "contratosJson"];

    // Constructor
    constructor(private $scope: IContratosController, private contratosJson: any){
        console.log("Constructor ContratosController");
        this.$scope.vm = this;
        this.$scope.vm.titulo =  "Programacion Funcional";
        this.$scope.vm.contratos = this.contratosJson;   
    }
}