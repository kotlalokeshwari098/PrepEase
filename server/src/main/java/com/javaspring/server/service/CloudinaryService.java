package com.javaspring.server.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Map;

@Service
public class CloudinaryService {

    private final Cloudinary cloudinary;

    public CloudinaryService(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
        this.cloudinary.config.secure = true;
    }

    public Map uploadImage(String imageUrl) throws Exception {
        Map params = ObjectUtils.asMap(
                "use_filename", true,
                "unique_filename", false,
                "overwrite", true,
                "resource_type", "raw"
        );
        return cloudinary.uploader().upload(imageUrl, params);
    }

    public String uploadFile(MultipartFile gif) throws IOException {
        try {
            System.out.println(gif + "multi-partfile");
            File uploadedFile = convertMultiPartToFile(gif);
            Map uploadResult = cloudinary.uploader().upload(uploadedFile, ObjectUtils.emptyMap());

            boolean isDeleted = uploadedFile.delete();
            System.out.println(uploadResult+"uploadedresult");

            if (isDeleted) {
                System.out.println("File successfully deleted");
            } else
                System.out.println("File doesn't exist");
            return uploadResult.get("url").toString();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
        private File convertMultiPartToFile(MultipartFile file) throws IOException {
            System.out.println("converting multipart file:");
            File convFile = new File(file.getOriginalFilename());
            FileOutputStream fos = new FileOutputStream(convFile);
            fos.write(file.getBytes());
            fos.close();
            return  convFile;
        }
    }

