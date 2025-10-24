package com.javaspring.server;

import com.cloudinary.Cloudinary;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class ServerApplication {

	static Dotenv dotenv = Dotenv.configure().load();
	public static void main(String[] args) {
		// ✅ Set environment variables so Spring Boot can use them
		System.setProperty("DB_URL", dotenv.get("DB_URL"));
		System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
		System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));

		// Optional: Debug check
		System.out.println("✅ DB_URL loaded: " + dotenv.get("DB_URL"));
		SpringApplication.run(ServerApplication.class, args);
	}

	@Bean
	public Cloudinary cloudinaryConfig() {
		//this is like connector to cloudinary - we will be able to
		// upload to cloudinary
		Cloudinary cloudinary = null;
		Map<String, String> config = new HashMap<>();
//		System.out.println(dotenv.get("CLOUDINARY_CLOUD_NAME"));
//		System.out.println( dotenv.get("CLOUDINARY_API_KEY"));
		config.put("cloud_name", dotenv.get("CLOUDINARY_CLOUD_NAME"));
		config.put("api_key", dotenv.get("CLOUDINARY_API_KEY"));
		config.put("api_secret", dotenv.get("CLOUDINARY_API_SECRET"));
		cloudinary = new Cloudinary(config);
		return cloudinary;
	}

}
