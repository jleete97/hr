package com.jonandvirginia.hr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
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

    @RequestMapping(value="/", method=RequestMethod.GET)
    public List<Employee> list() {
    	List<Employee> employees = employeeService.list();
    	return employees;
    }
	
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public Employee getEmployee(@PathVariable String id) {
    	Employee employee = employeeService.getById(id);
    	return employee;
    }

    @RequestMapping(value="find", method=RequestMethod.GET)
    public List<Employee> find(@PathVariable String firstname, @PathVariable String lastname) {
    	List<Employee> employees = employeeService.findByNames(firstname, lastname);
    	return employees;
    }
}