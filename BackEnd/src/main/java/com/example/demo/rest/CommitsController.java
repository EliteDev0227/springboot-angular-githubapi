package com.example.demo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
public class CommitsController {

    @Autowired
    private RestTemplate restTemplate;

    @CrossOrigin
    @RequestMapping("/api/commits")
    public List commits() {
        ResponseEntity<List> forEntity =
                restTemplate.getForEntity(String.format("https://api.github.com/repos/angular/angular/commits?per_page=25&sort=committer-date&order=desc"), List.class);
        List temp = forEntity.getBody();
        return forEntity.getBody();
    }
}
