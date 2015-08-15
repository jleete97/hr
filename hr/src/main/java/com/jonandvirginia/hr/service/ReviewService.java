package com.jonandvirginia.hr.service;

import java.util.List;

import com.jonandvirginia.hr.model.Review;

public interface ReviewService {

	List<Review> list();
	
	Review get(String id);

	Review save(Review review);

	Review update(Review review);
	
	void delete(String id);
}
