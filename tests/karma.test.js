describe('HelloController', function() {

	var $controller, $scope;

	beforeEach(module('app'));

	beforeEach(inject(function(_$controller_, $rootScope) {
		$controller = _$controller_;
		$scope = $rootScope.$new();
	}));

	it('should put "Hello World" on the $scope', function() {
		$controller('HelloController', {
			$scope : $scope
		});
		expect($scope.message).toEqual('Hello World');
	});
});