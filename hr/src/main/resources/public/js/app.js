// Module routes, configuration

angular.module("hrApp", ["ngRoute"])
	.config("$routeProvider", function($routeProvider) {
		
		$routeProvider.when("/", {
			templateUrl: "employees.html",
			controller: "EmployeesCtrl"
		})
		.when("/employees", {
			templateUrl: "employee.html",
			controller: "EmployeeCtrl"
		})
		.when("/login", {
			templateUrl: "login.html"
		})
		.when("/employee/:id", {
			templateUrl: "employee.html",
			controller: "EmployeeCtrl"
				// authorization stuff here
		});
		
		$routeProvider.otherwise({
			redirectTo: "/"
		});
	});

// routing options:
// template, templateUrl, controller, controllerAs, resolve
