// Module routes, configuration

angular.module("hrApp", ["ngRoute"])

	.config(["$routeProvider", function($routeProvider) {
	
		$routeProvider.when("/", {
			templateUrl: "tests.html",
			controller: "TestsController"
		})
		.when("/test/:id", {
			templateUrl: "test.html",
			controller: "TestController"
		});
		
		$routeProvider.otherwise({
			redirectTo: "/"
		});
	}]);

// routing options:
// template, templateUrl, controller, controllerAs, resolve
