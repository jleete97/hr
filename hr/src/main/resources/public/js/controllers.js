// Controllers

angular.module('hrApp')
	.controller('EmployeesController',
			["UserService", "EmployeeService", "GroupService", "ReviewService",
			function(UserService, EmployeeService, GroupService, ReviewService) {
		var self = this;
		self.employees = [
		   { type : "RF", title : "Dr.", firstname : "Alice", lastname: "Acropolis" },
           { type : "RF", title : "Mr.", firstname : "Bob", lastname: "Berkeley" },
           { type : "RF", title : "Mr.", firstname : "Chris", lastname: "Carlson" }            
		];
	
		self.getEmployees = function() {
			return employees;
//			return $http.get("/employee/").then(
//				function(response) {
//					self.employees = response.data;
//				}, function(errResponse) {
//					console.error("Error loading employee list");
//				});
		};
		
		self.addEmployee = function() {
//			window.open("employee.html");
		}
		
//		self.getEmployees();
	}])
	
	.controller('MainCtrl',
			["UserService", "EmployeeService", "GroupService", "ReviewService",
			function(UserService, EmployeeService, GroupService, ReviewService) {
		var self = this;
		self.userService = UserService;
		self.employeeService = EmployeeService;
		self.groupService = GroupService;
		self.reviewService = ReviewService;
	}])
	
	.controller('EmployeeController',
			["UserService", "EmployeeService", "GroupService", "ReviewService",
			function(UserService, EmployeeService, GroupService, ReviewService) {
		var self = this;
		self.edit = false;
		self.employee = {
		    firstname: "Diana",
		    lastname: "Prince",
		    middlename: "Amazon",
		    title: "Dr.",
		    type: "PM"
		};

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

	.controller('GroupsCtrl',
			["UserService", "EmployeeService", "GroupService", "ReviewService",
			function(UserService, EmployeeService, GroupService, ReviewService) {
		var self = this;
	}])

	.controller('ReviewCtrl',
			["UserService", "EmployeeService", "GroupService", "ReviewService",
			function(UserService, EmployeeService, GroupService, ReviewService) {
		var self = this;
	}])

	.controller('EvalBuildController',
			["UserService", "EmployeeService", "GroupService", "ReviewService",
			function(UserService, EmployeeService, GroupService, ReviewService) {
		var self = this;
		var ug = [
		    { "description" : "Brew the best milkshake in the group" },
		    { "description" : "Win the biggest teddy bear at the company fair" },
		    { "description" : "Own the widest belt in the company" }
		];
		var fg = [
		    { "name" : "Admin", "description" : "Use sharp pencils." },
		    { "name" : "Civics", "description" : "Be polite on elevators." },
		    { "name" : "Security", "description" : "Be safe at all times." }
		];
		
		self.userGoals = function() { return self.ug; }
		self.fixedGoals = function() { return self.fg; }
		self.submit = function() { };
		self.done = function() { };
		self.cancel = function() { };
	}])

	.controller('UserCtrl',
			["UserService", "EmployeeService", "GroupService", "ReviewService",
			function(UserService, EmployeeService, GroupService, ReviewService) {
		var self = this;
	}]);
