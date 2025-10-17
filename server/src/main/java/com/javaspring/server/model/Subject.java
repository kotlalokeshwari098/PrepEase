package com.javaspring.server.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Subject {

    @Id
    private int id;
    private String subject_name;
    private Long subject_code;

    @OneToMany(mappedBy = "subject" , cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Question> questions;


    public Subject() {
    }

    public Subject(String subject_name, int id, Long subject_code) {
        this.subject_name = subject_name;
        this.id = id;
        this.subject_code = subject_code;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSubject_name() {
        return subject_name;
    }

    public void setSubject_name(String subject_name) {
        this.subject_name = subject_name;
    }

    public Long getSubject_code() {
        return subject_code;
    }

    public void setSubject_code(Long subject_code) {
        this.subject_code = subject_code;
    }
}
