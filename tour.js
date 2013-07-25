'use strict';

myApp.factory("tourPages", function() {
    var tourPages = [   {url:'custom/screens/tour1.html'},
                        {url:'custom/screens/tour2.html'},
                        {url:'custom/screens/tour3.html'}];

    return tourPages;
})

myApp.controller('TourCtrl', function ($scope, $stateParams, tourPages) {
    $scope.tourPages = tourPages;
    $scope.currentPage = $stateParams.page-1;

    $scope.previousPage = function() {
        if ($scope.currentPage > 0)
            $scope.currentPage = $scope.currentPage - 1;
    }

    $scope.nextPage = function() {
        if ($scope.currentPage < $scope.tourPages.length-1)
            $scope.currentPage = $scope.currentPage + 1;
    }
});

myApp.config(function($stateProvider) {
    $stateProvider
        .state('tour', {
            url: '/tour/:page',
            controller:'TourCtrl',
            templateUrl: 'tour/tour.html'
        })
});



