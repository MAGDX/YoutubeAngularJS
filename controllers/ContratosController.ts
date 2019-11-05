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
    public ejercicio6: Array < string > ;

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
        console.debug('Ejercicio 1 %o', $scope.vm.ejercicio1);

        // Filter Ejercicio 2
        this.$scope.vm.ejercicio2 = this.contratosJson.filter(elem => {
            return (elem.ACCIONES && elem.ACCIONES.length >= 1 && elem.ACCIONES.length <= 3);
        });
        console.debug('Ejercicio 2 %o', $scope.vm.ejercicio2);

        // Filter Ejercicio 3
        this.$scope.vm.ejercicio3 = this.contratosJson.filter(elem => {
            return (elem.ACCIONES && elem.ACCIONES.length > 3);
        });
        console.debug('Ejercicio 3 %o', $scope.vm.ejercicio3);

        // Filter/Find Ejercicio 4
        this.$scope.vm.ejercicio4 = this.contratosJson.filter(elem => //filtramos que tengan ACCIONES
            elem.ACCIONES && elem.ACCIONES.length > 0).find(elem => // dentro del array de ACCIONES, buscamos la clave
            elem.ACCIONES.find(elem => elem.clave === "SITUACION")
        );
        console.debug('Ejercicio 4 %o', $scope.vm.ejercicio4);

        // Map Ejercicio 5
        this.$scope.vm.ejercicio5 = this.contratosJson.reverse() // dar la vuelta al array
            .filter(elem => elem.ACCIONES && elem.ACCIONES.length > 0) //filtramos que tengan ACCIONES
            .find(elem => elem.ACCIONES.find(elem => elem.clave === "SITUACION") // dentro del array de ACCIONES, buscamos la clave
        );
        console.debug('Ejercicio 5 %o', $scope.vm.ejercicio5);

        // Map Ejercicio 6
        let accionesDuplicadas: Array < any > = $scope.vm.contratos
            .filter(c => c.ACCIONES && c.ACCIONES.length > 0) // coger solo arrays con datos
            .map(c => c.ACCIONES) // quedarnos con las acciones
            .reduce(function (a, b) { // reducir los subarrays a 1 array
                return a.concat(b);
            })
            .map(x => x.titulo); // quedarnos con el titulo de la accion

        this.$scope.vm.ejercicio6 = [...new Set(accionesDuplicadas)].sort(); // eliminar duplicados
        console.debug('Ejercicio 6 %o', $scope.vm.ejercicio6);
    }
}