package com.example.yoga.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.yoga.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
}
