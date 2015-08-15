package com.jonandvirginia.hr.service;

import com.jonandvirginia.hr.model.HrUser;
import com.jonandvirginia.hr.model.LoginCredentials;

/**
 * Simple service for authenticating users and related.
 */
public interface UserService {

	/**
	 * Return an authenticated user if the credentials are correct, or {@code null}
	 * if they are not.
	 * 
	 * @param login The attempted {@link LoginCredentials}.
	 * 
	 * @return An {@link HrUser} if found, or {@code null} if not. The user may
	 * be locked, disabled, etc., but will be the correctly authenticated user.
	 */
	public HrUser authenticate(LoginCredentials login);
}
