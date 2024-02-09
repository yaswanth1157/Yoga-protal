package com.example.yoga.controller;

import com.example.yoga.model.YogaCourse;
import com.example.yoga.repository.YogaCourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/yogacourses")
public class YogaCourseController {

    @Autowired
    private YogaCourseRepository yogaCourseRepository;

    @GetMapping
    public ResponseEntity<List<YogaCourse>> getAllYogaCourses() {
        List<YogaCourse> yogaCourses = yogaCourseRepository.findAll();
        return new ResponseEntity<>(yogaCourses, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<YogaCourse> getYogaCourseById(@PathVariable Long id) {
        YogaCourse yogaCourse = yogaCourseRepository.findById(id).orElse(null);
        if (yogaCourse == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(yogaCourse, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<YogaCourse> createYogaCourse(@RequestBody YogaCourse yogaCourse) {
        YogaCourse savedYogaCourse = yogaCourseRepository.save(yogaCourse);
        return new ResponseEntity<>(savedYogaCourse, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<YogaCourse> updateYogaCourse(@PathVariable Long id, @RequestBody YogaCourse updatedYogaCourse) {
        YogaCourse yogaCourse = yogaCourseRepository.findById(id).orElse(null);
        if (yogaCourse == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        updatedYogaCourse.setId(id); 
        YogaCourse savedYogaCourse = yogaCourseRepository.save(updatedYogaCourse);
        return new ResponseEntity<>(savedYogaCourse, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteYogaCourse(@PathVariable Long id) {
        YogaCourse yogaCourse = yogaCourseRepository.findById(id).orElse(null);
        if (yogaCourse == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        yogaCourseRepository.delete(yogaCourse);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
