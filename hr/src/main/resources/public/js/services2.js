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
					{ id: 1001, name : "Logistics", type: "STAFF", status: "ACTIVE" },
					{ id: 1002, name : "Supply", type: "STAFF", status: "ACTIVE" },
					{ id: 1003, name : "Admin", type: "ADMIN", status: "ACTIVE" },
					{ id: 1004, name : "Operations", type: "STAFF", status: "ACTIVE" },
					{ id: 1005, name : "Human Resouces", type: "ADMIN", status: "ACTIVE" }
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
					{ id: 103, firstname : "Chuck", lastname : "Cheese", type : "STAFF" }
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

	.factory("AdminService", [function() {
			var periods = [
					{ id: 2014, code : "2014", start : "2014-01-01", end : "2014-12-31", name : "CY 2014", status: "INACTIVE" },
					{ id: 2015, code : "2015", start : "2015-01-01", end : "2015-12-31", name : "CY 2015", status: "ACTIVE" },
					{ id: 2016, code : "2016", start : "2016-01-01", end : "2016-12-31", name : "CY 2016", status: "ACTIVE" },
					{ id: 2017, code : "2017", start : "2017-01-01", end : "2017-12-31", name : "CY 2017", status: "ACTIVE" }
				];
			var employeeTypes = [
					{ id: 51, code : "HR", name : "Human Resources" },
					{ id: 52, code : "MGR", name : "Manager" },
					{ id: 53, code : "HR", name : "Staff" }
				];
			return {
				getPeriods: function() {
					return periods;
				},
				getPeriod: function(id) {
					for (period in periods) {
						if (period.id == id) {
							return period;
						}
					}
					return null;
				},
				getEmployeeTypes: function() {
					return employeeTypes;
				},
				getEmployeeType: function(id) {
					for (type in employeeTypes) {
						if (type.id == id) {
							return type;
						}
					}
					return null;
				}
			};
	}])
;
