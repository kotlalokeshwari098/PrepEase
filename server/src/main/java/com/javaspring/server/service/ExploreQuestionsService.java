package com.javaspring.server.service;

import com.javaspring.server.dtos.questionpapersdtos.QuestionPapersResponse;
import com.javaspring.server.mapper.QuestionsMapper;
import com.javaspring.server.model.Question;
import com.javaspring.server.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ExploreQuestionsService {

    private final QuestionRepository questionRepository;
    private final QuestionsMapper questionsMapper;

    public ExploreQuestionsService(QuestionRepository questionRepository, QuestionsMapper questionsMapper) {
        this.questionRepository = questionRepository;
        this.questionsMapper = questionsMapper;
    }

    public void uploadQuestionPaper(Question questionPaper) {
        System.out.println("uploadQuestionPaper " + questionPaper);
         questionRepository.save(questionPaper);
    }

    public List<QuestionPapersResponse> getAllQuestionsPapers(){
        return questionsMapper.convertToQuestionPapersResponse(questionRepository.findAll());
    }
}
