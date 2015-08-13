angular.module('employeeApp', [])
	.controller('EmployeeCtrl', [function() {
		var self = this;
		var employees = [
		     			{
		    				id: 1,
		    				firstname: "Alice",
		    				lastname: "Smith",
		    				title: "Dr.",
		    				type: "RF"
		    			},
		    			{
		    				id: 2,
		    				firstname: "Bob",
		    				lastname: "Washington",
		    				title: "Mr.",
		    				type: "RF"
		    			},
		    			{
		    				id: 3,
		    				firstname: "Carol",
		    				lastname: "Mendoza",
		    				title: "Dr.",
		    				type: "PM"
		    			}
		  ];
		self.setEdit = function(allowEdit) {
			alert("Starting");
			if (allowEdit) {
				for (elt in $("input")) {
					delete elt["disabled"];
				}
			} else {
				$("input").disabled = "true";
			}
			alert("Done");
		}
}]);