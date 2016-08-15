app.controller('navCtrl', ['$scope', '$state', 'login', function ($scope, $state, login) {
	$scope.isCollapsed = true;

	$scope.collapse = function () {
		$scope.isCollapsed = true;
	};

	$scope.adminMenuItems = [
		{
			pageName: 'Users',
			link: '/#/admin/users'
		},
		{
			pageName: 'Groups',
			link: '/#/admin/groups'
		}
	];

	$scope.mainMenuItems = [
		{
			pageName: 'Accounts',
			link: '/#/main/accounts'
		},
		{
			pageName: 'Contacts',
			link: '/#/main/contacts'
		}
	];

	$scope.isLoggedIn = login.isLoggedIn;
	$scope.currentUser = login.currentUser;
	$scope.isAdmin = function () {
		if ($scope.isLoggedIn()) {
			var admin = $scope.currentUser();
			if (admin.isAdmin === 'true') {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};
	$scope.logOut = function () {
		login.logOut();
		$state.go('login');
	};
}]);