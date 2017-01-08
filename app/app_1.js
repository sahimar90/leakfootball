angular.module('app',['ngRoute'])
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
                  url: 'http://api.football-data.org/v1/competitions/'+url,
                  headers: {
                   'Content-Type': 'application/json',
                   'X-Auth-Token': 'fa126a82d8e54680aef02a5426603da4'
                  }
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
      noc.get('426/leagueTable').then(function(data){
          $scope.datas = data.data.standing;
          $scope.load = false;

      });
  })
  .controller('LaligaStandingCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.get('436/leagueTable').then(function(data){
          $scope.datas = data.data.standing;
          $scope.load = false;

      });
  })
  .controller('SerieaStandingCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.get('438/leagueTable').then(function(data){
          $scope.datas = data.data.standing;
          $scope.load = false;

      });
  })
  .controller('ChampionStandingCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.get('440/leagueTable').then(function(data){
          $scope.datas = data.data.standings;
          $scope.load = false;

      });
  })