package com.jonandvirginia.hr.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.jonandvirginia.hr.model.Goal;

public interface GoalRepository extends CrudRepository<Goal, String> {

    List<Goal> findByEmployeeAndPeriod(String employee, String period);
}