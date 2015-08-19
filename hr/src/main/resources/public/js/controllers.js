// Controllers

angular.module('hrApp')
	.controller('EmployeesCtrl',
			["UserService", "EmployeeService", "GroupService", "ReviewService",
			function(UserService, EmployeeService, GroupService, ReviewService) {
		var self = this;
		self.employees = [];
	
		self.getEmployees = function() {
			return $http.get("/employee/").then(
				function(response) {
					self.employees = response.data;
				}, function(errResponse) {
					console.error("Error loading employee list");
				});
		};
		
		self.addEmployee = function() {
			window.open("employee.html");
		}
		
		self.getEmployees();
	}])
	
	.controller('EmployeeCtrl',
			["UserService", "EmployeeService", "GroupService", "ReviewService",
			function(UserService, EmployeeService, GroupService, ReviewService) {
		var self = this;
		self.edit = false;
		self.employee = { };

		self.setEdit = function(allowEdit) {
			self.edit = allowEdit;
		};
		self.submit = function() {
			
		};
		self.reset = function() {
			
		};
		self.readonly = function() {
			return !self.edit;
		}
		
		var employeeId = $location.search("id");
		if (employeeId) {
			self.employee = $http.get("/employee/" + employeeId);
		}
	}])
	
	.controller('GroupCtrl',
			["UserService", "EmployeeService", "GroupService", "ReviewService",
			function(UserService, EmployeeService, GroupService, ReviewService) {
		var self = this;
	}])

	.controller('ReviewCtrl',
			["UserService", "EmployeeService", "GroupService", "ReviewService",
			function(UserService, EmployeeService, GroupService, ReviewService) {
		var self = this;
	}])

	.controller('UserCtrl',
			["UserService", "EmployeeService", "GroupService", "ReviewService",
			function(UserService, EmployeeService, GroupService, ReviewService) {
		var self = this;
	}]);
