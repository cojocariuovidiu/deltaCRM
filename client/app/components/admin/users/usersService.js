app.factory('user', [
	'$http',
	'$state',
	'login',
	function ($http, $state, login) {
		var user = {
			users: [],
			skip: 0,
			limit: 5,
			count: 0
		};

		user.initialize = function () {
			user.getCount();
			user.getAll();

		};

		user.getAll = function () {
			return $http.get('/users?skip='+user.skip+'&limit='+user.limit+'&token='+login.getToken())
				.success(function (data) {
					angular.copy(data, user.users);
				});
		};

		user.getCount = function () {
			return $http.get('/users/count?token='+login.getToken())
				.success(function (data) {
					user.count = data;
				});
		};

		user.updateUser = function (user) {
			return $http.put('/users/' + user._id + '?token='+login.getToken(), user)
				.success(function (data) {
					angular.copy(data, user.users);
				});
		};

		user.createUser = function (myUser) {
			return $http.post('/users?token='+login.getToken(), myUser)
				.success(function (data) {
					user.getAll();
				});
		};

		user.deleteUser = function (myUser) {
			return $http.delete('/users/' + myUser._id + '?token='+login.getToken(), myUser)
				.success(function (data) {
					angular.copy(data, user.users);
					if (user.userId === login.currentUser().userId) {
						login.logOut();
						$state.go('login');
					} else {
						user.getAll();
					}
				});
		};

		user.subtractCount = function () {
			user.count-=1;
		};

		user.addCount = function () {
			user.count+=1;
		};

		return user;
	}
]);