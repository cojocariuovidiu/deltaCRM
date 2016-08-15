app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('login');

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: '/app/components/dashboard/_dashboard.html',
				controller: 'dashboardCtrl',
				onEnter: [
					'$state',
					'login',
					function ($state, login) {
						if (!login.isLoggedIn()) {
							$state.go('login');
						}
					}]
			});
	}
]);