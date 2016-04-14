angular.module('socialNetwork.users.identity',[])
    .factory('identity', [
        '$http',
        'BASE_URL',
        function($http, BASE_URL){

        var currentUser = undefined;

        var accessToken = 'A5du-sUMJeTPhAtaQ2ea_358vBIPYM1ktkaCKUW1k4blz34fDPJZxq2CqmeCqMQqLE458_Lh1v8dsJs0HoBRSfOvm_kXKVP2D2Xadbtbw3fk21DfR49gL9SWvswjjowfzBRTITQqJFGWP2u-AKX26-1Og6eOs1wy1o1Sy7BYdtlFWNI5TXw0OOspE8wDiBeYbfcwPYlznR6NXFaXoUvk8nB-UM17XAtfEPewIuMq1JUXD5imudKYOWGhmT5Y27EaQuC7MZAWNNJlKsPEIpknj2ZRlIk-3CZ6fjq49VY4mg9HACsiunMmYakuSuefDgwxcWD-S8Y-ByKnX4BeqXOs_eJfnNTfF310ZdGPCaneMpLH4Ptc3UJm8aZgj1VNVPFDBHtnA16BtBfqqC9muL9CKxw6OBs_j8J4DsY6R8YYJ_QP4UXL1Q8Ier6Pm6ZZA29iDGuD_S1uZNuVOQrbC7hPxPgF80ncbGZdbIDdV7E5kEKUCUkoK-iJCsQc6HnKEtPc';
        $http.defaults.headers.common.Authorization = 'Bearer ' + accessToken;

        var currentUser = $http.get(BASE_URL + 'me')
            .then(function (response) {
                console.log(response.data);
            });

        var username = 'stoyko1';


        return {
            getCurrentUser: function () {
                return {
                    username: username
                };
            },
            isAuthenticated: function (){
                return true;
            }
        };
    }]);