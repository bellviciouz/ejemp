// Ionic Starter App

//Instancia de base de datos
var db;

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js




angular.module('starter', ['ionic', 'starter.controllers', 'starter.services' , 'ngCordova' ])

.run(function($ionicPlatform,$cordovaSQLite,$ionicLoading) {
  $ionicPlatform.ready(function() {
       $ionicLoading.show({ template: 'Loading...' });
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
    
    
  //aqui empieza mi codigo


if(window.cordova) {
      // App syntax
      db = $cordovaSQLite.openDB("agenda.db");
      $ionicLoading.hide();
    } else {
      // Ionic serve syntax
      db = window.openDatabase("agenda.db", "1", "My app", -1);
      $ionicLoading.hide();
    }
    
    
    
$cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS personas (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre varchar(255), apellido varchar(255), telefono varchar(255), email varchar(255))');
    
      
  });
  

  
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});



/*

$scope.guardar = function(persona) {
  
     var alertPopup = $ionicPopup.alert({
       title: 'Agenda',
       template: 'Datos almacenados'
     });
 
 
  $cordovaSQLite.execute(db, 'INSERT INTO personas (nombre,apellido,telefono,email) VALUES (?,?,?,?)', [persona.nombre,persona.apellido,persona.telefono,persona.email])
        .then(function(result) {
            $scope.statusMessage = "Registro guardado";
    
        }, function(error) {
            $scope.statusMessage = "Error: " + error.message;
        })
 
}
*/