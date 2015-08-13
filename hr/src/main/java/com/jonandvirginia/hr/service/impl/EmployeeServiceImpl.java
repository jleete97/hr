package com.jonandvirginia.hr.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.jonandvirginia.hr.model.Employee;
import com.jonandvirginia.hr.repo.EmployeeRepository;
import com.jonandvirginia.hr.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;
	
	@Override
	public List<Employee> list() {
		List<Employee> employees = new ArrayList<>();
		
		Iterable<Employee> data = employeeRepository.findAll();
		for (Employee emp : data) {
			employees.add(emp);
		}
		
		return employees;
	}

	@Override
	public List<Employee> findByNames(String firstname, String lastname) {
		if (StringUtils.isEmpty(firstname)) {
			if (StringUtils.isEmpty(lastname)) {
				return Collections.<Employee>emptyList();
			} else {
				return employeeRepository.findByLastname(lastname);
			}
		} else {
			if (StringUtils.isEmpty(lastname)) {
				return employeeRepository.findByFirstname(firstname);
			} else {
				return employeeRepository.findByFirstnameAndLastname(firstname, lastname);
			}
		}
	}

	@Override
	public Employee getById(String id) {
		return employeeRepository.findOne(id);
	}

}
