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
		.when("/groups", {
			templateUrl: "groups.html",
			controller: "GroupsController"
		})
		.when("/group/:id", {
			templateUrl: "group.html",
			controller: "GroupsController"
		})
		.when("/employee/:id", {
			templateUrl: "employee.html",
			controller: "EmployeeController"
		})
		.when("/reports", {
			templateUrl: "reports.html",
			controller: "ReportsController"
		})
		.when("/me", {
			templateUrl: "employee.html",
			controller: "EmployeeController"
		})
;
		$routeProvider.otherwise({
			redirectTo: "/"
		});
	}]);
