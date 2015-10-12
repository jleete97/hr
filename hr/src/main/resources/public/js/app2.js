// Module routes, configuration

angular.module("testApp", ["ngRoute"])

	.config(["$routeProvider", function($routeProvider) {
	
		$routeProvider.when("/", {
			templateUrl: "test2.html",
			controller: "TestController"
		})
		.when("/test/:id", {
			templateUrl: "test1.html",
			controller: "TestController"
		})
		.when("/admin", {
			templateUrl: "admin.html"
		})
		.when("/hr", {
			templateUrl: "hr.html"
		})
		.when("/manager", {
			templateUrl: "manager.html"
		})
		.when("/reports", {
			templateUrl: "reports.html"
		})
		.when("/me", {
			templateUrl: "me.html"
		})
;
		$routeProvider.otherwise({
			redirectTo: "/"
		});
	}]);
