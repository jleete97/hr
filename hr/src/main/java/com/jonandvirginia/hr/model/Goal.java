package com.jonandvirginia.hr.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Goal {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private String id;
	private String name;
	private String type;
	private String description;
	private String status;
	
	
	public Goal() { }
	
    public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
