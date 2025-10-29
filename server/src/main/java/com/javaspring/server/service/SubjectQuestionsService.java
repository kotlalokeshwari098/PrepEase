package com.javaspring.server.service;


import com.javaspring.server.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubjectQuestionsService {

    @Autowired
    SubjectRepository subjectRepository;


}
