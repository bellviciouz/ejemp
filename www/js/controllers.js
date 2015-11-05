var db;

angular.module('starter.controllers', [/*'ionic','ngCordova'*/])

.controller('DashCtrl', function($scope,$ionicPopup,$cordovaSQLite) {
    
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Agenda',
       template: 'Datos almacenados'
     });
   }
   
   
   $scope.guardar = function(persona) {


  
        $cordovaSQLite.execute(db, 'INSERT INTO personas (nombre,apellido,telefono,email) VALUES (?,?,?,?)', [persona.nombre,persona.apellido,persona.telefono,persona.email])
        .then(function(result) {
            $scope.statusMessage = "Registro guardado";
        }, function(error) {
            $scope.statusMessage = "Error: " + error.message;
        })
  
  /*       
    chats.unshift({
			"nombre":persona.nombre,
			"apellido":persona.apellido,
			"telefono":persona.telefono,
			"email":persona.email
        }
        );
      
     */
     
     
   }
   
   
   
   
})

.controller('ChatsCtrl', function($scope, Chats,$ionicPopup,$cordovaSQLite) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:

    
    
    
    
    
    
      $scope.chats = Chats.all();
    
    
    $scope.getAll = function()
  {
      $scope.chats = Chats.all();
  };
  
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
    
    
    
    
    
    
    
    
    
    

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $cordovaSQLite) {
 // $scope.chat = Chats.get($stateParams.chatId);
  //$scope.persona={nombre:"hola"};
  $scope.persona = Chats.get($stateParams.chatId);
  
  $scope.guardar=function(persona){
       $cordovaSQLite.execute(db, 'UPDATE personas SET nombre=?, apellido=?,telefono=?,email=? WHERE id=?', [persona.nombre,persona.apellido,persona.telefono,persona.email,persona.id])
        .then(function(result) {
            $scope.statusMessage = "Registro guardado";
        }, function(error) {
            $scope.statusMessage = "Error: " + error.message;
        })
  }
  
  
  
  
  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


