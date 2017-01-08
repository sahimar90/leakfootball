angular.module('app',['ngRoute','angular.filter'])
  .config(function($routeProvider) {
    $routeProvider
      //Standings
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
     .when('/standings/ligueone', {
        templateUrl: 'views/standings/ligueone.html',
        controller: 'LigueoneStandingCtrl'
      })
     .when('/standings/bundes', {
        templateUrl: 'views/standings/bundes.html',
        controller: 'BundesStandingCtrl'
      })

     //Scheduled
     .when('/scheduled/bundes', {
        templateUrl: 'views/scheduled/bundes.html',
        controller: 'BundesScheduledCtrl'
      })
     .when('/scheduled/premier', {
        templateUrl: 'views/scheduled/premier.html',
        controller: 'PremierScheduledCtrl'
      })
     .when('/scheduled/laliga', {
        templateUrl: 'views/scheduled/laliga.html',
        controller: 'LaligaScheduledCtrl'
      })
     .when('/scheduled/seriea', {
        templateUrl: 'views/scheduled/seriea.html',
        controller: 'SerieaScheduledCtrl'
      })
     .when('/scheduled/champion', {
        templateUrl: 'views/scheduled/champion.html',
        controller: 'ChampionScheduledCtrl'
      })
     .when('/scheduled/ligueone', {
        templateUrl: 'views/scheduled/ligueone.html',
        controller: 'LigueoneScheduledCtrl'
      })
     .when('/scheduled/eredivisi', {
        templateUrl: 'views/scheduled/eredivisi.html',
        controller: 'EredivisiScheduledCtrl'
      })

     //Finished
     .when('/finished/bundes', {
        templateUrl: 'views/finished/bundes.html',
        controller: 'BundesfinishedCtrl'
      })
     .when('/finished/premier', {
        templateUrl: 'views/finished/premier.html',
        controller: 'PremierfinishedCtrl'
      })
     .when('/finished/laliga', {
        templateUrl: 'views/finished/laliga.html',
        controller: 'LaligafinishedCtrl'
      })
     .when('/finished/seriea', {
        templateUrl: 'views/finished/seriea.html',
        controller: 'SerieafinishedCtrl'
      })
     .when('/finished/champion', {
        templateUrl: 'views/finished/champion.html',
        controller: 'ChampionfinishedCtrl'
      })
     .when('/finished/ligueone', {
        templateUrl: 'views/finished/ligueone.html',
        controller: 'LigueonefinishedCtrl'
      })
     .when('/finished/eredivisi', {
        templateUrl: 'views/finished/eredivisi.html',
        controller: 'EredivisifinishedCtrl'
      })

     //Finished
     .when('/timed/bundes', {
        templateUrl: 'views/timed/bundes.html',
        controller: 'BundestimedCtrl'
      })
     .when('/timed/premier', {
        templateUrl: 'views/timed/premier.html',
        controller: 'PremiertimedCtrl'
      })
     .when('/timed/laliga', {
        templateUrl: 'views/timed/laliga.html',
        controller: 'LaligatimedCtrl'
      })
     .when('/timed/seriea', {
        templateUrl: 'views/timed/seriea.html',
        controller: 'SerieatimedCtrl'
      })
     .when('/timed/champion', {
        templateUrl: 'views/timed/champion.html',
        controller: 'ChampiontimedCtrl'
      })
     .when('/timed/ligueone', {
        templateUrl: 'views/timed/ligueone.html',
        controller: 'LigueonetimedCtrl'
      })
     .when('/timed/eredivisi', {
        templateUrl: 'views/timed/eredivisi.html',
        controller: 'EredivisitimedCtrl'
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
          },
          getFixtures:function(url){
              var deferred = $q.defer();
              $http({
                  method: 'GET',
                  url: 'api/fixtures/'+url+'.json'
                  
              }).then(function (response) {
                    deferred.resolve(response);
              }, function (error) {
                   deferred.reject(error);
              });
              
              return deferred.promise;
          }          
      }
  })

  // Timed
  .controller('BundestimedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('bundes/timed').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })

  .controller('PremiertimedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('premier/timed').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })

  .controller('ChampiontimedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('champion/timed').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('SerieatimedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('seriea/timed').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('LigueonetimedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('ligueone/timed').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('LaligatimedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('laliga/timed').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('EredivisitimedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('eredivisi/timed').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })

  // Scheduled
  .controller('BundesScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('bundes/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })

  .controller('PremierScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('premier/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })

  .controller('ChampionScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('champion/scheduled_1').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('SerieaScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('seriea/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('LigueoneScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('ligueone/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('LaligaScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('laliga/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('EredivisiScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('eredivisi/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })

  // Finished
  .controller('BundesfinishedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('bundes/finished').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })

  .controller('PremierfinishedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('premier/finished').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })

  .controller('ChampionfinishedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('champion/finished').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('SerieafinishedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('seriea/finished').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('LigueonefinishedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('ligueone/finished').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('LaligafinishedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('laliga/finished').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('EredivisifinishedCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('eredivisi/finished').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })

  // Scheduled
  .controller('BundesScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('bundes/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })

  .controller('PremierScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('premier/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })

  .controller('ChampionScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('champion/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('SerieaScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('seriea/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('LigueoneScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('ligueone/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('LaligaScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('laliga/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })
  .controller('EredivisiScheduledCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.getFixtures('eredivisi/scheduled').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;
      });

      $scope.format = function(date){
          return moment(date).format('DD MMM YYYY hh:mm A');
      }
  })

  //Standings
  .controller('PremierStandingCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.get('premier').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;

      });
  })
  .controller('LigueoneStandingCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.get('ligueone').then(function(data){
          $scope.datas = data.data;
          $scope.load = false;

      });
  })
  .controller('BundesStandingCtrl',function($scope,noc){
      $scope.datas = [];
      $scope.load = true;
      noc.get('bundes').then(function(data){
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