package com.jonandvirginia.hr.service.impl;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import com.jonandvirginia.hr.model.HrUser;
import com.jonandvirginia.hr.model.LoginCredentials;
import com.jonandvirginia.hr.service.UserService;

@Service("dummy")
public class DummyUserServiceImpl implements UserService {

	private static final Map<String, String> CREDS = new HashMap<>();
	private static final Set<String> ADMINS = new HashSet<>();
	static {
		CREDS.put("user", "password");
		CREDS.put("admin", "password");
		ADMINS.add("admin");
	}
	
	
	public DummyUserServiceImpl() { }
	
	@Override
	public HrUser authenticate(LoginCredentials login) {
		if (login == null) {
			return null;
		}
		
		String password = CREDS.get(login.getUsername());
		
		if (password == null) {
			return null;
		}
		
		HrUser hrUser = new HrUser(login.getUsername(), login.getPassword());
		hrUser.getAuthorities().add(new SimpleGrantedAuthority("USER"));
		if (ADMINS.contains(login.getUsername())) {
			hrUser.getAuthorities().add(new SimpleGrantedAuthority("ADMIN"));
		}
		
		return hrUser;
	}

}
