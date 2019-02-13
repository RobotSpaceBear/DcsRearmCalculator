var app = angular.module("app", []);

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