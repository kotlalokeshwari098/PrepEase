package com.javaspring.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;
@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure().load();
		// ✅ Set environment variables so Spring Boot can use them
		System.setProperty("DB_URL", dotenv.get("DB_URL"));
		System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
		System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));

		// Optional: Debug check
		System.out.println("✅ DB_URL loaded: " + dotenv.get("DB_URL"));
		SpringApplication.run(ServerApplication.class, args);
	}

}
