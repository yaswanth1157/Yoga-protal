package com.example.yoga.repository;

import com.example.yoga.model.YogaCourse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface YogaCourseRepository extends JpaRepository<YogaCourse, Long> {
}
