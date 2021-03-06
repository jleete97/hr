package com.jonandvirginia.hr.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.jonandvirginia.hr.model.Employee;

/**
 * JPA repository for {@link Employee}s.
 */
public interface EmployeeRepository extends CrudRepository<Employee, String> {

    List<Employee> findByLastname(String lastname);
    
    List<Employee> findByFirstname(String firstname);
    
    List<Employee> findByFirstnameAndLastname(String firstname, String lastname);
}