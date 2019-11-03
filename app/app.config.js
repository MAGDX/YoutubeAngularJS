'use strict';

angular.
module('youtubeApp').
config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider.
    when('/phones', {
      template: '<phone-list></phone-list>'
    }).
    when('/phones/:phoneId', {
      template: '<phone-detail></phone-detail>'
    }).
    when('/comparador', {
      template: '<phone-comparador></phone-comparador>'
    }).
    when('/form', {
      template: '<phone-form></phone-form>'
    }).
    when('/form/:phoneId', {
      template: '<phone-form></phone-form>'
    }).
    when('/carrito', {
      template: '<phone-carrito></phone-carrito>'
    }).
    when('/404', {
      templateUrl: '404.html'
    }).
    otherwise('/phones');
  }
]);