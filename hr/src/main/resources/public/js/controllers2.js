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
	
	.controller('GroupController', ["GroupService", "$routeParams",
			function(GroupService, $routeParams) {
		var self = this;
		self.group = function() {
			return GroupService.getGroup($routeParams.id);
		};
		self.groups = function() {
			return GroupService.getGroups();
		};
		self.addGroup = function() { }
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
		self.employee = function() {
			return EmployeeService.getEmployee($routeParams.id);
		};
		self.getEmployees = function() {
			return EmployeeService.getEmployees();
		};
	}])
	
	.controller('AdminController', ["AdminService", "$routeParams",
			function(AdminService, $routeParams) {
		var self = this;
		self.period = function() {
			return AdminService.getPeriod($routeParams.id);
		};
		self.periods = function() {
			return AdminService.getPeriods();
		};
		self.addPeriod = function() { };
		self.employeeType = function() {
			return AdminService.getEmployeeType($routeParams.id);
		};
		self.employeeTypes = function() {
			return AdminService.getEmployeeTypes();
		};
		self.addEmployeeType = function() { };
	}])
;
