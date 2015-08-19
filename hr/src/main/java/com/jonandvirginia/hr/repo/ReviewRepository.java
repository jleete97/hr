package com.jonandvirginia.hr.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.jonandvirginia.hr.model.Review;

/**
 * JPA repository for {@link Review}s.
 */
public interface ReviewRepository extends CrudRepository<Review, String> {

//    List<Review> findByLastname(String lastname);
//    
//    List<Review> findByFirstname(String firstname);
//    
//    List<Review> findByFirstnameAndLastname(String firstname, String lastname);
}