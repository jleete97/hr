package com.jonandvirginia.hr.service;

import java.util.List;

import com.jonandvirginia.hr.model.Goal;

/**
 * Service supporting basic REST operations on {@link Goal}s.
 */
public interface GoalService {

	List<Goal> list();
	
	Goal get(String id);

	Goal save(Goal goal);

	Goal update(Goal goal);
	
	void delete(String id);

	List<Goal> findByTypeAndPeriod(String type, String period);
}
