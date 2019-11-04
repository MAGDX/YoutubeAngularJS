interface IContratoMapeado {
    id: string;
    nombre: string;
    nAcciones: number;
}

interface IContratosController extends ng.IScope {
    vm: ContratosController;
}

class ContratosController implements ng.IController {
    public titulo: string;
    public contratos: any;
    public contratosMapeados: Array < IContratoMapeado > ;
    public ejercicio1: any;
    public ejercicio2: any;
    public ejercicio3: any;
    public ejercicio4: any;
    public ejercicio5: any;
    public ejercicio6: any;

    public static $inject = ["$scope", "contratosJson"];

    // Constructor
    constructor(private $scope: IContratosController, private contratosJson: any) {
        console.log("Constructor ContratosController");
        this.$scope.vm = this;
        this.$scope.vm.titulo = "Programacion Funcional";
        this.$scope.vm.contratos = this.contratosJson;

        // Map Contratos Mapeados
        this.$scope.vm.contratosMapeados = this.contratosJson.map(elem => {
            return {
                "id": elem.idColumn,
                "nombre": (elem.nombre) ? elem.nombre : "Sin Nombre",
                "nAcciones": (elem.ACCIONES) ? elem.ACCIONES.length : 0
            }
        });
        console.debug('Contratos mapeados %o', $scope.vm.contratosMapeados);

        // Filter Ejercicio 1
        this.$scope.vm.ejercicio1 = this.contratosJson.filter(elem => {
            return (!elem.ACCIONES || elem.ACCIONES.length == 0);
        });
        console.debug('Contratos mapeados %o', $scope.vm.ejercicio1);

        // Filter Ejercicio 2
        this.$scope.vm.ejercicio2 = this.contratosJson.filter(elem => {
            return (elem.ACCIONES && elem.ACCIONES.length >= 1 && elem.ACCIONES.length <= 3);
        });
        console.debug('Contratos mapeados %o', $scope.vm.ejercicio2);

        // Filter Ejercicio 3
        this.$scope.vm.ejercicio3 = this.contratosJson.filter(elem => {
            return (elem.ACCIONES && elem.ACCIONES.length > 3);
        });
        console.debug('Contratos mapeados %o', $scope.vm.ejercicio3);

        // Filter Ejercicio 4
        this.$scope.vm.ejercicio4 = this.contratosJson.filter(elem => {
            return (elem.ACCIONES && elem.ACCIONES.clave == 'SITUACION');
        });
        console.debug('Contratos mapeados %o', $scope.vm.ejercicio4);

        // Map Ejercicio 5

        // Map Ejercicio 6
    }
}