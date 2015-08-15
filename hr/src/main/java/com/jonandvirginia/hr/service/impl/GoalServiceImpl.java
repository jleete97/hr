package com.jonandvirginia.hr.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jonandvirginia.hr.model.Goal;
import com.jonandvirginia.hr.repo.GoalRepository;
import com.jonandvirginia.hr.service.GoalService;

@Service
public class GoalServiceImpl implements GoalService {

	@Autowired
	GoalRepository goalRepository;
	
	@Override
	public List<Goal> list() {
		List<Goal> goals = new ArrayList<>();
		
		Iterable<Goal> data = goalRepository.findAll();
		for (Goal emp : data) {
			goals.add(emp);
		}
		
		return goals;
	}

	@Override
	public Goal get(String id) {
		return goalRepository.findOne(id);
	}
	
	@Override
	public Goal save(Goal goal) {
		Goal saved = goalRepository.save(goal);
		return saved;
	}

	@Override
	public Goal update(Goal goal) {
		Goal updated = goalRepository.save(goal);
		return updated;
	}
	
	@Override
	public void delete(String id) {
		Goal goal = get(id);
		if (goal != null) {
			goalRepository.delete(goal);
		}
	}

	@Override
	public List<Goal> findByTypeAndPeriod(String type, String period) {
		return Collections.EMPTY_LIST;
	}
}
