app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('dashboard');

		$stateProvider
			.state('singleContact', {
				url: '/main/singleContact/{id}',
				templateUrl: '/app/components/main/singleContact/_singleContact.html',
				controller: 'singleContactCtrl',
				resolve: {
					myContact: [
						'$stateParams',
						'contact',
						function ($stateParams, contact) {
							return contact.get($stateParams.id);
						}
					]
				},
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