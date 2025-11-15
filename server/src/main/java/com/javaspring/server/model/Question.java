package com.javaspring.server.model;


import jakarta.persistence.*;

import java.util.Date;

@Entity
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

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getAffliated() {
        return affliated;
    }

    public void setAffliated(String affliated) {
        this.affliated = affliated;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Date updated_at) {
        this.updated_at = updated_at;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}
