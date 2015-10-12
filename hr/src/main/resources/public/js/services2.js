// Services

angular.module("testApp")
	.factory("TestService", [function() {
			var tests = [
				{ id: 1, name : "one", value : "1", desc : "Just a Test", status : "pass" },
				{ id: 2, name : "two", value : "2", desc : "walked away", status : "fail" },
				{ id: 3, name : "three", value : "3", desc : "Purple Rain", status : "incomplete" }
				];
			return {
				count: function() {
					return tests.length;
				},
				getTests: function() {
					return tests;
				},
				getTest: function(id) {
					return tests[id - 1];
				}
			};
	}])

	.factory("GroupService", [function() {
			var groups = [
					{ id: 1001, name : "Logistics" },
					{ id: 1002, name : "Supply" },
					{ id: 1003, name : "Admin" },
					{ id: 1004, name : "Operations" },
					{ id: 1005, name : "Human Resouces" }
				];
			return {
				count: function() {
					return groups.length;
				},
				getGroups: function() {
					return groups;
				},
				getGroup: function(id) {
					for (group in groups) {
						if (group.id == id) {
							return group;
						}
					}
					return null;
				}
			};
	}])

	.factory("EmployeeService", [function() {
			var employees = [
				{ id: 101, firstname : "Alice", lastname : "Adams", type : "MGR" },
				{ id: 102, firstname : "Bob", lastname : "Bricker", type : "STAFF" },
				{ id: 103, firstname : "Chuck", lastname : "Cheese", type : "STAFF" },
				];
			return {
				count: function() {
					return employees.length;
				},
				getEmployees: function() {
					return employees;
				},
				getEmployee: function(id) {
					for (emp in employees) {
						if (emp.id == id) {
							return emp;
						}
					}
					return null;
				}
			};
	}])
;
