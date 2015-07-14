(function(){
    'use strict';
    angular.module('MyApp',['ngMaterial'])
        .controller('ListController',['$scope','$http',function($scope,$http){

            $scope.results =[];
            $scope.isSearching = false;

            $scope.search =function(){
                $scope.isSearching = true;
                $http({
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest',
                    params:{
                        method: 'flickr.photos.search',
                        api_key:'89df1f171bd795ff02eefbca103803ea',
                        text: $scope.searchTerm,
                        format:'json',
                        nojsoncallback:1
                    }
                }).success(function(data){
                        $scope.results =data;
                    $scope.isSearching=false;
                }).error(function(error){
                    console.error(error);
                    $scope.isSearching=false;
                });
            }

        }]);
})();