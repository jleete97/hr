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
	public Employee get(String id) {
		return employeeRepository.findOne(id);
	}
	
	@Override
	public Employee save(Employee employee) {
		Employee saved = employeeRepository.save(employee);
		return saved;
	}

	@Override
	public Employee update(Employee employee) {
		Employee updated = employeeRepository.save(employee);
		return updated;
	}
	
	@Override
	public void delete(String id) {
		Employee employee = get(id);
		if (employee != null) {
			employeeRepository.delete(employee);
		}
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
}
