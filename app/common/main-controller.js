angular.module('socialNetwork.common',[])
    .controller('MainCtrl', [
        '$scope',
        'identity',
        function ($scope, identity) {
                $scope.isAuthenticated = identity.isAuthenticated();
                console.log($scope.isAuthenticated);

                //$scope.currentUser = identity.getCurrentUser();
         }])