'use strict';

var app = angular.module('sif', ['firebase', 'ui.router']);



app.controller("HomeCtrl", function($scope, $http) {
  $scope.tags = [], $scope.tweet = '';

  var wordsArr = [];
  $scope.search = function() {
    $http.post('http://localhost:8001/search', { words: $scope.words }).success(function(data) {
      wordsArr = $scope.words.split(' ');
      console.log(wordsArr.length);
      $scope.randColor = Please.make_color({
        colors_returned: wordsArr.length
      });
      $scope.tags = data;
    });
  }


  $scope.sendTweet = function() {
    $http.post('http://localhost:8001/tweet', {tweet: scope.tweet}).success(function(res) {
      console.log(res)
    });
  }

  $scope.includeInTweet = function(tag) {
    $scope.tweet = $scope.tweet + ' ' + tag;
  }
});
'use strict';

angular.module('sif')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
    
  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/home/home.html', controller: 'HomeCtrl'})
  .state('user', {url: '', templateUrl: '/views/users/user.html', abstract: true})
  .state('user.register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('user.login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'});
});

'use strict';

angular.module('sif')
.constant('urls',{
  'apiUrl': 'http://localhost:8000',
  'firebaseUrl': 'https://__Your_Firebase_Here__.firebaseio.com/'
});

'use strict';

angular.module('sif')
.run(function(FBService){
  FBService.init();
  console.log('Sif Online');
});

'use strict';

angular.module('sif')
.service('FBService', function($window, $firebaseAuth, urls){
  this.init = function(){
    this.fbRef = new $window.Firebase(urls.firebaseUrl);
    this.afAuth = $firebaseAuth(this.fbRef);
  };
});

'use strict';

angular.module('sif')
.factory('User', function(){
  return;
});

'use strict';

angular.module('sif')
.controller('NavCtrl', function(){
  console.log('nav loaded');
});

'use strict';

