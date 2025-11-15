package com.javaspring.server.service;

import com.javaspring.server.model.Question;
import com.javaspring.server.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ExploreQuestionsService {

    private final QuestionRepository questionRepository;

    public ExploreQuestionsService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public String uploadQuestionPaper(Question questionPaper) {
        System.out.println("uploadQuestionPaper " + questionPaper);
         questionRepository.save(questionPaper);
         return "got the data";
    }
}
