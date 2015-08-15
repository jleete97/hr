package com.jonandvirginia.hr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jonandvirginia.hr.model.Goal;
import com.jonandvirginia.hr.service.GoalService;

@RestController
@RequestMapping(value="/goal")
public class GoalController {

	@Autowired
	private GoalService goalService;

	/**
	 * List all {@link Goal}s visible to current user.
	 * 
	 * @return A {@code List} of {@link Goal}s.
	 */
    @RequestMapping(value="/", method=RequestMethod.GET)
    public List<Goal> list() {
    	List<Goal> goals = goalService.list();
    	return goals;
    }

    /**
     * Get a particular {@link Goal}.
     * 
     * @param id The ID of the {@code Goal} to fetch.
     * @return The {@code Goal}, or {@code null} if no such {@code Goal}.
     */
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public Goal get(@PathVariable String id) {
    	Goal goal = goalService.get(id);
    	return goal;
    }
	
    /**
     * Save a new {@link Goal}.
     * @param goal The {@link Goal} to save.
     * @return The saved {@link Goal}.
     */
    @RequestMapping(value="/", method=RequestMethod.POST)
    public Goal save(@RequestBody Goal goal) {
    	Goal saved = goalService.save(goal);
    	return saved;
    }

    /**
     * Update an existing {@link Goal}, which already has an ID.
     * 
     * @param goal The {@code Goal} to update.
     * @return The saved/updated {@code Goal}.
     */
    @RequestMapping(value="/", method=RequestMethod.PUT)
    public Goal update(@RequestBody Goal goal) {
    	Goal updated = goalService.update(goal);
    	return updated;
    }

    /**
     * Delete an existing {@link Goal}, specified by ID.
     * 
     * @param id The ID of the {@code Goal} to delete.
     */
    @RequestMapping(value="/", method=RequestMethod.DELETE)
    public void delete(@PathVariable String id) {
    	goalService.delete(id);
    }
}
