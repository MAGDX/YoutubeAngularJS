app.config([
    "$urlRouterProvider",
    "$stateProvider",
    function ($urlRouterProvider, $stateProvider) {
        console.log("Entrando en la configuracion de rutas");
        $urlRouterProvider.when("", "/home");
        $stateProvider
            .state("home", {
            url: "/home",
            templateUrl: "views/home.html"
        })
            .state("readme", {
            url: "/readme",
            templateUrl: "views/readme.html"
        })
            .state("contratos", {
            url: "/programacion-funcional",
            templateUrl: "views/contratos.html",
            controller: ContratosController
        });
    }
]);
//# sourceMappingURL=config.js.map