package com.jonandvirginia.hr.service;

import java.util.List;

import com.jonandvirginia.hr.model.Employee;

public interface EmployeeService {

	List<Employee> list();
	
	List<Employee> findByNames(String firstname, String lastname);
	
	Employee getById(String id);
}
