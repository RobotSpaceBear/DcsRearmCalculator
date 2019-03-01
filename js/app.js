'use strinct';

/**
 * Declaring my app
 */
var app = angular.module("app", [
    //and some dependeciens
    'ngRoute',
    'weaponsEncyclopedia'
]);

/**
 * Declaring a module
 */
var weaponsEncyclopedia = angular.module('weaponsEncyclopedia', []);



app.controller("mainCtrl", function ($scope) {
    $scope.test = "TEST";

    var plane = {
        name: "Harrier",
        weights: {
            emptyWeight: 14000,
            maxWeight: 31000
        }
    };

    $scope.plane = plane;
});