angular.module('app',['ngRoute','angular.filter'])
  .config(function($routeProvider) {
    $routeProvider
     .when('/standings/premier', {
        templateUrl: 'views/standings/premier.html',
        controller: 'PremierStandingCtrl'
      })
     .when('/standings/laliga', {
        templateUrl: 'views/standings/laliga.html',
        controller: 'LaligaStandingCtrl'
      })
     .when('/standings/seriea', {
        templateUrl: 'views/standings/seriea.html',
        controller: 'SerieaStandingCtrl'
      })
     .when('/standings/champion', {
        templateUrl: 'views/standings/champion.html',
        controller: 'ChampionStandingCtrl'
      })
  })
  .service('noc',function($http,$q){
      return {
          get:function(url){
              var deferred = $q.defer();
              $http({
                  method: 'GET',
                  url: 'api/standings/'+url+'.json'
                  
              }).then(function (response) {
                    deferred.resolve(response);
              }, function (error) {
                   deferred.reject(error);
              });
              
              return deferred.promise;
          }
          
      }
  })
  .controller('PremierStandingCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.get('premier').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;

      });
  })
  .controller('LaligaStandingCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.get('laliga').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;

      });
  })
  .controller('SerieaStandingCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.get('seriea').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;

      });
  })
  .controller('ChampionStandingCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.get('champion').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;

      });
  })