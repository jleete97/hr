// Module routes, configuration

angular.module("hrApp", ["ngRoute"])

	.config(["$routeProvider", function($routeProvider) {
	
		$routeProvider.when("/", {
			templateUrl: "employees.html",
			controller: "EmployeesController"
		})
		.when("/employees", {
			templateUrl: "employees.html",
			controller: "EmployeeController"
		})
		.when("/employee/:id", {
			templateUrl: "employee.html",
			controller: "EmployeeCtrl"
				// authorization stuff here
		})
		.when("/periods", {
			templateUrl: "periods.html",
			controller: "PeriodsCtrl"
		})
		.when("/period/:id", {
			templateUrl: "period.html",
			controller: "PeriodCtrl"
		})
		.when("/goals", {
			templateUrl: "goals.html",
			controller: "GoalsCtrl"
		})
		.when("/goal/:id", {
			templateUrl: "goal.html",
			controller: "GoalCtrl"
		})
		.when("/groups", {
			templateUrl: "groups.html",
			controller: "GroupsCtrl"
		})
		.when("/goal/:id", {
			templateUrl: "group.html",
			controller: "GroupCtrl"
		})
		.when("/reviews", {
			templateUrl: "reviews.html",
			controller: "ReviewsCtrl"
		})
		.when("/review", {
			templateUrl: "review.html",
			controller: "ReviewCtrl"
		})
		.when("/login", {
			templateUrl: "login.html"
		});
		
		$routeProvider.otherwise({
			redirectTo: "/"
		});
	}]);

// routing options:
// template, templateUrl, controller, controllerAs, resolve
