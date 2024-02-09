package com.example.yoga.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.yoga.model.Admin;
import com.example.yoga.service.AdminService;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/add")
    public Admin addAdmin(@RequestBody Admin admin) {
        return adminService.addAdmin(admin);
    }

    @GetMapping("/{aId}")
    public Admin getAdmin(@PathVariable int aId) {
        return adminService.getAdmin(aId);
    }

    @GetMapping("/all")
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @PutMapping("/update")
    public Admin updateAdmin(@RequestBody Admin admin) {
        return adminService.updateAdmin(admin);
    }

    @DeleteMapping("/{aId}")
    public String deleteAdmin(@PathVariable int aId) {
        adminService.deleteAdmin(aId);
        return "Admin with ID " + aId + " deleted successfully";
    }
}
