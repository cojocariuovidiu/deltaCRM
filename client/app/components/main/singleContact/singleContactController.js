app.controller('singleContactCtrl', ['$scope', 'myContact', 'contact', 'login', function ($scope, myContact, contact, login) {
	$scope.myContact = myContact;
	$scope.currentUser = login.currentUser();

	$scope.addNote = function (text) {
		var myNote = {
			text: text,
			username: $scope.currentUser.username
		};

		contact.addNote($scope.myContact._id, myNote);
		$scope.myContact = contact.myContact;
		$scope.status.currentPage = 1;
		$scope.paginateNotes();
		$scope.text = '';
	};

/* Notes Pagination */
	//$scope.currentPage = 1;
	$scope.myLimit = 5;
	$scope.myStart = 0;

	$scope.paginateNotes = function () {
		$scope.myStart = ($scope.status.currentPage-1)*$scope.myLimit;
	};
/* Notes Pagination */

/* Accordian Section */
	$scope.oneAtATime = true;
  	$scope.status = {
  		currentPage: 1,
  		totalItems: $scope.myContact.notes.length,
  		NotesOpen: true,
  		isCustomHeaderOpen: false,
    	isFirstOpen: true,
    	isFirstDisabled: false
  	};
/* Accordian Section */
}]);