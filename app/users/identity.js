angular.module('socialNetwork.users.identity', [])
    .factory('identity', [
        '$http',
        '$q',
        'BASE_URL',
        function ($http, $q, BASE_URL) {

            var deferred = $q.defer();

            var currentUser = undefined;

            var accessToken ='XDv3W7HTpocorcxxChXe23GdtzTL_O82JdXOYfX2zmCdoisCANE6HUn1h-A73ryR9x6uwi8Kz6U2R0GYF8onz7s8PjnaMgHS6w_S0NMCmvcy2qPH3j6e5HHXTlG32FQ2a0CX5H1qViLCoeVrpJG8mlJNmk5el6EmGTXb74axkR-EwlYafHJwSU9iU9ygLKacX8wE-ZceTi4hfVUVlkohrM1yN2GJB7GiFcIJPjQ79P6Fgy2jK52XRDSI6OhH-KB8ln7JuYvQzrmFMAdpOTF_43mMdpwqiyTUvRvSyEULOuskpRsSgRoh2yu36XnrUTQm26jRcZ5V2fFeW8hH2zHqWmXSOcaiW62MaFzKR2EXU2NY-P8WWwWwxJOpYertvCwIBM5MPydOCD-zcg1JPSZS9gakbzSmW7Xc7Udw2UG3N0ysQxucG_Nykqb6chxD0fUWAyclCriKnaH3xTADZMZaMwhN-osyfCck_Rtksi6fRBGw8AuLN-2VB9KMf8ofyJ2n';
            $http.defaults.headers.common.Authorization = 'Bearer ' + accessToken;

            $http.get(BASE_URL + 'me')
                .then(function (response) {
                    currentUser = response.data;
                    deferred.resolve(response.data);
                });



            return {
                getCurrentUser: function () {
                    if(currentUser){
                        return $q.when(currentUser);
                    }
                    else {
                        return deferred.promise;
                    }
                },
                isAuthenticated: function () {
                    return true;
                }
            };
        }]);