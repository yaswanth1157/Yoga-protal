package com.example.yoga.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.yoga.model.Admin;
import com.example.yoga.repository.AdminRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    private final AdminRepository adminRepository;

    @Autowired
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public Admin addAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public Admin getAdmin(int aId) {
        Optional<Admin> adminOptional = adminRepository.findById(aId);
        return adminOptional.orElse(null);
    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Admin updateAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public void deleteAdmin(int aId) {
        adminRepository.deleteById(aId);
    }
}
