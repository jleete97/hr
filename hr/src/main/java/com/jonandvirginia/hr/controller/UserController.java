package com.jonandvirginia.hr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jonandvirginia.hr.model.HrUser;
import com.jonandvirginia.hr.model.LoginCredentials;
import com.jonandvirginia.hr.service.UserService;

/**
 * Endpoint for user authentication.
 */
@RestController
@RequestMapping(value="/user")
public class UserController {

	@Autowired
	private UserService userService;

    @RequestMapping(value="/authenticate", method=RequestMethod.POST)
    public HrUser authenticate(@RequestBody LoginCredentials credentials) {
    	HrUser user = userService.authenticate(credentials);
    	return (user != null)
    			&& user.isAccountNonExpired()
    			&& user.isAccountNonLocked()
    			&& user.isCredentialsNonExpired()
    			&& user.isEnabled()
    			? user
    			: null;
    }
}
