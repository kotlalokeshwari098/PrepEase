package com.javaspring.server.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ExploreQuestionsController {

    @GetMapping("/questions")
    public String getQuestion(){
        return "hello wuestions";
    }
}
