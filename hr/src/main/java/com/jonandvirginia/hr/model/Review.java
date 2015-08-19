package com.jonandvirginia.hr.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Review {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private String id;
	private String periodId;
	private String status;
//	private List<ReviewGoal> goals;

	
	public Review() { }
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getPeriodId() {
		return periodId;
	}
	public void setPeriodId(String periodId) {
		this.periodId = periodId;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
//	public List<ReviewGoal> getGoals() {
//		return goals;
//	}
//	public void setGoals(List<ReviewGoal> goals) {
//		this.goals = goals;
//	}
}
