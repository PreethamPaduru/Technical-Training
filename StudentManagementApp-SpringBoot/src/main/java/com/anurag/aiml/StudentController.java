package com.anurag.aiml;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin("*")
@RequestMapping("/student")
public class StudentController {
	
	@Autowired
	JwtService jwtservice;
	@Autowired
	 StudentService service;


	
	@PostMapping("/register")
	public Student register(  @RequestBody  Student newStudent) {
		return service.register(newStudent);
	}
	@GetMapping("/users")
	public Page<Student> getUsers(@RequestParam int page, @RequestParam int size) {
		return service.getUsers(page,size);
	}
	@GetMapping("/usersa")
	public List<Student> getUsersa() {
		return service.getUsersa();
	}
	
	
	@DeleteMapping("/delete/{id}")
	public void deleteBYID(@PathVariable Long id) {
		service.deleteByID(id);
	}
	
	@GetMapping("/get/{id}")
	public Optional<Student> getBYId(@PathVariable Long id) {
		return service.getBYId(id);
	}
	@PutMapping("/update/{id}")
	public Student update(@PathVariable Long id,@RequestBody Student newStudent) {
		return service.updateStu(id, newStudent);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Student loginDetails) {
		service.Login(loginDetails);
		String token = jwtservice.generateToken(loginDetails.getEmail());
		return ResponseEntity.ok(token);
}
	@GetMapping("/verify")
	public ResponseEntity<?> validateToken(@RequestHeader("Authorization") String token) {
		try {
			jwtservice.validateToken(token.replace("Bearer",""));
			return ResponseEntity.ok("Token is valid....");
		} catch (Exception e) {
			return ResponseEntity.badRequest().body("Token is Expired...");
		}
	}
	
}
