package com.example.yoga.service;

import com.example.yoga.model.YogaCourse;
import com.example.yoga.repository.YogaCourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class YogaCourseService {
    @Autowired
    private YogaCourseRepository yogaCourseRepository;

    public List<YogaCourse> getAllCourses() {
        return yogaCourseRepository.findAll();
    }

    public Optional<YogaCourse> getCourseById(Long id) {
        return yogaCourseRepository.findById(id);
    }

    public YogaCourse createCourse(YogaCourse yogaCourse) {
        return yogaCourseRepository.save(yogaCourse);
    }

    public YogaCourse updateCourse(Long id, YogaCourse updatedCourse) {
        if (yogaCourseRepository.existsById(id)) {
            updatedCourse.setId(id);
            return yogaCourseRepository.save(updatedCourse);
        } else {
            return null; // Course with the given id not found
        }
    }

    public boolean deleteCourse(Long id) {
        if (yogaCourseRepository.existsById(id)) {
            yogaCourseRepository.deleteById(id);
            return true;
        } else {
            return false; // Course with the given id not found
        }
    }
}
