var meetupsApp = angular.module('meetupsApp', []);
meetupsApp.controller('meetupsController', function ($scope) {
	$scope.meetupsCount = 10;
	$scope.meetups = [];
	$scope.createMeetup = function () {
		$scope.meetups.push({name: $scope.meetupName});
		$scope.meetupName = '';
	}
});

