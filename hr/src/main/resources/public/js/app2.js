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
			controller: "GroupController as ctrl"
		})
		.when("/group/:id", {
			templateUrl: "group.html",
			controller: "GroupController as ctrl"
		})
		.when("/employee/:id", {
			templateUrl: "employee.html",
			controller: "EmployeeController as ctrl"
		})
		.when("/reports", {
			templateUrl: "reports.html",
			controller: "ReportsController"
		})
		.when("/me", {
			templateUrl: "employee.html",
			controller: "EmployeeController as ctrl"
		})
		.when("/periods", {
			templateUrl: "periods.html",
			controller: "AdminController as ctrl"
		})
		.when("/employee_types", {
			templateUrl: "employee_types.html",
			controller: "AdminController as ctrl"
		})
		.when("/employee_type/:id", {
			templateUrl: "employee_type.html",
			controller: "AdminController as ctrl"
		})
;
		$routeProvider.otherwise({
			redirectTo: "/"
		});
	}]);
