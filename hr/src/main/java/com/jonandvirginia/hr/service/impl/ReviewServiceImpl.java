package com.jonandvirginia.hr.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.jonandvirginia.hr.model.Review;
import com.jonandvirginia.hr.repo.ReviewRepository;
import com.jonandvirginia.hr.service.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	ReviewRepository reviewRepository;
	
	@Override
	public List<Review> list() {
		List<Review> reviews = new ArrayList<>();
		
		Iterable<Review> data = reviewRepository.findAll();
		for (Review emp : data) {
			reviews.add(emp);
		}
		
		return reviews;
	}

	@Override
	public Review get(String id) {
		return reviewRepository.findOne(id);
	}
	
	@Override
	public Review save(Review review) {
		Review saved = reviewRepository.save(review);
		return saved;
	}

	@Override
	public Review update(Review review) {
		Review updated = reviewRepository.save(review);
		return updated;
	}
	
	@Override
	public void delete(String id) {
		Review review = get(id);
		if (review != null) {
			reviewRepository.delete(review);
		}
	}
}
