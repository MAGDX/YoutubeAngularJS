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
            .state("about", {
            url: "/about",
            templateUrl: "views/about.html"
        })
            .state("contratos", {
            url: "/programacion-funcional",
            templateUrl: "views/contratos.html",
            controller: ContratosController
        })
            .state("ejerciciosContratos", {
            url: "/ejercicios-contratos",
            templateUrl: "views/ejercicios-contratos.html",
            controller: ContratosController
        })
            .state("libros", {
            url: "/libros",
            templateUrl: "views/libros.html",
            controller: LibrosController
        });
    }
]);
//# sourceMappingURL=config.js.map