angular.module('sif')
.controller('UsersCtrl', function($scope, $state){
  console.log('user ctrl online');
  
  $scope.name = $state.current.name.split('.')[1];
  
  $scope.submit = function(user){
    console.log(user);
  };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiY29uZmlnL2NvbmZpZy5qcyIsImNvbmZpZy9jb25zdGFudHMuanMiLCJjb25maWcvcnVuLmpzIiwibW9kZWxzL2Zic2VydmljZS5qcyIsIm1vZGVscy91c2VyLmpzIiwidmlld3MvbmF2L25hdi5qcyIsInZpZXdzL3VzZXJzL3VzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3NpZicsIFsnZmlyZWJhc2UnLCAndWkucm91dGVyJ10pO1xuXG5cblxuYXBwLmNvbnRyb2xsZXIoXCJIb21lQ3RybFwiLCBmdW5jdGlvbigkc2NvcGUsICRodHRwKSB7XG4gICRzY29wZS50YWdzID0gW10sICRzY29wZS50d2VldCA9ICcnO1xuXG4gIHZhciB3b3Jkc0FyciA9IFtdO1xuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oKSB7XG4gICAgJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAxL3NlYXJjaCcsIHsgd29yZHM6ICRzY29wZS53b3JkcyB9KS5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHdvcmRzQXJyID0gJHNjb3BlLndvcmRzLnNwbGl0KCcgJyk7XG4gICAgICBjb25zb2xlLmxvZyh3b3Jkc0Fyci5sZW5ndGgpO1xuICAgICAgJHNjb3BlLnJhbmRDb2xvciA9IFBsZWFzZS5tYWtlX2NvbG9yKHtcbiAgICAgICAgY29sb3JzX3JldHVybmVkOiB3b3Jkc0Fyci5sZW5ndGhcbiAgICAgIH0pO1xuICAgICAgJHNjb3BlLnRhZ3MgPSBkYXRhO1xuICAgIH0pO1xuICB9XG5cblxuICAkc2NvcGUuc2VuZFR3ZWV0ID0gZnVuY3Rpb24oKSB7XG4gICAgJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAxL3R3ZWV0Jywge3R3ZWV0OiBzY29wZS50d2VldH0pLnN1Y2Nlc3MoZnVuY3Rpb24ocmVzKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgfSk7XG4gIH1cblxuICAkc2NvcGUuaW5jbHVkZUluVHdlZXQgPSBmdW5jdGlvbih0YWcpIHtcbiAgICAkc2NvcGUudHdlZXQgPSAkc2NvcGUudHdlZXQgKyAnICcgKyB0YWc7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ3NpZicpXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gICAgXG4gICRzdGF0ZVByb3ZpZGVyXG4gIC5zdGF0ZSgnaG9tZScsIHt1cmw6ICcvJywgdGVtcGxhdGVVcmw6ICcvdmlld3MvaG9tZS9ob21lLmh0bWwnLCBjb250cm9sbGVyOiAnSG9tZUN0cmwnfSlcbiAgLnN0YXRlKCd1c2VyJywge3VybDogJycsIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL3VzZXJzL3VzZXIuaHRtbCcsIGFic3RyYWN0OiB0cnVlfSlcbiAgLnN0YXRlKCd1c2VyLnJlZ2lzdGVyJywge3VybDogJy9yZWdpc3RlcicsIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL3VzZXJzL3VzZXJzLmh0bWwnLCBjb250cm9sbGVyOiAnVXNlcnNDdHJsJ30pXG4gIC5zdGF0ZSgndXNlci5sb2dpbicsIHt1cmw6ICcvbG9naW4nLCB0ZW1wbGF0ZVVybDogJy92aWV3cy91c2Vycy91c2Vycy5odG1sJywgY29udHJvbGxlcjogJ1VzZXJzQ3RybCd9KTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnc2lmJylcbi5jb25zdGFudCgndXJscycse1xuICAnYXBpVXJsJzogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCcsXG4gICdmaXJlYmFzZVVybCc6ICdodHRwczovL19fWW91cl9GaXJlYmFzZV9IZXJlX18uZmlyZWJhc2Vpby5jb20vJ1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdzaWYnKVxuLnJ1bihmdW5jdGlvbihGQlNlcnZpY2Upe1xuICBGQlNlcnZpY2UuaW5pdCgpO1xuICBjb25zb2xlLmxvZygnU2lmIE9ubGluZScpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmFuZ3VsYXIubW9kdWxlKCdzaWYnKVxuLnNlcnZpY2UoJ0ZCU2VydmljZScsIGZ1bmN0aW9uKCR3aW5kb3csICRmaXJlYmFzZUF1dGgsIHVybHMpe1xuICB0aGlzLmluaXQgPSBmdW5jdGlvbigpe1xuICAgIHRoaXMuZmJSZWYgPSBuZXcgJHdpbmRvdy5GaXJlYmFzZSh1cmxzLmZpcmViYXNlVXJsKTtcbiAgICB0aGlzLmFmQXV0aCA9ICRmaXJlYmFzZUF1dGgodGhpcy5mYlJlZik7XG4gIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuYW5ndWxhci5tb2R1bGUoJ3NpZicpXG4uZmFjdG9yeSgnVXNlcicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybjtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnc2lmJylcbi5jb250cm9sbGVyKCdOYXZDdHJsJywgZnVuY3Rpb24oKXtcbiAgY29uc29sZS5sb2coJ25hdiBsb2FkZWQnKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnc2lmJylcbi5jb250cm9sbGVyKCdVc2Vyc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSl7XG4gIGNvbnNvbGUubG9nKCd1c2VyIGN0cmwgb25saW5lJyk7XG4gIFxuICAkc2NvcGUubmFtZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUuc3BsaXQoJy4nKVsxXTtcbiAgXG4gICRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbih1c2VyKXtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgfTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9