app.controller('usersCtrl', ['$scope', 'user', function ($scope, user) {
	$scope.users = user.users;
	$scope.showUser = false;

	$scope.updateUser = function (myUser) {
		user.updateUser(myUser);
	};

	$scope.searchFunction = function () {
		if (!$scope.search || $scope.search === '') {
			$scope.totalItems = user.count;
			$scope.itemsPerPage = 5;
			$scope.currentPage = 1;
			$scope.getAll = function() {
				user.limit = $scope.itemsPerPage;
				user.skip = (user.limit*$scope.currentPage-$scope.itemsPerPage);
				user.getAll();
				//console.log({skip: contact.skip, limit: contact.limit});
			};
		} else {
			$scope.totalItems = user.count;
			$scope.itemsPerPage = user.count;
			$scope.currentPage = 1;
			$scope.getAll = function() {
				user.limit = $scope.itemsPerPage;
				user.skip = (user.limit*$scope.currentPage-$scope.itemsPerPage);
				user.getAll();
				//console.log({skip: contact.skip, limit: contact.limit});
			};
		}

	};

	$scope.deleteUser = function (myUser) {
		user.deleteUser(myUser);
		user.subtractCount();
		$scope.totalItems = user.count;
		$scope.currentPage = 1;
		user.limit = $scope.itemsPerPage;
		user.skip = (user.limit*$scope.currentPage-$scope.itemsPerPage);
		user.getAll();
		//console.log({currentPage: $scope.currentPage, skip: user.skip, limit: user.limit, count: user.count});
	};

	$scope.createUser = function () {

		if (!$scope.insertUser.pw || $scope.insertUser.pw !== $scope.insertUser.pwConfirm) {
			$scope.error = {
				message: 'Password does not match confirmation'
			};
			return;
		}

		user.createUser($scope.insertUser).error(function (err) {
			$scope.error = err;
		}).success(function () {
			user.addCount();
			$scope.totalItems = user.count;
			$scope.currentPage = 1;
			user.limit = $scope.itemsPerPage;
			user.skip = (user.limit*$scope.currentPage-$scope.itemsPerPage);
			user.getAll();
			//console.log({currentPage: $scope.currentPage, skip: user.skip, limit: user.limit, count: user.count});
		});

		$scope.insertUser = {};
		$scope.showUser = false;
	};

	$scope.setShowUser = function () {
		if ($scope.showUser === false) { $scope.showUser = true; } else { $scope.showUser = false; }
	};

/* Pagination */

	$scope.totalItems = user.count;
	$scope.itemsPerPage = 5;
	$scope.currentPage = 1;
	$scope.getAll = function() {
		user.limit = $scope.itemsPerPage;
		user.skip = (user.limit*$scope.currentPage-$scope.itemsPerPage);
		user.getAll();
		//console.log({currentPage: $scope.currentPage, skip: user.skip, limit: user.limit, count: user.count});
	};
	$scope.getAll2 = function() {
		$scope.currentPage = 1;
		user.limit = $scope.itemsPerPage;
		user.skip = (user.limit*$scope.currentPage-$scope.itemsPerPage);
		user.getAll();
		//console.log({currentPage: $scope.currentPage, skip: user.skip, limit: user.limit, count: user.count});
	};

	$scope.subtractCount = function () {
		user.subtractCount();
		//console.log({currentPage: $scope.currentPage, skip: user.skip, limit: user.limit, count: user.count});
	};
	$scope.itemSelector = [5, 10, 20, 30, 50];
/* Pagination */




}]);