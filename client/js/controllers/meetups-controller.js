app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
	var Meetup = $resource('/api/meetups'); //base url for REST model/resource
	$scope.meetupsCount = 10;
	$scope.meetups = [];
	$scope.createMeetup = function () {
		var meetup = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.$save();
		$scope.meetupName = '';
	}
}]);