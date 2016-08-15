app.controller('singleContactCtrl', ['$scope', 'myContact', function ($scope, myContact) {
	$scope.myContact = myContact;

	$scope.oneAtATime = true;
  	$scope.status = {
  		NotesOpen: true,
  		isCustomHeaderOpen: false,
    	isFirstOpen: true,
    	isFirstDisabled: false
  	};
}]);