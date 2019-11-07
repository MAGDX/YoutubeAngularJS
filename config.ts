// Configuracion de Rutas

app.config([
    "$urlRouterProvider",
    "$stateProvider",
    ($urlRouterProvider: angular.ui.IUrlRouterProvider, $stateProvider: angular.ui.IStateProvider) => {
        console.log("Entrando en la configuracion de rutas");

        // Configuracion de Rutas
        $urlRouterProvider.when("", "/home"); // Si la ruta no existe, dirigimos al Home

        // Configuracion de Estados
        $stateProvider
            // Home
            .state("home", {
                url: "/home",
                templateUrl: "views/home.html"
            })
            // About
            .state("about", {
                url: "/about",
                templateUrl: "views/about.html"
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
    }
]);