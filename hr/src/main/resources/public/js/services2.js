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
	}]);
