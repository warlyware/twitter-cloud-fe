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