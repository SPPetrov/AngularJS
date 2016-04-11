angular.module('socialNetwork.users.identity')
    .factory('identity', [function(){

        var accessToken = 'Ab-QOEf2wDsHCGQojq2n60o5N6cINyMMN7dmXOkIDdmNU8CGHuUgG6IXiomcto9drGY7xHivb5MQv_ThM2g2KC737KIROlbpuY4gHG3g82ujmTFJiSXWzVYwxt8n1EpSJxT0Xgrk4GovPp9TpH5D6CQ6XEABaXyz2DhmlfNsNCBySYlCFvgrjiyJ94WnOkJzdNeX_XV2Iaqrj6Cc_M24x1kJUk5_0N_PeQeNE7rpPodvDyLikPrNhSh7nkAXonzO_Uy6Cj_iXgGoi-_kYs5iVTNbV4iv7A4i5Qef0E4T2GthBnz3KFYtBBg7AltO5bMyGUoB633S-oS-xJi4M6noUQybo7fbifnwpLgc8pPEHs7QVSrtCSg2vLQ6MzNammoNft37eKSv9P4g6KITNbdBRh3ZpLbV90pT7C03W-wr2apf2d2iNmtaxiXqkVNOVU2qVg22dzdDXMFImetwqg_3zmqGnn6VOXRbd56Cwf3yah1299FyXbNGfoKsTbLnqarM';
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