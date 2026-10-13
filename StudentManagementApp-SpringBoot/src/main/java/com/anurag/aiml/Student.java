package com.anurag.aiml;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "AIML")
public class Student {
	@Id
	@SequenceGenerator(
		    name = "aiml_seq",
		    sequenceName = "AIML_SEQ",
		    allocationSize = 1
		)
		@GeneratedValue(
		    strategy = GenerationType.SEQUENCE,
		    generator = "aiml_seq"
		)
    public  Long id;

	public String name;
	public String email;
	public String password;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
