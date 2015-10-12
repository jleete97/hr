// Controllers

angular.module('testApp')
		.controller('MainCtrl', ["TestService",
			function(TestService) {
		var self = this;
		self.getCount = function() {
			return TestService.count();
		}
		self.getAllTests = function() {
			return TestService.getTests();
		}
	}])
	
	.controller('TestController', ["TestService", "$routeParams",
			function(TestService, $routeParams) {
		var self = this;
		self.getTest = function() {
			return TestService.getTest($routeParams.id);
		};
		self.getAllTests = function() {
			return TestService.getTests();
		};
	}])
	
	.controller('GroupsController', ["GroupService",
			function(TestService) {
		var self = this;
		self.getGroups = function() {
			return TestService.getGroups();
		};
	}])
	
	.controller('GroupController', ["GroupService", "$routeParams",
			function(GroupService, $routeParams) {
		var self = this;
		self.getGroup = function() {
			return GroupService.getGroup($routeParams.id);
		};
		self.getGroups = function() {
			return GroupService.getGroups();
		};
	}])
	
	.controller('EmployeesController', ["EmployeeService",
			function(EmployeeService) {
		var self = this;
		self.getEmployees = function() {
			return EmployeeService.getEmployees();
		};
	}])
	
	.controller('EmployeeController', ["EmployeeService", "$routeParams",
			function(EmployeeService, $routeParams) {
		var self = this;
		self.getEmployee = function() {
			return EmployeeService.getEmployee($routeParams.id);
		};
		self.getEmployees = function() {
			return EmployeeService.getEmployees();
		};
	}])
;
