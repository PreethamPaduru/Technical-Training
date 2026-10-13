package com.anurag.aiml;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<Student, Long>{
	Student findByEmailAndPassword(String email, String password);

}
