package com.javaspring.server.repository;

import com.javaspring.server.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question,Integer>{

}
