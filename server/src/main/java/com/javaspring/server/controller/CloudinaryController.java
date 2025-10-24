package com.javaspring.server.controller;

import com.javaspring.server.service.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.Map;

@RestController
@RequestMapping("/media")
public class CloudinaryController {


    private final CloudinaryService cloudinaryService;

    public CloudinaryController(CloudinaryService cloudinaryService) {
        this.cloudinaryService = cloudinaryService;
    }

    @GetMapping("/upload")
    public Map uploadTest(String imageUrl) throws Exception {
        return cloudinaryService.uploadImage(imageUrl);
    }

    @PostMapping("/uploadFile")
    public String uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("title") String title) throws Exception {
        // Convert MultipartFile to temporary File
        String url=cloudinaryService.uploadFile(file);
        System.out.println(url+"urll");

        return "uploaded successfullyyyy" ;
    }
}
