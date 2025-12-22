package com.javaspring.server.controller;


import com.javaspring.server.dtos.questionpapersdtos.QuestionPapersResponse;
import com.javaspring.server.model.Question;
import com.javaspring.server.model.Subject;
import com.javaspring.server.repository.SubjectRepository;
import com.javaspring.server.service.CloudinaryService;
import com.javaspring.server.service.ExploreQuestionsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class ExploreQuestionsController {

    private final CloudinaryService cloudinaryService;

    private final ExploreQuestionsService exploreQuestionsService;

    private final SubjectRepository subjectRepository;

    public ExploreQuestionsController(CloudinaryService cloudinaryService, ExploreQuestionsService exploreQuestionsService, SubjectRepository subjectRepository) {
        this.cloudinaryService = cloudinaryService;
        this.exploreQuestionsService = exploreQuestionsService;
        this.subjectRepository = subjectRepository;
    }

    @GetMapping("/papers")
    public ResponseEntity<List<QuestionPapersResponse>> getQuestion(){
        List<QuestionPapersResponse> response=exploreQuestionsService.getAllQuestionsPapers();
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/uploadQuestionPaper")
    public ResponseEntity<String> uploadQuestionPaper(
            @RequestParam("subject") String subjectName,
            @RequestParam("year") int year,
            @RequestParam("branch") String branch,
            @RequestParam("university") String university,
            @RequestParam("file") MultipartFile file) {
        System.out.println("uploadQuestionPaper"+file.getOriginalFilename());
        try {
             String fileUrl=cloudinaryService.uploadFile(file);
             subjectName=subjectName.trim();
             Subject subject=subjectRepository.findBySubjectName(subjectName);

             if(subject==null){
                 return ResponseEntity.badRequest().body("Subject not found");
             }
             Question question=new Question();
             question.setUrl(fileUrl);
             question.setYear(year);
             question.setSubject(subject);
             question.setAffliated(university);
             question.setBranch(branch);
             question.setCreated_at(new Date());
             question.setUpdated_at(new Date());

             Authentication auth = SecurityContextHolder.getContext().getAuthentication();
             exploreQuestionsService.uploadQuestionPaper(question);
            return ResponseEntity.status(HttpStatus.CREATED).body("Uploaded successfully!");
        } catch (Exception e) {
//            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error uploading file");
        }
    }

}
