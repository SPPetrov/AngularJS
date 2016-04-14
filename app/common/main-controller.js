angular.module('socialNetwork.common',[])
    .controller('MainCtrl', [
        '$scope',
        '$http',
        'identity',
        function ($scope, $http, identity) {
                $scope.isAuthenticated = identity.isAuthenticated();


         }]);