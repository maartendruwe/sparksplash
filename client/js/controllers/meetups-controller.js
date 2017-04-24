app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
	$scope.meetupsCount = 10;
	$scope.meetups = [];
	$scope.createMeetup = function () {
		$scope.meetups.push({name: $scope.meetupName});
		$scope.meetupName = '';
	}
}]);