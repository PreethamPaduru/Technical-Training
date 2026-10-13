package com.anurag.aiml;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    @Autowired
	StudentRepo repo;
    
    public Student register(Student newStudent) {
		return repo.save(newStudent);
	}
    
    
    public Page<Student> getUsers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return repo.findAll(pageable);
    }
    public List<Student> getUsersa() {
        
        return repo.findAll();
    }
    

    public void deleteByID(Long id) {
		repo.deleteById(id);
	}
    
    public Optional<Student> getBYId(Long id) {
    	return repo.findById(id);
    }
    
    public Student updateStu(Long id, Student NewStu) {
    	Student existingStu=repo.findById(id)
    	.orElseThrow(()->new RuntimeException("User Not Found...."));
    	existingStu.setEmail(NewStu.getEmail());
    	existingStu.setName(NewStu.getName());
    	
    	return repo.save(existingStu);
    }
    public ResponseEntity<?> Login(Student student) {
   	 Student  ExistingUser= repo.findByEmailAndPassword
   			   (student.getEmail(), student.getPassword());
   	 
   	 if(ExistingUser==null) {
   		 return  ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("Email Or Password is Wrong....");
   	 }
   	 
   	 return ResponseEntity.ok("User Login Success...");
      }
      
    
    
}