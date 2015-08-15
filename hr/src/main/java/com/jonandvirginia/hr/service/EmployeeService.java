package com.jonandvirginia.hr.service;

import java.util.List;

import com.jonandvirginia.hr.model.Employee;

/**
 * Service supporting basic REST operations on {@link Employee}s,
 * plus search.
 */
public interface EmployeeService {

	List<Employee> list();
	
	Employee get(String id);

	Employee save(Employee employee);

	Employee update(Employee employee);
	
	void delete(String id);
	
	List<Employee> findByNames(String firstname, String lastname);
}
