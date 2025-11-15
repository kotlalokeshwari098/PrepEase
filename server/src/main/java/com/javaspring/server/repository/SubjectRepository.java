package com.javaspring.server.repository;

import com.javaspring.server.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SubjectRepository extends JpaRepository<Subject,Long> {

    Subject findBySubjectName(String subjectName);
}
