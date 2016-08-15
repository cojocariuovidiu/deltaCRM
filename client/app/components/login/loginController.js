app.controller('loginCtrl', ['$scope', '$state', 'login', function ($scope, $state, login) {
	$scope.user = {};

	$scope.logIn = function() {
		login.logIn($scope.user)
			.error(function (error) {
				$scope.error = error;
			}).then(function () {
				$state.go('dashboard');
			});
	};
}]);