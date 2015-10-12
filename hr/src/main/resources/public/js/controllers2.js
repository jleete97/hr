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
	
	.controller('GroupsController', ["TestService",
			function(TestService) {
		var self = this;
		self.getGroups = function() {
			return TestService.getGroups();
		};
	}])
	
	.controller('GroupsController', ["TestService", "$routeParams",
			function(TestService, $routeParams) {
		var self = this;
		self.getTest = function() {
			return TestService.getTest($routeParams.id);
		};
		self.getAllTests = function() {
			return TestService.getTests();
		};
	}])
;
