package com.javaspring.server.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "subjectname")
    private String subjectName;
    private Long subjectCode;

    @OneToMany(mappedBy = "subject" , cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Question> questions;


    public Subject() {
    }

    public Subject(String subject_name, Long id, Long subject_code) {
        this.subjectName = subject_name;
        this.id = id;
        this.subjectCode = subject_code;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubject_name() {
        return subjectName;
    }

    public void setSubject_name(String subject_name) {
        this.subjectName = subject_name;
    }

    public Long getSubject_code() {
        return subjectCode;
    }

    public void setSubject_code(Long subject_code) {
        this.subjectCode = subject_code;
    }
}
