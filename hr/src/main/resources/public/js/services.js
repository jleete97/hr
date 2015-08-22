// Services

angular.module("hrApp")
	.factory("UserService", ["$http", function($http) {
		return {
			isLoggedIn: false,

			session: function() {
				return $http.get('/api/session')
				.then(function(response) {
					service.isLoggedIn = true;
					return response;
				});
			},

			login: function(user) {
				return $http.post('/api/login', user)
				.then(function(response) {
					service.isLoggedIn = true;
					return response;
				});
			}
		};
	}])

	.factory("EmployeeService", ["$http", function($http) {
		return {
			
		};
	}])

	.factory("GroupService", ["$http", function($http) {
		return {
			
		};
	}])

	.factory("ReviewService", ["$http", function($http) {
		return {
			
		};
	}]);
