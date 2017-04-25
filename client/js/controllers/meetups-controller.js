app.controller('meetupsController', ['$scope', '$resource', function ($scope, $resource) {
	var Meetup = $resource('/api/meetups'); //base url for REST model/resource
	Meetup.query(function (results) { //query --> http get
		$scope.meetups = results;
	});

	//$scope.meetups = [];
	$scope.createMeetup = function () {
		var meetup = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.$save(function (result) { //$save invokes angularJS save method on object instance (save --> http post)
			$scope.meetups.push(result);
		});
		$scope.meetupName = '';
	}

	$scope.emptyDB = function () {
		Meetup.remove({}, function () {
			console.log('Emptied db');
		});
		Meetup.query(function (results) {
			$scope.meetups = results;
		});
	}
}]);