package com.jonandvirginia.hr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jonandvirginia.hr.model.Review;
import com.jonandvirginia.hr.service.ReviewService;

@RestController
@RequestMapping(value="/review")
public class ReviewController {

	@Autowired
	private ReviewService reviewService;

	/**
	 * List all {@link Review}s visible to current user.
	 * 
	 * @return A {@code List} of {@link Review}s.
	 */
    @RequestMapping(value="/", method=RequestMethod.GET)
    public List<Review> list() {
    	List<Review> reviews = reviewService.list();
    	return reviews;
    }

    /**
     * Get a particular {@link Review}.
     * 
     * @param id The ID of the {@code Review} to fetch.
     * @return The {@code Review}, or {@code null} if no such {@code Review}.
     */
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    public Review get(@PathVariable String id) {
    	Review review = reviewService.get(id);
    	return review;
    }
	
    /**
     * Save a new {@link Review}.
     * @param review The {@link Review} to save.
     * @return The saved {@link Review}.
     */
    @RequestMapping(value="/", method=RequestMethod.POST)
    public Review save(@RequestBody Review review) {
    	Review saved = reviewService.save(review);
    	return saved;
    }

    /**
     * Update an existing {@link Review}, which already has an ID.
     * 
     * @param review The {@code Review} to update.
     * @return The saved/updated {@code Review}.
     */
    @RequestMapping(value="/", method=RequestMethod.PUT)
    public Review update(@RequestBody Review review) {
    	Review updated = reviewService.update(review);
    	return updated;
    }

    /**
     * Delete an existing {@link Review}, specified by ID.
     * 
     * @param id The ID of the {@code Review} to delete.
     */
    @RequestMapping(value="/", method=RequestMethod.DELETE)
    public void delete(@PathVariable String id) {
    	reviewService.delete(id);
    }
}
