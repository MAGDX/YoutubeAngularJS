// Configuracion de Rutas

app.config([
    "$urlRouterProvider",
    "$stateProvider",
    ($urlRouterProvider: angular.ui.IUrlRouterProvider, $stateProvider: angular.ui.IStateProvider) => {
        console.log("Entrando en la configuracion de rutas");

        // Configuracion de Rutas
        $urlRouterProvider.when("", "/home");

        // Configuracion de Estados
        $stateProvider
            // Home
            .state("home", {
                url: "/home",
                templateUrl: "views/home.html"
            })
            // Read Me
            .state("readme", {
                url: "/readme",
                templateUrl: "views/readme.html"
            })
            // Contratos
            .state("contratos", {
                url: "/programacion-funcional",
                templateUrl: "views/contratos.html",
                controller: ContratosController
            })
            // Ejercicios Contratos
            .state("ejerciciosContratos", {
                url: "/ejercicios-contratos",
                templateUrl: "views/ejercicios-contratos.html",
                controller: ContratosController
            })
            // Libros
            .state("libros", {
                url: "/libros",
                templateUrl: "views/libros.html",
                controller: LibrosController
            });
            /*.state("app", {
                url: "/app",
                abstract: true,
                template: "<div ui-view></div>",
                resolve: {
                    clasificacionMundial: [
                        "ergastService",
                        (ergastService: IErgastService) => ergastService.getDrivers()
                    ]
                }
            })
            .state("app.circuito", {
                url: "/circuitos",
                templateUrl: "views/circuitos.html",
                controller: CircuitosController,
                resolve: {
                    circuitosMundial: [
                        "ergastService",
                        (ergastService: IErgastService) => ergastService.getCircuitos()
                    ]
                }
            })
            .state("app.lista", {
                url: "/pilotos",
                templateUrl: "views/pilotos.html",
                controller: PilotosController
            })
            .state("app.piloto", {
                url: "/piloto/:id",
                templateUrl: "views/piloto.html",
                controller: "pilotoController",
                resolve: {
                    pilotoId: ["$stateParams", ($stateParams: angular.ui.IStateParamsService) => $stateParams.id],
                    piloto: [
                        "clasificacionMundial",
                        "pilotoId",
                        (clasificacionMundial: any, pilotoId: string) =>
                        clasificacionMundial.find(clasificacion => clasificacion.Driver.driverId == pilotoId)
                    ],
                    carreras: [
                        "ergastService",
                        "pilotoId",
                        (ergastService: IErgastService, pilotoId: string) => ergastService.getDriverRaces(pilotoId)
                    ]
                }
            })
            .state("app.piloto.detalle", {
                url: "/detalle",
                templateUrl: "views/pilotoDetalle.html",
                controller: "pilotoDetalleController",
                params: {
                    id: null
                }
            })
            .state("app.piloto.carreras", {
                url: "/carreras",
                templateUrl: "views/pilotoCarreras.html",
                controller: "pilotoCarrerasController",
                params: {
                    id: null
                }
            });*/
    }
]);