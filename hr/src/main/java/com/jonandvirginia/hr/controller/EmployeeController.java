package com.jonandvirginia.hr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jonandvirginia.hr.model.Employee;
import com.jonandvirginia.hr.service.EmployeeService;

@RestController
@RequestMapping(value="/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	/**
	 * List all {@link Employee}s visible to current user.
	 * 
	 * @return A {@code List} of {@link Employee}s.
	 */
    @RequestMapping(value="/", method=RequestMethod.GET)
    public List<Employee> list() {
    	List<Employee> employees = employeeService.list();
    	return employees;
    }

    /**
     * Get a particular {@link Employee}.
     * 
     * @param id The ID of the {@code Employee} to fetch.
     * @return The {@code Employee}, or {@code null} if no such {@code Employee}.
     */
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public Employee get(@PathVariable String id) {
    	Employee employee = employeeService.get(id);
    	return employee;
    }
	
    /**
     * Save a new {@link Employee}.
     * @param employee The {@link Employee} to save.
     * @return The saved {@link Employee}.
     */
    @RequestMapping(value="/", method=RequestMethod.POST)
    public Employee save(@RequestBody Employee employee) {
    	Employee saved = employeeService.save(employee);
    	return saved;
    }

    /**
     * Update an existing {@link Employee}, which already has an ID.
     * 
     * @param employee The {@code Employee} to update.
     * @return The saved/updated {@code Employee}.
     */
    @RequestMapping(value="/", method=RequestMethod.PUT)
    public Employee update(@RequestBody Employee employee) {
    	Employee updated = employeeService.update(employee);
    	return updated;
    }

    /**
     * Delete an existing {@link Employee}, specified by ID.
     * 
     * @param id The ID of the {@code Employee} to delete.
     */
    @RequestMapping(value="/", method=RequestMethod.DELETE)
    public void delete(@PathVariable String id) {
    	employeeService.delete(id);
    }

    /**
     * Find a {@link Employee} with the specified parameters.
     * 
     * @param firstname The first name to search on ({@code null} is OK).
     * @param lastname The last name to search on ({@code null} is OK).
     * @return
     */
    @RequestMapping(value="find", method=RequestMethod.GET)
    public List<Employee> find(@PathVariable String firstname, @PathVariable String lastname) {
    	List<Employee> employees = employeeService.findByNames(firstname, lastname);
    	return employees;
    }
}
