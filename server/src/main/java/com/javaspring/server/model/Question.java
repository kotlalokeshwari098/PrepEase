package com.javaspring.server.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String url;
    private Date created_at;
    private Date updated_at;
    private Integer year;
    private String affliated;
    private String branch;

    @ManyToOne
    @JoinColumn(name="uploaded_by") // FK column in Question table
    private User user;   // points to User.id

    @ManyToOne
    @JoinColumn(name="subject_code") // FK in Question table → points to Subject.id
    private Subject subject;


    public Question() {
    }

    public Question(int id, int subject_code, String url, String uploaded_by, Date created_at, Date updated_at, int year,String affliated,String branch) {
        this.id = id;
        this.url = url;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.year = year;
        this.affliated = affliated;
        this.branch=branch;
    }

}
